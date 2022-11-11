import { getCustomRepository } from "typeorm";
//import { InovacaoRepositories } from "../repositories/InovacaoRepositories";
import { ConhecimentoRepositories } from "../repositories/ConhecimentoRepositories";

interface IScoreInovacaoRequest {
  id: string;
  month: number;
}

class ShowInovacaoColaboradorScoreService {
  async execute({ id, month }: IScoreInovacaoRequest) {
    const internoRepositories = getCustomRepository(ConhecimentoRepositories);
    //A cada ano que passar mudar o start_date e o end_date
    const start_date = `2022-${month}-1`;
    const end_date = `2022-${month + 1}-1`;

    const score = await internoRepositories
      .createQueryBuilder("inovacao")
      .leftJoinAndSelect("inovacao.pilarId", "pilar")
      .where("pilar.colaborador_id = :id", { id })
      .andWhere(
        `'[${start_date}, ${end_date}]'::daterange @> pilar.created_at::date`
      )
      // .cache(`${id}Interno:${nome}_${month}`, 36000000)
      .select("SUM(pilar.pontuacao)", "pontuacao_do_mes")
      .getRawOne();

    if (score.pontuacao_do_mes === null) score.pontuacao_do_mes = 0;

    return score;
  }
}

export { ShowInovacaoColaboradorScoreService };
