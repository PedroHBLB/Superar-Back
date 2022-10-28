"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
var express_1 = require("express");
var fs_1 = __importDefault(require("fs"));
var mime_1 = __importDefault(require("mime"));
var multer_1 = __importDefault(require("multer"));
var ensurePagination_1 = require("./middlewares/ensurePagination");
var ensureAuthenticated_1 = require("./middlewares/ensureAuthenticated");
var ensureAdmin_1 = require("./middlewares/ensureAdmin");
var CreateColaboradorController_1 = require("./controllers/CreateColaboradorController");
var CreatePilarController_1 = require("./controllers/CreatePilarController");
var CreateSaudeController_1 = require("./controllers/CreateSaudeController");
var CreateConhecimentoController_1 = require("./controllers/CreateConhecimentoController");
var CreateInternoController_1 = require("./controllers/CreateInternoController");
var CreateImageController_1 = require("./controllers/CreateImageController");
var AuthenticateColaboradorController_1 = require("./controllers/AuthenticateColaboradorController");
var CreateSingleImageController_1 = require("./controllers/CreateSingleImageController");
var SendColaboradorDataController_1 = require("./controllers/SendColaboradorDataController");
var UpdateColaboradorAvatarController_1 = require("./controllers/UpdateColaboradorAvatarController");
var ListAllAvailablePostsController_1 = require("./controllers/ListAllAvailablePostsController");
var ListAllDocumentsByIdController_1 = require("./controllers/ListAllDocumentsByIdController");
var ListAllColaboradoresPostsController_1 = require("./controllers/ListAllColaboradoresPostsController");
var ListColaboradoresScoresController_1 = require("./controllers/ListColaboradoresScoresController");
var CreateFileController_1 = require("./controllers/CreateFileController");
var ShowSaudeColaboradorScoreController_1 = require("./controllers/ShowSaudeColaboradorScoreController");
var ShowAnotherSaudeColaboradorScoreController_1 = require("./controllers/ShowAnotherSaudeColaboradorScoreController");
var ShowConhecimentoColaboradorScoreController_1 = require("./controllers/ShowConhecimentoColaboradorScoreController");
var ShowAnotherConhecimentoColaboradorScoreController_1 = require("./controllers/ShowAnotherConhecimentoColaboradorScoreController");
var ShowInternoColaboradorScoreController_1 = require("./controllers/ShowInternoColaboradorScoreController");
var ShowAllPillarColaborador_1 = require("./controllers/ShowAllPillarColaborador");
var ShowAllPillarFromAnotherColaborador_1 = require("./controllers/ShowAllPillarFromAnotherColaborador");
var ShowColaboradorRankingController_1 = require("./controllers/ShowColaboradorRankingController");
var ListAllPendenteSaudeController_1 = require("./controllers/ListAllPendenteSaudeController");
var ListAllPendenteConhecimentoController_1 = require("./controllers/ListAllPendenteConhecimentoController");
var UpdateColaboradorSaudeController_1 = require("./controllers/UpdateColaboradorSaudeController");
var UpdateColaboradorConhecimentoController_1 = require("./controllers/UpdateColaboradorConhecimentoController");
var UpdateColaboradorDataController_1 = require("./controllers/UpdateColaboradorDataController");
var RecoverPasswordController_1 = require("./controllers/RecoverPasswordController");
var ResetPasswordController_1 = require("./controllers/ResetPasswordController");

var storage = multer_1.default.diskStorage({
    destination: function (req, file, cb) {
        var dir = "/home/participante2/SPI Integracao de Sistemas Ltda/Superar-Para-Inovar-CDN - API-Armazenamento/" + req.colaborador_id;
        if (!fs_1.default.existsSync(dir)) {
            fs_1.default.mkdirSync(dir);
        }
        cb(null, dir);
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + "." + mime_1.default.extension(file.mimetype));
    },
});
var router = express_1.Router();
exports.router = router;
var upload = multer_1.default({ storage: storage });
var createColaboradorController = new CreateColaboradorController_1.CreateColaboradorController();
var sendColaboradorDataController = new SendColaboradorDataController_1.SendColaboradorDataController();
var authenticateColaboradorController = new AuthenticateColaboradorController_1.AuthenticateColaboradorController();
var createPilarController = new CreatePilarController_1.CreatePilarController();
var createSaudeController = new CreateSaudeController_1.CreateSaudeController();
var createConhecimentoController = new CreateConhecimentoController_1.CreateConhecimentoController();
var createInternoController = new CreateInternoController_1.CreateInternoController();
var createImageController = new CreateImageController_1.CreateImageController();
var createFileController = new CreateFileController_1.CreateFileController();
var createSingleImageController = new CreateSingleImageController_1.CreateSingleImageController();
var updateColaboradorAvatarController = new UpdateColaboradorAvatarController_1.UpdateColaboradorAvatarController();
var listAllAvailablePostsController = new ListAllAvailablePostsController_1.ListAllAvailablePostsController();
var listAllDocumentsByIdController = new ListAllDocumentsByIdController_1.ListAllDocumentsByIdController();
var listAllColaboradoresPostsController = new ListAllColaboradoresPostsController_1.ListAllColaboradoresPostsController();
var listColaboradoresScoresController = new ListColaboradoresScoresController_1.ListColaboradoresScoresController();
var showSaudeColaboradorScoreController = new ShowSaudeColaboradorScoreController_1.ShowSaudeColaboradorScoreController();
var showAnotherSaudeColaboradorScoreController = new ShowAnotherSaudeColaboradorScoreController_1.ShowAnotherColaboradorScoreController();
var showConhecimentoColaboradorScoreController = new ShowConhecimentoColaboradorScoreController_1.ShowConhecimentoColaboradorScoreController();
var showAnotherConhecimentoColaboradorScoreController = new ShowAnotherConhecimentoColaboradorScoreController_1.ShowAnotherConhecimentoColaboradorScoreController();
var showInternoColaboradorScoreService = new ShowInternoColaboradorScoreController_1.ShowInternoColaboradorScoreController();
var showAllPillarColaborador = new ShowAllPillarColaborador_1.ShowAllPillarColaborador();
new ShowInternoColaboradorScoreController_1.ShowInternoColaboradorScoreController();
var showAllPillarFromAnotherColaborador = new ShowAllPillarFromAnotherColaborador_1.ShowAllPillarFromAnotherColaborador();
var showColaboradorRankingController = new ShowColaboradorRankingController_1.ShowColaboradorRankingController();
var listAllPendenteSaudeController = new ListAllPendenteSaudeController_1.ListAllPendenteSaudeController();
var listAllPendenteConhecimentoController = new ListAllPendenteConhecimentoController_1.ListAllPendenteConhecimentoController();
var updateColaboradorSaudeController = new UpdateColaboradorSaudeController_1.UpdateColaboradorSaudeController();
var updateColaboradorConhecimentoController = new UpdateColaboradorConhecimentoController_1.UpdateColaboradorConhecimentoController();
var updateColaboradorDataController = new UpdateColaboradorDataController_1.UpdateColaboradorDataController();
var recoverPasswordController = new RecoverPasswordController_1.RecoverPasswordController();
var resetPasswordController = new ResetPasswordController_1.ResetPasswordController();
router.get("/ping", function (req, res) {
    res.send("pong");
});
router.get("/colaborador", ensureAuthenticated_1.ensureAuthenticated, sendColaboradorDataController.handle);
router.put("/colaborador", ensureAuthenticated_1.ensureAuthenticated, updateColaboradorDataController.handle);
router.post("/colaborador/password", recoverPasswordController.handle);
router.post("/colaborador/:secret_key", ensureAuthenticated_1.ensureAuthenticated, resetPasswordController.handle);
router.get("/colaborador/score", ensureAuthenticated_1.ensureAuthenticated, showAllPillarColaborador.handle);
router.get("/colaborador/ranking", ensureAuthenticated_1.ensureAuthenticated, showColaboradorRankingController.handle);
router.get("/colaborador/score/:id", ensureAuthenticated_1.ensureAuthenticated, showAllPillarFromAnotherColaborador.handle);
router.patch("/colaborador/avatar", ensureAuthenticated_1.ensureAuthenticated, upload.single("image"), updateColaboradorAvatarController.handle);
router.get("/colaboradores/isAvailable", ensureAuthenticated_1.ensureAuthenticated, ensurePagination_1.ensurePagination, listAllAvailablePostsController.handle);
router.get("/colaboradores/scores", ensureAuthenticated_1.ensureAuthenticated, ensurePagination_1.ensurePagination, listColaboradoresScoresController.handle);
router.post("/colaboradores", createColaboradorController.handle);
router.post("/login", authenticateColaboradorController.handle);
router.post("/pilares", createPilarController.handle);
router.post("/pilares/saude", ensureAuthenticated_1.ensureAuthenticated, createSaudeController.handle);
router.post("/pilares/saude/photos", ensureAuthenticated_1.ensureAuthenticated, upload.array("image"), createImageController.handle);
router.get("/pilares/saude/photos", ensureAuthenticated_1.ensureAuthenticated, ensurePagination_1.ensurePagination, listAllColaboradoresPostsController.handle);
router.get("/pilares/saude/pendentes", ensureAuthenticated_1.ensureAuthenticated, ensureAdmin_1.ensureAdmin, ensurePagination_1.ensurePagination, listAllPendenteSaudeController.handle);
router.put("/pilares/saude/pendente/:pillar_id", ensureAuthenticated_1.ensureAuthenticated, ensureAdmin_1.ensureAdmin, updateColaboradorSaudeController.handle);
router.get("/pilares/saude/score", ensureAuthenticated_1.ensureAuthenticated, showSaudeColaboradorScoreController.handle);
router.get("/pilares/saude/score/:id", ensureAuthenticated_1.ensureAuthenticated, showAnotherSaudeColaboradorScoreController.handle);
router.post("/pilares/conhecimento", ensureAuthenticated_1.ensureAuthenticated, createConhecimentoController.handle);
router.post("/pilares/conhecimento/document", ensureAuthenticated_1.ensureAuthenticated, upload.array("file"), createFileController.handle);
router.get("/pilares/conhecimento/documents", ensureAuthenticated_1.ensureAuthenticated, listAllDocumentsByIdController.handle);
router.get("/pilares/conhecimento/score", ensureAuthenticated_1.ensureAuthenticated, showConhecimentoColaboradorScoreController.handle);
router.get("/pilares/conhecimento/score/:id", ensureAuthenticated_1.ensureAuthenticated, showAnotherConhecimentoColaboradorScoreController.handle);
router.get("/pilares/conhecimento/pendentes", ensureAuthenticated_1.ensureAuthenticated, ensureAdmin_1.ensureAdmin, ensurePagination_1.ensurePagination, listAllPendenteConhecimentoController.handle);
router.put("/pilares/conhecimento/pendente/:pillar_id", ensureAuthenticated_1.ensureAuthenticated, ensureAdmin_1.ensureAdmin, updateColaboradorConhecimentoController.handle);
router.post("/pilares/interno", ensureAuthenticated_1.ensureAuthenticated, createInternoController.handle);
router.patch("/pilares/interno/photo", ensureAuthenticated_1.ensureAuthenticated, upload.single("image"), createSingleImageController.handle);
router.get("/pilares/interno/:nome", ensureAuthenticated_1.ensureAuthenticated, showInternoColaboradorScoreService.handle);