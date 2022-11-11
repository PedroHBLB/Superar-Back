import { Request, Response } from "express";
import { ShowInovacaoColaboradorScoreService } from "../services/ShowInovacaoColaboradorScoreService";

class ShowInovacaoColaboradorScoreController {
  async handle(request: Request, response: Response) {
    try {
      const { colaborador_id } = request;
      const { redirect_month } = request.query;
      const showInovacaoColaboradorScoreService =
        new ShowInovacaoColaboradorScoreService();

      const score = await showInovacaoColaboradorScoreService.execute({
        id: colaborador_id,
        month: Number(redirect_month),
      });

      return response.json(score);
    } catch (error) {
      return response.status(404);
    }
  }
}

export { ShowInovacaoColaboradorScoreController };
