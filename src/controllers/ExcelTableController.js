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
exports.ExcelTableController = void 0;
var ExcelTableService_1 = require("../services/ExcelTableService");
var fs_1 = __importDefault(require("fs"));
var csv_parse_1 = __importDefault(require("csv-parse"));
var colaboradores = [];
function addData(colaborador, setor, resumos_livros_artigos, treinamentos_palestras_cursos, artigo, licoes_aprendidas, quiz, atividade_fisica, alimentacao_saudavel, qualidade, walk_the_talk, responsabilidade_social, total, carteira) {
    var data = {
        colaborador: colaborador,
        setor: setor,
        resumos_livros_artigos: resumos_livros_artigos,
        treinamentos_palestras_cursos: treinamentos_palestras_cursos,
        artigo: artigo,
        licoes_aprendidas: licoes_aprendidas,
        quiz: quiz,
        atividade_fisica: atividade_fisica,
        alimentacao_saudavel: alimentacao_saudavel,
        qualidade: qualidade,
        walk_the_talk: walk_the_talk,
        responsabilidade_social: responsabilidade_social,
        total: total,
        carteira: carteira,
    };
    colaboradores.push(data); //should add a new line
}
var ExcelTableController = /** @class */ (function () {
    function ExcelTableController() {
    }
    ExcelTableController.prototype.handle = function () {
        return __awaiter(this, void 0, void 0, function () {
            var excelTableService, inputPath, file;
            return __generator(this, function (_a) {
                excelTableService = new ExcelTableService_1.ExcelTableService();
                inputPath = "/home/participante2/SPI Integracao de Sistemas Ltda/Superar-Para-Inovar-CDN - API-Armazenamento/ranking.csv";
                file = fs_1.default.readFileSync(inputPath);
                csv_parse_1.default(file, { columns: true, delimiter: ",", encoding: "utf-8" }, function (err, results) {
                    if (err) {
                        return console.log(err);
                    }
                    for (var _i = 0, results_1 = results; _i < results_1.length; _i++) {
                        var row = results_1[_i];
                        //loop through each object parsed from the csv
                        addData(row["Colaborador"], row["Unidade"], Number(row["Resumo de Livros e Artigos"].replace(",", ".")), Number(row["Treinamentos, Palestras e Cursos"].replace(",", ".")), Number(row["Artigo"].replace(",", ".")), Number(row["Lições Aprendidas"].replace(",", ".")), Number(row["Quiz"].replace(",", ".")), Number(row["Atividade Física"].replace(",", ".")), Number(row["Alimentação Saudável"].replace(",", ".")), Number(row["Qualidade"].replace(",", ".")), Number(row["Walk The Talk"].replace(",", ".")), Number(row["Responsabilidade Social Individual"].replace(",", ".")), Number(row["TOTAL"].replace(",", ".")), Number(row["CARTEIRA"].replace(",", ".")));
                    }
                    excelTableService.execute({ colaboradores: colaboradores }); // this should be populated properly
                    /* Do anything that needs to use colaboradores here */
                });
                return [2 /*return*/];
            });
        });
    };
    return ExcelTableController;
}());
exports.ExcelTableController = ExcelTableController;
