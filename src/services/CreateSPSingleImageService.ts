import { getCustomRepository } from "typeorm";
import { ColaboradorRepositories } from "../repositories/ColaboradorRepositories";
import { InternoRepositories } from "../repositories/InternoRepositories";
import { spsave } from "spsave";

interface ISharepointRequest {
  colaborador_id: string;
  interno_id?: string;
  filename: string;
  path: string;
  now: number;
}

class CreateSPSingleimageService {
  async execute({
    colaborador_id,
    interno_id,
    filename,
    path,
    now,
  }: ISharepointRequest) {
    try {
      const internoRepositories = getCustomRepository(InternoRepositories);
      const colaboradorRepositories = getCustomRepository(
        ColaboradorRepositories
      );
      const fs = require("fs");

      const interno = await internoRepositories.findOne({ id: interno_id });
      const colaborador = await colaboradorRepositories.findOne({
        id: colaborador_id,
      });

      if (!interno || !colaborador) throw new Error("Cliente/Post não existe");

      var creds = {
        username: process.env.SP_USER,
        password: process.env.SP_PASSWORD,
      };
      var fileOpts = {
        folder: `desenvolvimento/${colaborador.nome}-${interno.descricao}-${now}`,
        fileName: filename,
        fileContent: fs.readFileSync(path),
      };

      var coreOpts = {
        siteUrl:
          "/home/participante2/SPI Integracao de Sistemas Ltda/Superar-Para-Inovar-CDN - API-Armazenamento/",
      };

      await spsave(coreOpts, creds, fileOpts).catch(function (err) {
        throw new Error("Não foi possível realizar o upload");
      });
    } catch (error) {
      throw new Error("Não foi possível realizar o upload");
    }
  }
}

export { CreateSPSingleimageService };
