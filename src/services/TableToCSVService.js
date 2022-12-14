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
var __spreadArray = (this && this.__spreadArray) || function (to, from) {
    for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
    return to;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TableToCSVService = void 0;
var typeorm_1 = require("typeorm");
var BaseRankRepositories_1 = require("../repositories/BaseRankRepositories");
var fs_1 = __importDefault(require("fs"));
var TableToCSVService = /** @class */ (function () {
    function TableToCSVService() {
    }
    TableToCSVService.prototype.execute = function () {
        return __awaiter(this, void 0, void 0, function () {
            var baseRepositories, colaboradores, csvString;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        baseRepositories = typeorm_1.getCustomRepository(BaseRankRepositories_1.BaseRankRepositories);
                        return [4 /*yield*/, baseRepositories.find({
                                order: { total: "DESC" },
                            })];
                    case 1:
                        colaboradores = _a.sent();
                        csvString = __spreadArray([
                            [
                                "",
                                "Colaborador",
                                "Unidade",
                                "Resumo de Livros e Artigos",
                                "Treinamentos, Palestras e Cursos",
                                "Artigo",
                                "Li????es Aprendidas",
                                "Quiz",
                                "Atividade F??sica",
                                "Alimenta????o Saud??vel",
                                "Qualidade",
                                "Walk The Talk",
                                "Responsabilidade Social Individual",
                                "TOTAL",
                                "CARTEIRA",
                            ]
                        ], colaboradores.map(function (colaborador, index) { return [
                            index + 1,
                            String(colaborador.colaborador),
                            String(colaborador.setor),
                            Number.isInteger(colaborador.resumos_livros_artigos)
                                ? colaborador.resumos_livros_artigos === 0
                                    ? ""
                                    : colaborador.resumos_livros_artigos
                                : String("\"" + colaborador.resumos_livros_artigos + "\"").replace(".", ","),
                            Number.isInteger(colaborador.treinamentos_palestras_cursos)
                                ? colaborador.treinamentos_palestras_cursos === 0
                                    ? ""
                                    : colaborador.treinamentos_palestras_cursos
                                : String("\"" + colaborador.treinamentos_palestras_cursos + "\"").replace(".", ","),
                            Number.isInteger(colaborador.artigo)
                                ? colaborador.artigo === 0
                                    ? ""
                                    : 0
                                : String("\"" + colaborador.artigo + "\"").replace(".", ","),
                            Number.isInteger(colaborador.licoes_aprendidas)
                                ? colaborador.licoes_aprendidas === 0
                                    ? ""
                                    : colaborador.licoes_aprendidas
                                : String("\"" + colaborador.licoes_aprendidas + "\"").replace(".", ","),
                            Number.isInteger(colaborador.quiz)
                                ? colaborador.quiz === 0
                                    ? ""
                                    : colaborador.quiz
                                : String("\"" + colaborador.quiz + "\"").replace(".", ","),
                            Number.isInteger(colaborador.atividade_fisica)
                                ? colaborador.atividade_fisica === 0
                                    ? ""
                                    : colaborador.atividade_fisica
                                : String("\"" + colaborador.atividade_fisica + "\"").replace(".", ","),
                            Number.isInteger(colaborador.alimentacao_saudavel)
                                ? colaborador.alimentacao_saudavel === 0
                                    ? ""
                                    : colaborador.alimentacao_saudavel
                                : String("\"" + colaborador.alimentacao_saudavel + "\"").replace(".", ","),
                            Number.isInteger(colaborador.qualidade)
                                ? colaborador.qualidade === 0
                                    ? ""
                                    : colaborador.qualidade
                                : String("\"" + colaborador.qualidade + "\"").replace(".", ","),
                            Number.isInteger(colaborador.walk_the_talk)
                                ? colaborador.walk_the_talk === 0
                                    ? ""
                                    : colaborador.walk_the_talk
                                : String("\"" + colaborador.walk_the_talk + "\"").replace(".", ","),
                            Number.isInteger(colaborador.responsabilidade_social)
                                ? colaborador.responsabilidade_social === 0
                                    ? ""
                                    : colaborador.responsabilidade_social
                                : String("\"" + colaborador.responsabilidade_social + "\"").replace(".", ","),
                            Number.isInteger(colaborador.total)
                                ? colaborador.total
                                : String("\"" + colaborador.total + "\"").replace(".", ","),
                            Number.isInteger(colaborador.carteira)
                                ? colaborador.carteira
                                : String("\"" + colaborador.carteira + "\"").replace(".", ","),
                        ]; })).map(function (e) { return e.join(","); })
                            .join("\n");
                        // console.log(csvString);
                        fs_1.default.writeFileSync("/home/participante2/SPI Integracao de Sistemas Ltda/Superar-Para-Inovar-CDN - API-Armazenamento/export.csv", csvString);
                        return [2 /*return*/];
                }
            });
        });
    };
    return TableToCSVService;
}());
exports.TableToCSVService = TableToCSVService;
