import { Router } from "express";
import fs from "fs";
import path from "path";
import mime from "mime";
import multer from "multer";
import { ensurePagination } from "./middlewares/ensurePagination";
import { ensureAuthenticated } from "./middlewares/ensureAuthenticated";
import { ensureAdmin } from "./middlewares/ensureAdmin";
import { CreateColaboradorController } from "./controllers/CreateColaboradorController";
import { CreatePilarController } from "./controllers/CreatePilarController";
import { CreateSaudeController } from "./controllers/CreateSaudeController";
import { CreateConhecimentoController } from "./controllers/CreateConhecimentoController";
import { CreateInternoController } from "./controllers/CreateInternoController";
import { CreateImageController } from "./controllers/CreateImageController";
import { CreateInovacaoController } from "./controllers/CreateInovacaoController";
import { AuthenticateColaboradorController } from "./controllers/AuthenticateColaboradorController";
import { CreateSingleImageController } from "./controllers/CreateSingleImageController";
import { SendColaboradorDataController } from "./controllers/SendColaboradorDataController";
import { UpdateColaboradorAvatarController } from "./controllers/UpdateColaboradorAvatarController";
import { ListAllPendenteInternoController } from "./controllers/ListAllPendenteInternoController";
import { ListAllAvailablePostsController } from "./controllers/ListAllAvailablePostsController";
import { ListAllDocumentsByIdController } from "./controllers/ListAllDocumentsByIdController";
import { ListAllColaboradoresPostsController } from "./controllers/ListAllColaboradoresPostsController";
import { ListColaboradoresScoresController } from "./controllers/ListColaboradoresScoresController";
import { CreateFileController } from "./controllers/CreateFileController";
import { ShowSaudeColaboradorScoreController } from "./controllers/ShowSaudeColaboradorScoreController";
import { ShowAnotherColaboradorScoreController } from "./controllers/ShowAnotherSaudeColaboradorScoreController";
import { ShowConhecimentoColaboradorScoreController } from "./controllers/ShowConhecimentoColaboradorScoreController";
import { ShowAnotherConhecimentoColaboradorScoreController } from "./controllers/ShowAnotherConhecimentoColaboradorScoreController";
import { ShowInternoColaboradorScoreController } from "./controllers/ShowInternoColaboradorScoreController";
import { ShowInovacaoColaboradorScoreController } from "./controllers/ShowInovacaoColaboradorController";
import { ShowAllPillarColaborador } from "./controllers/ShowAllPillarColaborador";
import { ShowAllPillarFromAnotherColaborador } from "./controllers/ShowAllPillarFromAnotherColaborador";
import { ShowColaboradorRankingController } from "./controllers/ShowColaboradorRankingController";
import { ListAllPendenteSaudeController } from "./controllers/ListAllPendenteSaudeController";
import { ListAllPendenteConhecimentoController } from "./controllers/ListAllPendenteConhecimentoController";
import { ListAllPendenteInovacaoController } from "./controllers/ListAllPendenteInovacaoController";
import { UpdateColaboradorInovacaoController } from "./controllers/UpdateColaboradorInovacaoController";
import { UpdateColaboradorSaudeController } from "./controllers/UpdateColaboradorSaudeController";
import { UpdateColaboradorConhecimentoController } from "./controllers/UpdateColaboradorConhecimentoController";
import { UpdateColaboradorDataController } from "./controllers/UpdateColaboradorDataController";
import { UpdateColaboradorInternoController } from "./controllers/UpdateColaboradorInternoController";
import { RecoverPasswordController } from "./controllers/RecoverPasswordController";
import { ResetPasswordController } from "./controllers/ResetPasswordController";
import { GetAboutController } from "./controllers/GetAboutController";
import { ShowColaboradorDataController } from "./controllers/ShowColaboradorDataController";
import { DeleteColaboradorDataController } from "./controllers/DeleteColaboradorDataController";

// const fileFilter = (req, res, cb) => {
//   if(req.mimetype !== `image/jpeg` && req.mimetype !== `image/png` && req.mimetype !== `image/jpg`){
//     return cb(new multer.MulterError("Arquivo selecionado nao pode ser enviado"));
//   }
//   return cb(null, true)
// }

const fileFilter = (req, file, cb) => {
  if(file.mimetype !== "image/jpeg" && file.mimetype !== "image/jpg" && file.mimetype !== "image/png"){
    return cb(null, false)
  }
  return cb(null, true)
}

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    let dir = `./uploads/${req.colaborador_id}`;

    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir);
    }
    cb(null, dir);
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}.${mime.extension(file.mimetype)}`);
  },
});
// const limits = {
//   fields: 10,
//   fileSize: 500 * 1024,
//   files: 1,
// }

const router = Router();
const upload = multer({ storage, fileFilter});

const createColaboradorController = new CreateColaboradorController();
const sendColaboradorDataController = new SendColaboradorDataController();
const authenticateColaboradorController =
  new AuthenticateColaboradorController();
const createPilarController = new CreatePilarController();
const createSaudeController = new CreateSaudeController();
const createConhecimentoController = new CreateConhecimentoController();
const createInternoController = new CreateInternoController();
const createImageController = new CreateImageController();
const createFileController = new CreateFileController();
const createSingleImageController = new CreateSingleImageController();
const createInovacaoController = new CreateInovacaoController();
const updateColaboradorAvatarController =
  new UpdateColaboradorAvatarController();
const updateColaboradorInovacaoController = 
  new UpdateColaboradorInovacaoController();
const listAllAvailablePostsController = new ListAllAvailablePostsController();
const listAllDocumentsByIdController = new ListAllDocumentsByIdController();
const listAllPendenteInovacaoController = new ListAllPendenteInovacaoController();
const listAllColaboradoresPostsController =
  new ListAllColaboradoresPostsController();
const listAllPendenteInternoController =
  new ListAllPendenteInternoController();
const listColaboradoresScoresController =
  new ListColaboradoresScoresController();
const showSaudeColaboradorScoreController =
  new ShowSaudeColaboradorScoreController();
const showAnotherSaudeColaboradorScoreController =
  new ShowAnotherColaboradorScoreController();
const showConhecimentoColaboradorScoreController =
  new ShowConhecimentoColaboradorScoreController();
const showAnotherConhecimentoColaboradorScoreController =
  new ShowAnotherConhecimentoColaboradorScoreController();
const showInternoColaboradorScoreController =
  new ShowInternoColaboradorScoreController();
const showAllPillarColaborador = 
  new ShowAllPillarColaborador();
const showColaboradorDataController =
  new ShowColaboradorDataController();
const showAllPillarFromAnotherColaborador =
  new ShowAllPillarFromAnotherColaborador();
const showColaboradorRankingController = new ShowColaboradorRankingController();
const showInovacaoColaboradorScoreController = new ShowInovacaoColaboradorScoreController();
const listAllPendenteSaudeController = new ListAllPendenteSaudeController();
const listAllPendenteConhecimentoController =
  new ListAllPendenteConhecimentoController();
const updateColaboradorInternoController =
  new UpdateColaboradorInternoController();
const updateColaboradorSaudeController = new UpdateColaboradorSaudeController();
const updateColaboradorConhecimentoController =
  new UpdateColaboradorConhecimentoController();
const updateColaboradorDataController = new UpdateColaboradorDataController();

const recoverPasswordController = new RecoverPasswordController();
const resetPasswordController = new ResetPasswordController();

const getAboutController = new GetAboutController();

const deleteColaboradorDataController = new DeleteColaboradorDataController();

router.get("/ping", (req, res) => {
  res.send("pong");
});
router.get(
  "/colaborador",
  ensureAuthenticated,
  sendColaboradorDataController.handle
);

router.get(
  "/colaborador/screen",
  showColaboradorDataController.handle
);

router.delete(
  "/colaborador/delete",
  deleteColaboradorDataController.handle
);

router.put(
  "/colaborador",
  ensureAuthenticated,
  updateColaboradorDataController.handle
);

router.post("/colaborador/password", recoverPasswordController.handle);

router.post(
  "/colaborador/:secret_key",
  ensureAuthenticated,
  resetPasswordController.handle
);
router.get(
  "/colaborador/score",
  ensureAuthenticated,
  showAllPillarColaborador.handle
);
router.get(
  "/colaborador/ranking",
  ensureAuthenticated,
  showColaboradorRankingController.handle
);
router.get(
  "/colaborador/score/:id",
  ensureAuthenticated,
  showAllPillarFromAnotherColaborador.handle
);

router.patch(
  "/colaborador/avatar",
  ensureAuthenticated,
  upload.single("image"),
  updateColaboradorAvatarController.handle
);
router.get(
  "/colaboradores/isAvailable",
  ensureAuthenticated,
  ensurePagination,
  listAllAvailablePostsController.handle
);
router.get(
  "/colaboradores/scores",
  ensureAuthenticated,
  ensurePagination,
  listColaboradoresScoresController.handle
);

router.post("/colaboradores", createColaboradorController.handle);

router.post("/login", authenticateColaboradorController.handle);

router.post("/pilares", createPilarController.handle);

/*

|==============================================|
 *******************Saude**********************
|==============================================|

*/

router.post(
  "/pilares/saude",
  ensureAuthenticated,
  createSaudeController.handle
);
router.post(
  "/pilares/saude/photos",
  ensureAuthenticated,
  upload.array("image"),
  createImageController.handle
);
router.get(
  "/pilares/saude/photos",
  ensureAuthenticated,
  ensurePagination,
  listAllColaboradoresPostsController.handle
);
router.get(
  "/pilares/saude/pendentes",
  ensureAuthenticated,
  ensureAdmin,
  ensurePagination,
  listAllPendenteSaudeController.handle
);
router.put(
  "/pilares/saude/pendente/:pillar_id",
  ensureAuthenticated,
  ensureAdmin,
  updateColaboradorSaudeController.handle
);
router.get(
  "/pilares/saude/score",
  ensureAuthenticated,
  showSaudeColaboradorScoreController.handle
);
router.get(
  "/pilares/saude/score/:id",
  ensureAuthenticated,
  showAnotherSaudeColaboradorScoreController.handle
);
/*

|==============================================|
 ****************Conhecimento******************
|==============================================|

*/
router.post(
  "/pilares/conhecimento",
  ensureAuthenticated,
  createConhecimentoController.handle
);
router.post(
  "/pilares/conhecimento/document",
  ensureAuthenticated,
  upload.array("file"),
  createFileController.handle
);
router.get(
  "/pilares/conhecimento/documents",
  ensureAuthenticated,
  listAllDocumentsByIdController.handle
);
router.get(
  "/pilares/conhecimento/score",
  ensureAuthenticated,
  showConhecimentoColaboradorScoreController.handle
);
router.get(
  "/pilares/conhecimento/score/:id",
  ensureAuthenticated,
  showAnotherConhecimentoColaboradorScoreController.handle
);
router.get(
  "/pilares/conhecimento/pendentes",
  ensureAuthenticated,
  ensureAdmin,
  ensurePagination,
  listAllPendenteConhecimentoController.handle
);
router.put(
  "/pilares/conhecimento/pendente/:pillar_id",
  ensureAuthenticated,
  ensureAdmin,
  updateColaboradorConhecimentoController.handle
);

/*

|==============================================|
 ****************Interno***********************
|==============================================|

*/

router.post(
  "/pilares/interno",
  ensureAuthenticated,
  createInternoController.handle
);
router.patch(
  "/pilares/interno/photo",
  ensureAuthenticated,
  upload.single("image"),
  createSingleImageController.handle
);
router.get(
  "/pilares/interno/:nome",
  ensureAuthenticated,
  showInternoColaboradorScoreController.handle
);
router.get(
  "/pilares/interno/pendentes",
  ensureAuthenticated,
  ensureAdmin,
  ensurePagination,
  listAllPendenteInternoController.handle
);
router.put(
  "/pilares/interno/pendente/:pillar_id",
  ensureAuthenticated,
  ensureAdmin,
  updateColaboradorInternoController.handle
);

/*

|==============================================|
 ****************Inovacao***********************
|==============================================|

*/

router.post(
  "/pilares/inovacao",
  ensureAuthenticated,
  createInovacaoController.handle
);

router.get(
  "/pilares/inovacao/score",
  ensureAuthenticated,
  showInovacaoColaboradorScoreController.handle
);
router.get(
  "/pilares/inovacao/pendentes",
  ensureAuthenticated,
  ensureAdmin,
  ensurePagination,
  listAllPendenteInovacaoController.handle
);
router.put(
  "/pilares/inovacao/pendente/:pillar_id",
  ensureAuthenticated,
  ensureAdmin,
  updateColaboradorInovacaoController.handle
);

router.get(
  "/about/",
  getAboutController.handle
)

export { router };