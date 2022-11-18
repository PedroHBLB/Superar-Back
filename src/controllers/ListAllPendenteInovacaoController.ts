import { Request, Response } from "express";
import { ListAllPendenteInovacaoService } from "../services/ListAllPendenteInovacaoService";

class ListAllPendenteInovacaoController {
  async handle(request: Request, response: Response) {
    const { start, limit } = request;
    const listAllPendenteInovacaoService =
      new ListAllPendenteInovacaoService();

    const pendentes = await listAllPendenteInovacaoService.execute({
      start,
      limit,
    });

    return response.status(200).json(pendentes);
  }
}

export { ListAllPendenteInovacaoController };
