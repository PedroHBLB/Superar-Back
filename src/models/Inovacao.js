"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Inovacao = void 0;
var typeorm_1 = require("typeorm");
var Pilar_1 = require("./Pilar");
var uuid_1 = require("uuid");
var class_transformer_1 = require("class-transformer");
var Inovacao = /** @class */ (function () {
    function Inovacao() {
        if (!this.id) {
            this.id = (0, uuid_1.v4)();
        }
    }
    __decorate([
        (0, typeorm_1.PrimaryColumn)("uuid")
    ], Inovacao.prototype, "id", void 0);
    __decorate([
        (0, typeorm_1.Column)("text")
    ], Inovacao.prototype, "pilar_id", void 0);
    __decorate([
        (0, class_transformer_1.Expose)({ name: "pilar" }),
        (0, typeorm_1.JoinColumn)({ name: "pilar_id" }),
        (0, typeorm_1.OneToOne)(function () { return Pilar_1.Pilar; })
    ], Inovacao.prototype, "pilarId", void 0);
    __decorate([
        (0, typeorm_1.Column)("text")
    ], Inovacao.prototype, "titulo", void 0);
    __decorate([
        (0, typeorm_1.Column)("text")
    ], Inovacao.prototype, "descricao", void 0);
    __decorate([
        (0, class_transformer_1.Exclude)(),
        (0, typeorm_1.CreateDateColumn)()
    ], Inovacao.prototype, "created_at", void 0);
    __decorate([
        (0, class_transformer_1.Exclude)(),
        (0, typeorm_1.UpdateDateColumn)()
    ], Inovacao.prototype, "updated_at", void 0);
    Inovacao = __decorate([
        (0, typeorm_1.Entity)("inovacao")
    ], Inovacao);
    return Inovacao;
}());
exports.Inovacao = Inovacao;
