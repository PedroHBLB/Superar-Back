import { compare } from "bcryptjs";
import { classToPlain } from "class-transformer";
import { sign } from "jsonwebtoken";
import { getCustomRepository } from "typeorm";
import { ColaboradorRepositories } from "../repositories/ColaboradorRepositories";

interface IAuthenticateRequest {
  email: string;
  password: string;
}

class AuthenticateColaboradorService {
  async execute({ email, password }: IAuthenticateRequest) {
    const colaboradorRepositories = getCustomRepository(
      ColaboradorRepositories
    );

    // const MailConfirm = require("mail-confirm");

    // const emailResponse = new MailConfirm({
    //   emailAddress: email,
    //   timeout: 4000,
    //   mailFrom: "alessbizzz@email.com",
    //   invalidMailboxKeywords: [],
    //   debug: false,
    // });

    // console.log(await emailResponse.check());

    const colaborador = await colaboradorRepositories
      .createQueryBuilder("colaborador")
      .select("colaborador")
      .addSelect("colaborador.password")
      .where("email = :email", { email: email })
      .getOne();

    if (!colaborador) {
      throw new Error("Email/Senha inválida");
    }

    const isPasswordMatch = await compare(password, colaborador.password);

    if (!isPasswordMatch) throw new Error("Email/Senha inválida");

    const token = sign({}, process.env.TOKEN_MD5, {
      subject: colaborador.id,
      expiresIn: "10d",
    });

    return {
      data: classToPlain(colaborador),
      access_token: token,
    };
  }
}

export { AuthenticateColaboradorService };
