import { getRepository } from "typeorm";
import { About } from "../models/About";

export class GetAboutService {
    async execute() {
        const aboutRepositories = getRepository(About);
        
        const about = await aboutRepositories.find();

        return about;
    }
}