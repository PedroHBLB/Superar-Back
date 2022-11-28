import { Request, Response } from "express";
import { UpdateColaboradorInternoService } from "../services/UpdateColaboradorInternoService";

class UpdateColaboradorInternoController {
  async handle(request: Request, response: Response) {
    const { status, categoria, justificativa } = request.body;
    const { colaborador_id } = request;
    const { pillar_id } = request.params;
    const updateColaboradorInternoService = new UpdateColaboradorInternoService();

    const pilar = await updateColaboradorInternoService.execute({
      pillar_id,
      status,
      categoria,
      justificativa,
      colaborador_id,
    });

    return response.status(201).json(pilar);
  }
}

export { UpdateColaboradorInternoController };
