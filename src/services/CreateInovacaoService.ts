import { getCustomRepository } from "typeorm";
import { InovacaoRepositories } from "../repositories/InovacaoRepositories";
import { CreatePilarService } from "./CreatePilarService";

interface ITextRequest {
    colaborador_id: string;
    titulo: string;
    descricao: string;
}

class CreateInovacaoService {
    async execute({
        colaborador_id,
        titulo,
        descricao,
    }: ITextRequest) {
        const inovacaoRepositories = getCustomRepository(InovacaoRepositories);
        const pilarService = new CreatePilarService();

        const pilar_id = await pilarService.execute({ colaborador_id });

        const inovacao = inovacaoRepositories.create({
            pilar_id,
            titulo,
            descricao,
        });

        await inovacaoRepositories.save(inovacao);

        return inovacao.id;
    }
}

export { CreateInovacaoService };
