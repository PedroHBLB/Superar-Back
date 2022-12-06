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
    const dataAtual = new Date();
    let anoAtual = dataAtual.getFullYear();
    let mesSeguinte = month + 1;
    if(month === 12){
      mesSeguinte = 1
    }
    const start_date = `${anoAtual}-${month}-1`;
    const end_date = `${mesSeguinte === 1 ? anoAtual + 1 : anoAtual}-${mesSeguinte}-1`;

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
