import { Request, Response } from "express";
import { CreateInovacaoService } from "../services/CreateInovacaoService";
import ip from "ip";

class CreateInovacaoController {
  async handle(request: Request, response: Response) {
    const { colaborador_id } = request;
    const { titulo, descricao } = request.body;

    const createInovacaoService = new CreateInovacaoService();

    const inovacao = await createInovacaoService.execute({
      colaborador_id,
      titulo,
      descricao,
    });

    return response.status(201).json(inovacao);
  }
}

export { CreateInovacaoController };
