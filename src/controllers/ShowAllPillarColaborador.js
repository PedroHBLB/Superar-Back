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
exports.ShowAllPillarColaborador = void 0;
var ShowConhecimentoColaboradorScoreService_1 = require("../services/ShowConhecimentoColaboradorScoreService");
var ShowInternoColaboradorScoreService_1 = require("../services/ShowInternoColaboradorScoreService");
var ShowInovacaoColaboradorScoreService_1 = require("../services/ShowInovacaoColaboradorScoreService");
var ShowSaudeColaboradorScoreService_1 = require("../services/ShowSaudeColaboradorScoreService");
var ShowAllPillarColaborador = /** @class */ (function () {
    function ShowAllPillarColaborador() {
    }
    ShowAllPillarColaborador.prototype.handle = function (request, response) {
        return __awaiter(this, void 0, void 0, function () {
            var colaborador_id, redirect_month, showConhecimentoColaboradorScoreService, showSaudeColaboradorScoreService, showInternoColaboradorScoreService, showInovacaoColaboradorScoreService, scores_1, _a, _b, _c, error_1;
            return __generator(this, function (_d) {
                switch (_d.label) {
                    case 0:
                        _d.trys.push([0, 6, , 7]);
                        colaborador_id = request.colaborador_id;
                        redirect_month = request.query.redirect_month;
                        showConhecimentoColaboradorScoreService = new ShowConhecimentoColaboradorScoreService_1.ShowConhecimentoColaboradorScoreService();
                        showSaudeColaboradorScoreService = new ShowSaudeColaboradorScoreService_1.ShowSaudeColaboradorScoreService();
                        showInternoColaboradorScoreService = new ShowInternoColaboradorScoreService_1.ShowInternoColaboradorScoreService();
                        showInovacaoColaboradorScoreService = new ShowInovacaoColaboradorScoreService_1.ShowInovacaoColaboradorScoreService();
                        scores_1 = [];
                        _b = (_a = Promise).all;
                        return [4 /*yield*/, showSaudeColaboradorScoreService
                                .execute({
                                id: colaborador_id,
                                month: Number(redirect_month),
                            })
                                .then(function (_a) {
                                var pontuacao_do_mes = _a.pontuacao_do_mes;
                                return scores_1.push({ pilar: "saude", pontuacao_do_mes: pontuacao_do_mes });
                            })];
                    case 1:
                        _c = [
                            _d.sent()
                        ];
                        return [4 /*yield*/, showConhecimentoColaboradorScoreService
                                .execute({
                                id: colaborador_id,
                                month: Number(redirect_month),
                            })
                                .then(function (_a) {
                                var pontuacao_do_mes = _a.pontuacao_do_mes;
                                return scores_1.push({ pilar: "conhecimento", pontuacao_do_mes: pontuacao_do_mes });
                            })];
                    case 2:
                        _c = _c.concat([
                            _d.sent()
                        ]);
                        return [4 /*yield*/, showInovacaoColaboradorScoreService
                                .execute({
                                id: colaborador_id,
                                month: Number(redirect_month),
                            })
                                .then(function (_a) {
                                var pontuacao_do_mes = _a.pontuacao_do_mes;
                                return scores_1.push({ pilar: "inovacao", pontuacao_do_mes: pontuacao_do_mes });
                            })];
                    case 3:
                        _c = _c.concat([
                            _d.sent()
                        ]);
                        return [4 /*yield*/, showInternoColaboradorScoreService
                                .execute({
                                id: colaborador_id,
                                nome: "rsi",
                                month: Number(redirect_month),
                            })
                                .then(function (_a) {
                                var pontuacao_do_mes = _a.pontuacao_do_mes;
                                return scores_1.push({ pilar: "rsi", pontuacao_do_mes: pontuacao_do_mes });
                            })];
                    case 4:
                        _c = _c.concat([
                            _d.sent()
                        ]);
                        return [4 /*yield*/, showInternoColaboradorScoreService
                                .execute({
                                id: colaborador_id,
                                nome: "wtt",
                                month: Number(redirect_month),
                            })
                                .then(function (_a) {
                                var pontuacao_do_mes = _a.pontuacao_do_mes;
                                return scores_1.push({ pilar: "wtt", pontuacao_do_mes: pontuacao_do_mes });
                            })];
                    case 5:
                        _b.apply(_a, [_c.concat([
                                _d.sent()
                            ])]);
                        return [2 /*return*/, response.json(scores_1)];
                    case 6:
                        error_1 = _d.sent();
                        return [2 /*return*/, response.status(404)];
                    case 7: return [2 /*return*/];
                }
            });
        });
    };
    return ShowAllPillarColaborador;
}());
exports.ShowAllPillarColaborador = ShowAllPillarColaborador;
