import { EntityRepository, Repository } from "typeorm";
import { Inovacao } from "../models/Inovacao";

@EntityRepository(Inovacao)
class InovacaoRepositories extends Repository<Inovacao> {}

export { InovacaoRepositories };
