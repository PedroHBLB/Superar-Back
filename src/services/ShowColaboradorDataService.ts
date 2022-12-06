import { getCustomRepository } from "typeorm";
import { ColaboradorRepositories } from "../repositories/ColaboradorRepositories";
import { classToPlain } from "class-transformer";

class ShowColaboradorDataService {
  async execute() {
    const colaboradorRepositories = getCustomRepository(
      ColaboradorRepositories
    );

    const colaborador = colaboradorRepositories.find();

    return colaborador;
  }
}

export { ShowColaboradorDataService };
