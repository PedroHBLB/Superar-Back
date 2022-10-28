import { getCustomRepository } from "typeorm";
import { ColaboradorRepositories } from "../repositories/ColaboradorRepositories";
import { classToPlain } from "class-transformer";

interface IImageRequest {
  colaborador_id: string;
  avatar: string;
}

class UpdateColaboradorAvatarService {
  async execute({ colaborador_id, avatar }: IImageRequest) {
    const colaboradorRepositories = getCustomRepository(
      ColaboradorRepositories
    );

    if (!colaborador_id)
      throw new Error("Necessário identificador do colaborador");

    const colaborador = await colaboradorRepositories.save({
      id: colaborador_id,
      avatar,
    });

    return classToPlain(colaborador);
  }
}

export { UpdateColaboradorAvatarService };
