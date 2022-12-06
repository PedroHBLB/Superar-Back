import { classToClass, classToPlain } from "class-transformer";
import { format } from "date-fns";
import { getCustomRepository } from "typeorm";
import { PilarRepositories } from "../repositories/PilarRepositories";

interface IScoresRequest {
  start: number;
  limit: number;
  month: number;
}

class ListColaboradoresScoresService {
  async execute({ start, limit, month }: IScoresRequest) {
    const pilarRepositories = getCustomRepository(PilarRepositories);
    const dataAtual = new Date();
    let anoAtual = dataAtual.getFullYear();
    let mesSeguinte = month + 1;
    if(month === 12){
      mesSeguinte = 1
    }

    const start_date = `${anoAtual}-${month}-1`;
    const end_date = `${mesSeguinte === 1 ? anoAtual + 1 : anoAtual}-${mesSeguinte}-1`;

    const scores = await pilarRepositories
      .createQueryBuilder("pilares")
      .select("SUM(pilares.pontuacao)", "pontuacao_do_mes")
      .leftJoinAndSelect("pilares.colaboradorId", "colaborador")
      .groupBy("colaborador.id")
      .orderBy("pontuacao_do_mes", "DESC")
      .where(
        `'[${start_date}, ${end_date}]'::daterange @> pilares.created_at::date`
      )
      // .cache(`rankingScore:${start}_${limit}`, 3600000)
      .offset(start)
      .limit(limit)
      .getRawMany();

    return scores;
  }
}

export { ListColaboradoresScoresService };
