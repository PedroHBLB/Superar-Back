import { classToPlain } from "class-transformer";
import { getCustomRepository } from "typeorm";
import { InovacaoRepositories } from "../repositories/InovacaoRepositories";

interface IDocumentsRequest {
  start: number;
  limit: number;
}

class ListAllPendenteInovacaoService {
  async execute({ start, limit }: IDocumentsRequest) {
    const inovacaoRepositories = getCustomRepository(
      InovacaoRepositories
    );

    const pendentes = await inovacaoRepositories
      .createQueryBuilder("inovacao")
      .leftJoinAndSelect("inovacao.pilarId", "pilar")
      .leftJoinAndSelect("pilar.colaboradorId", "colaborador")
      .where("pilar.status = :status", { status: "pendente" })
      .orderBy("pilar.created_at", "ASC")
      //.leftJoinAndSelect("conhecimento.files", "files")
      .skip(start)
      .take(limit)
      // .cache(`conhecimentoPendentes:${start}_${limit}`, 3600000)
      .getMany();

    return classToPlain(pendentes);
  }
}

export { ListAllPendenteInovacaoService };
