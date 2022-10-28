import { getCustomRepository } from "typeorm";
import { ConhecimentoRepositories } from "../repositories/ConhecimentoRepositories";

interface IScoreConhecimentoRequest {
  id: string;
  month: number;
}

class ShowConhecimentoColaboradorScoreService {
  async execute({ id, month }: IScoreConhecimentoRequest) {
    const conhecimentoRepositories = getCustomRepository(
      ConhecimentoRepositories
    );
    //A cada ano que passar mudar o start_date e o end_date
    const start_date = `2022-${month}-1`;
    const end_date = `2022-${month + 1}-1`;

    const score = await conhecimentoRepositories
      .createQueryBuilder("conhecimento")
      .leftJoinAndSelect("conhecimento.pilarId", "pilar")
      .where("pilar.colaborador_id = :id", { id: id })
      .andWhere(
        `'[${start_date}, ${end_date}]'::daterange @> pilar.created_at::date`
      )
      // .cache(`${id}Conhecimento:${month}`, 3600000)
      .select("SUM(pilar.pontuacao)", "pontuacao_do_mes")
      .getRawOne();

    if (score.pontuacao_do_mes === null) score.pontuacao_do_mes = 0;
    return score;
  }
}

export { ShowConhecimentoColaboradorScoreService };
