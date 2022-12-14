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
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateConhecimentoService = void 0;
var typeorm_1 = require("typeorm");
var Conhecimento_1 = require("../models/Conhecimento");
var ConhecimentoRepositories_1 = require("../repositories/ConhecimentoRepositories");
var redisCleanCache_1 = require("../utils/redisCleanCache");
var CreatePilarService_1 = require("./CreatePilarService");
var CreateConhecimentoService = /** @class */ (function () {
    function CreateConhecimentoService() {
    }
    CreateConhecimentoService.prototype.execute = function (_a) {
        var colaborador_id = _a.colaborador_id, categoria = _a.categoria, titulo = _a.titulo, descricao = _a.descricao;
        return __awaiter(this, void 0, void 0, function () {
            var conhecimentoRepositories, pilarService, connection, queryRunner, pilar_id, conhecimento, result, err_1;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        conhecimentoRepositories = (0, typeorm_1.getCustomRepository)(ConhecimentoRepositories_1.ConhecimentoRepositories);
                        pilarService = new CreatePilarService_1.CreatePilarService();
                        connection = (0, typeorm_1.getConnection)();
                        queryRunner = connection.createQueryRunner();
                        return [4 /*yield*/, queryRunner.connect()];
                    case 1:
                        _b.sent();
                        if (!categoria || !descricao) {
                            throw new Error("Campos vazios");
                        }
                        if (categoria !== "article" &&
                            categoria !== "book" &&
                            categoria !== "lecture" &&
                            categoria !== "inovacao") {
                            throw new Error("Categoria n??o aceita");
                        }
                        return [4 /*yield*/, pilarService.execute({ colaborador_id: colaborador_id })];
                    case 2:
                        pilar_id = _b.sent();
                        conhecimento = conhecimentoRepositories.create({
                            pilar_id: pilar_id,
                            categoria: categoria,
                            titulo: titulo,
                            descricao: descricao,
                        });
                        return [4 /*yield*/, queryRunner.startTransaction()];
                    case 3:
                        _b.sent();
                        _b.label = 4;
                    case 4:
                        _b.trys.push([4, 8, , 11]);
                        return [4 /*yield*/, queryRunner.manager
                                .createQueryBuilder()
                                .insert()
                                .into(Conhecimento_1.Conhecimento)
                                .values([conhecimento])
                                .updateEntity(true)
                                .returning(["id"])
                                .execute()];
                    case 5:
                        result = _b.sent();
                        return [4 /*yield*/, queryRunner.commitTransaction()];
                    case 6:
                        _b.sent();
                        (0, redisCleanCache_1.redisCleanCache)("conhecimentoPendentes");
                        (0, redisCleanCache_1.redisCleanCache)("".concat(colaborador_id, "Documents"));
                        return [4 /*yield*/, queryRunner.release()];
                    case 7:
                        _b.sent();
                        return [2 /*return*/, result === null || result === void 0 ? void 0 : result.raw[0].id];
                    case 8:
                        err_1 = _b.sent();
                        console.log(err_1);
                        return [4 /*yield*/, queryRunner.rollbackTransaction()];
                    case 9:
                        _b.sent();
                        return [4 /*yield*/, queryRunner.release()];
                    case 10:
                        _b.sent();
                        throw new Error("N??o foi poss??vel salvar");
                    case 11: return [2 /*return*/];
                }
            });
        });
    };
    return CreateConhecimentoService;
}());
exports.CreateConhecimentoService = CreateConhecimentoService;
