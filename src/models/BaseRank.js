"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BaseRank = void 0;
var typeorm_1 = require("typeorm");
var BaseRank = /** @class */ (function () {
    function BaseRank() {
    }
    __decorate([
        typeorm_1.PrimaryColumn(),
        __metadata("design:type", String)
    ], BaseRank.prototype, "colaborador", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], BaseRank.prototype, "setor", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", Number)
    ], BaseRank.prototype, "resumos_livros_artigos", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", Number)
    ], BaseRank.prototype, "treinamentos_palestras_cursos", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", Number)
    ], BaseRank.prototype, "artigo", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", Number)
    ], BaseRank.prototype, "licoes_aprendidas", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", Number)
    ], BaseRank.prototype, "quiz", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", Number)
    ], BaseRank.prototype, "atividade_fisica", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", Number)
    ], BaseRank.prototype, "alimentacao_saudavel", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", Number)
    ], BaseRank.prototype, "qualidade", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", Number)
    ], BaseRank.prototype, "walk_the_talk", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", Number)
    ], BaseRank.prototype, "responsabilidade_social", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", Number)
    ], BaseRank.prototype, "total", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", Number)
    ], BaseRank.prototype, "carteira", void 0);
    BaseRank = __decorate([
        typeorm_1.Entity("base")
    ], BaseRank);
    return BaseRank;
}());
exports.BaseRank = BaseRank;
