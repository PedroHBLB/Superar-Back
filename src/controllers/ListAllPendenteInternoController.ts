import { Request, Response } from "express";
import { ListAllPendenteInternoService } from "../services/ListAllPendenteInternoService";

class ListAllPendenteInternoController {
  async handle(request: Request, response: Response) {
    const { start, limit } = request;
    const listAllPendenteInternoService = new ListAllPendenteInternoService();

    const pendentes = await listAllPendenteInternoService.execute({
      start,
      limit,
    });

    return response.status(200).json(pendentes);
  }
}

export { ListAllPendenteInternoController };
