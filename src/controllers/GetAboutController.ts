import { Request, Response } from "express";
import { GetAboutService } from "../services/GetAboutService";

export class GetAboutController {
    async handle(req: Request, res: Response) {
        const aboutService = new GetAboutService();
        const about = await aboutService.execute();

        return res.json(about);
    }
}