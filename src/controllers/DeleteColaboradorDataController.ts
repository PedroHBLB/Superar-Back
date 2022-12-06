import { Request, Response } from "express";
import { DeleteColaboradorDataService } from "../services/DeleteColaboradorDataService";

class DeleteColaboradorDataController {
  async handle(request: Request, response: Response) {
    const { colaborador_id } = request;
    const deleteColaboradorDataService = new DeleteColaboradorDataService();

    const colaborador = await deleteColaboradorDataService.execute({
        id: colaborador_id,
      });

    return response.status(200).json(colaborador);
  }
}

export { DeleteColaboradorDataController };
