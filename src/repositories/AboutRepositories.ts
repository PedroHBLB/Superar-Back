import { EntityRepository, Repository } from "typeorm";
import { About } from "../models/About";

@EntityRepository(About)
class AboutRepositories extends Repository<About> {}

export { AboutRepositories };
