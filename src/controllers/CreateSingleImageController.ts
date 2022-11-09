import { Request, Response } from "express";
import ip from "ip";
import { CreateSingleImageService } from "../services/CreateSingleImageService";

export interface Photo {
  fieldname: string;
  originalname: string;
  encoding: string;
  mimetype: string;
  destination: string;
  filename: string;
  path: string;
  size: number;
}

class CreateSingleImageController {
  async handle(request: Request, response: Response) {
    const createSingleImageService = new CreateSingleImageService();

    const file = request.file as Photo;
    const { colaborador_id } = request;
    let interno_id: string;
    if (request.query && request.query.interno_id) {
      interno_id = (request.query as any).interno_id;
    }

    const comprovante = `http://192.168.11.105:3000/cdn/${colaborador_id}/${file.filename}`;
    try {
      const saveComprovante = await createSingleImageService.execute({
        interno_id,
        comprovante,
      });

      return response.status(201).json(saveComprovante);
    } catch (error) {
      throw new Error(error.message);
    }
  }
}

export { CreateSingleImageController };
