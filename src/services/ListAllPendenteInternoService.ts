import { classToPlain } from "class-transformer";
import { getCustomRepository } from "typeorm";
import { InternoRepositories } from "../repositories/InternoRepositories";

interface IDocumentsRequest {
  start: number;
  limit: number;
}

class ListAllPendenteInternoService {
  async execute({ start, limit }: IDocumentsRequest) {
    const internoRepositories = getCustomRepository(InternoRepositories);

    const pendentes = await internoRepositories
      .createQueryBuilder("post")
      .leftJoinAndSelect("post.pilarId", "pilar")
      .leftJoinAndSelect("pilar.colaboradorId", "colaborador")
      .where("pilar.status = :status", { status: "pendente" })
      .orderBy("pilar.created_at", "ASC")
      .leftJoinAndSelect("post.comprovante", "comprovante")
      .skip(start)
      .take(limit)
      // .cache(`saudePendentes:${start}_${limit}`, 3600000)
      .getMany();

    return classToPlain(pendentes);
  }
}

export { ListAllPendenteInternoService };
