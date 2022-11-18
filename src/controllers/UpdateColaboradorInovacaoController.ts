import { Request, Response } from "express";
import { UpdateColaboradorInovacaoService } from "../services/UpdateColaboradorInovacaoService";

class UpdateColaboradorInovacaoController {
  async handle(request: Request, response: Response) {
    const { colaborador_id } = request;
    const { status, categoria, pontuacao, justificativa } = request.body;
    const { pillar_id } = request.params;
    const updateColaboradorInovacaoService =
      new UpdateColaboradorInovacaoService();

    const pilar = await updateColaboradorInovacaoService.execute({
      pillar_id,
      status,
      categoria,
      pontuacao: pontuacao,
      justificativa,
      colaborador_id,
    });

    return response.status(201).json(pilar);
  }
}

export { UpdateColaboradorInovacaoController };
