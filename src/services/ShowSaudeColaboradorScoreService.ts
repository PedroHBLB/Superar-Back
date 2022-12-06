import { getCustomRepository } from "typeorm";
import { SaudeRepositories } from "../repositories/SaudeRepositories";

interface IScoreSaudeRequest {
  id: string;
  month: number;
}

class ShowSaudeColaboradorScoreService {
  async execute({ id, month }: IScoreSaudeRequest) {
    const saudeRepositories = getCustomRepository(SaudeRepositories);
    const dataAtual = new Date();
    let anoAtual = dataAtual.getFullYear();
    let mesSeguinte = month + 1;
    if(month === 12){
      mesSeguinte = 1
    }
    const start_date = `${anoAtual}-${month}-1`;
    const end_date = `${mesSeguinte === 1 ? anoAtual + 1 : anoAtual}-${mesSeguinte}-1`;

    const score = await saudeRepositories
      .createQueryBuilder("saude")
      .leftJoinAndSelect("saude.pilarId", "pilar")
      .where("pilar.colaborador_id = :id", { id: id })
      .andWhere(
        `'[${start_date}, ${end_date}]'::daterange @> pilar.created_at::date`
      )
      // .cache(`${id}Saude:${month}`, 3600000)
      .select("SUM(pilar.pontuacao)", "pontuacao_do_mes")
      .getRawOne();

    if (score.pontuacao_do_mes === null) score.pontuacao_do_mes = 0;

    return score;
  }
}

export { ShowSaudeColaboradorScoreService };
