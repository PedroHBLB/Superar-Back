import { Request, Response } from "express";
import { ShowColaboradorDataService } from "../services/ShowColaboradorDataService";

class ShowColaboradorDataController {
  async handle(request: Request, response: Response) {
    const showColaboradorDataService = new ShowColaboradorDataService();

    const colaborador = await showColaboradorDataService.execute();

    return response.status(200).json(colaborador);
  }
}

export { ShowColaboradorDataController };
