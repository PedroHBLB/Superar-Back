import { Request, Response } from "express";
import { ShowInovacaoColaboradorScoreService } from "../services/ShowInovacaoColaboradorScoreService";

class ShowInovacaoColaboradorScoreController {
  async handle(request: Request, response: Response) {
    try {
      const { colaborador_id } = request;
      const { nome } = request.params;
      const { redirect_month } = request.query;
      const showInovacaoColaboradorScoreService =
        new ShowInovacaoColaboradorScoreService();

        const possible_names = ["conhecimento"];

        if (!possible_names.includes(nome))
          return response.status(404).json({ pilar: "pilar não existe" });

      const score = await showInovacaoColaboradorScoreService.execute({
        id: colaborador_id,
        nome,
        month: Number(redirect_month),
      });

      return response.json(score);
    } catch (error) {
      return response.status(404);
    }
  }
}

export { ShowInovacaoColaboradorScoreController };
