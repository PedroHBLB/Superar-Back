import { getCustomRepository } from "typeorm";
import { ColaboradorRepositories } from "../repositories/ColaboradorRepositories";
import { classToPlain } from "class-transformer";

interface IColaboradorRequest {
    id: string;
}

class DeleteColaboradorDataService {
    async execute({ id }: IColaboradorRequest) {
        const colaboradorRepositories = getCustomRepository(
            ColaboradorRepositories
        );

        if (!id) throw new Error("Id necessário");

        const colaborador = colaboradorRepositories.delete(id);

        if (!colaborador) throw new Error("Usuário não existe");

        return classToPlain(colaborador);
    }
}

export { DeleteColaboradorDataService };
