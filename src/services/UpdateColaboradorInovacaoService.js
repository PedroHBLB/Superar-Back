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
exports.UpdateColaboradorInovacaoService = void 0;
var class_transformer_1 = require("class-transformer");
var typeorm_1 = require("typeorm");
var Pilar_1 = require("../models/Pilar");
var GroundRepositories_1 = require("../repositories/GroundRepositories");
var PilarRepositories_1 = require("../repositories/PilarRepositories");
var redisCleanCache_1 = require("../utils/redisCleanCache");
var UpdateColaboradorInovacaoService = /** @class */ (function () {
    function UpdateColaboradorInovacaoService() {
    }
    UpdateColaboradorInovacaoService.prototype.execute = function (_a) {
        var pillar_id = _a.pillar_id, status = _a.status, categoria = _a.categoria, pontuacao = _a.pontuacao, colaborador_id = _a.colaborador_id, justificativa = _a.justificativa;
        return __awaiter(this, void 0, void 0, function () {
            var pilarRepositories, groundRepositories, updated, pilar, ground, error_1;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        pilarRepositories = (0, typeorm_1.getCustomRepository)(PilarRepositories_1.PilarRepositories);
                        groundRepositories = (0, typeorm_1.getCustomRepository)(GroundRepositories_1.GroundRepositories);
                        if (!pillar_id)
                            throw new Error("Necessário informar o identificado do pilar");
                        if (status !== "aprovado" && status !== "recusado")
                            throw new Error("Status não reconhecido");
                        if (status === "recusado" && !justificativa)
                            throw new Error("Justificativa não informada");
                        if (pontuacao === undefined || pontuacao === null || pontuacao === NaN)
                            throw new Error("Pontuação necessária");
                        _b.label = 1;
                    case 1:
                        _b.trys.push([1, 6, , 7]);
                        if (!(categoria === "inovacao")) return [3 /*break*/, 5];
                        (0, redisCleanCache_1.redisCleanCache)("rankingScore");
                        (0, redisCleanCache_1.redisCleanCache)("inovacaoPendentes");
                        return [4 /*yield*/, pilarRepositories
                                .createQueryBuilder()
                                .update(Pilar_1.Pilar, {
                                status: status,
                                pontuacao: status === "recusado" ? 0 : pontuacao,
                            })
                                .where("id = :id", { id: pillar_id })
                                .returning([
                                "id",
                                "colaborador_id",
                                "pontuacao",
                                "status",
                                "updated_at",
                            ])
                                .updateEntity(true)
                                .execute()];
                    case 2:
                        updated = _b.sent();
                        pilar = updated.raw[0];
                        (0, redisCleanCache_1.redisCleanCache)("".concat(pilar.colaborador_id, "Documents"));
                        (0, redisCleanCache_1.redisCleanCache)("".concat(pilar.colaborador_id, "Ranking"));
                        (0, redisCleanCache_1.redisCleanCache)("".concat(pilar.colaborador_id, "Conhecimento"));
                        (0, redisCleanCache_1.redisCleanCache)("".concat(pilar.colaborador_id, "Inovacao"));
                        if (!(status === "recusado")) return [3 /*break*/, 4];
                        ground = groundRepositories.create({
                            pilar_id: pillar_id,
                            colaborador_id: colaborador_id,
                            descricao: justificativa,
                        });
                        return [4 /*yield*/, groundRepositories.save(ground)];
                    case 3:
                        _b.sent();
                        _b.label = 4;
                    case 4: return [2 /*return*/, (0, class_transformer_1.classToPlain)(pilar)];
                    case 5: return [3 /*break*/, 7];
                    case 6:
                        error_1 = _b.sent();
                        throw new Error("Valores incorretos");
                    case 7: throw new Error("Categoria não reconhecida");
                }
            });
        });
    };
    return UpdateColaboradorInovacaoService;
}());
exports.UpdateColaboradorInovacaoService = UpdateColaboradorInovacaoService;
