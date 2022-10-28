"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
var express_1 = __importDefault(require("express"));
require("express-async-errors");
require("./postgres");
var routes_1 = require("./routes");
var database_1 = require("./database");
var cors_1 = __importDefault(require("cors"));
var ExcelTableController_1 = require("./controllers/ExcelTableController");
var app = express_1.default();
var bootstrap = function () { return __awaiter(void 0, void 0, void 0, function () {
    var https, fs, path, excelTableController;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, database_1.postgreDB()];
            case 1:
                _a.sent();
                https = require("https");
                fs = require("fs");
                path = require("path");
                excelTableController = new ExcelTableController_1.ExcelTableController();
                // watchFile(
                //   "../../../SPI Integracao de Sistemas Ltda/Superar-Para-Inovar-CDN - API-Armazenamento/ranking.csv",
                //   (curr, prev) => {
                //     console.log(`the current mtime is: ${curr.mtime}`);
                //     console.log(`the previous mtime was: ${prev.mtime}`);
                //     excelTableController.handle();
                //   }
                // );
                app.use(cors_1.default());
                app.use(express_1.default.json());
                app.use(express_1.default.urlencoded({ extended: true }));
                app.use(routes_1.router);
                app.use("/cdn", 
                //ensureAuthenticated,
                express_1.default.static("/home/participante2/SPI Integracao de Sistemas Ltda/Superar-Para-Inovar-CDN - API-Armazenamento/"));
                app.use("/", express_1.default.static("public"));
                app.use("/home", express_1.default.static("public"));
                app.use("/recover", express_1.default.static("recover"));
                app.use("/api/v2/docs", express_1.default.static("api"));
                app.get("*", function (req, res) {
                    res
                        .status(404)
                        .send("<div style='margin: auto;width: 100%;height:100%;text-align: center;background-color:#651D32'><h1 style='color:white'>404 NOT FOUND</h1><img src='https://static.wixstatic.com/media/a04754_ae492f92043d473d89fba314c59f9c7c~mv2.png/v1/fill/w_156,h_102,al_c,q_85,usm_0.66_1.00_0.01/Superar_Inovar_SPI_Logo_2021-04.webpg' width=100/></div>");
                });
                app.use(function (err, request, response, next) {
                    if (err instanceof Error) {
                        return response.status(400).json({
                            error: err.message,
                        });
                    }
                    return response.status(500).json({
                        status: "error",
                        message: "Internal Server Error",
                    });
                });
                // const sslServer = https.createServer(
                //   {
                //     key: fs.readFileSync(path.join(__dirname, "../cert", "server.key")),
                //     cert: fs.readFileSync(path.join(__dirname, "../cert", "server.crt")),
                //   },
                //   app
                // );
                app.listen(3000, function () {
                    console.log("Porta externa -> Server listenin...");
                });
                return [2 /*return*/];
        }
    });
}); };
bootstrap();
