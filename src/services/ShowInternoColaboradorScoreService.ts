import { getCustomRepository } from "typeorm";
import { InternoRepositories } from "../repositories/InternoRepositories";

interface IScoreColaboradorRequest {
  id: string;
  nome: string;
  month: number;
}

class ShowInternoColaboradorScoreService {
  async execute({ id, nome, month }: IScoreColaboradorRequest) {
    const internoRepositories = getCustomRepository(InternoRepositories);
    const dataAtual = new Date();
    let anoAtual = dataAtual.getFullYear();
    let mesSeguinte = month + 1;
    if(month === 12){
      mesSeguinte = 1
    }
    const start_date = `${anoAtual}-${month}-1`;
    const end_date = `${mesSeguinte === 1 ? anoAtual + 1 : anoAtual}-${mesSeguinte}-1`;

    const score = await internoRepositories
      .createQueryBuilder("interno")
      .leftJoinAndSelect("interno.pilarId", "pilar")
      .where("pilar.colaborador_id = :id", { id })
      .andWhere("interno.nome = :nome", { nome })
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

export { ShowInternoColaboradorScoreService };
