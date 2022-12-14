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
exports.Colaborador = void 0;
var typeorm_1 = require("typeorm");
var class_transformer_1 = require("class-transformer");
var uuid_1 = require("uuid");
var Colaborador = /** @class */ (function () {
    function Colaborador() {
        if (!this.id) {
            this.id = uuid_1.v4();
        }
    }
    __decorate([
        typeorm_1.PrimaryColumn(),
        __metadata("design:type", String)
    ], Colaborador.prototype, "id", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], Colaborador.prototype, "nome", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], Colaborador.prototype, "email", void 0);
    __decorate([
        class_transformer_1.Exclude(),
        typeorm_1.Column({ select: false }),
        __metadata("design:type", String)
    ], Colaborador.prototype, "password", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], Colaborador.prototype, "setor", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", Number)
    ], Colaborador.prototype, "pontuacao", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", Number)
    ], Colaborador.prototype, "peso", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], Colaborador.prototype, "avatar", void 0);
    __decorate([
        class_transformer_1.Exclude(),
        typeorm_1.Column(),
        __metadata("design:type", Boolean)
    ], Colaborador.prototype, "isAdmin", void 0);
    __decorate([
        class_transformer_1.Exclude(),
        typeorm_1.Column(),
        __metadata("design:type", Boolean)
    ], Colaborador.prototype, "isActive", void 0);
    __decorate([
        class_transformer_1.Exclude(),
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], Colaborador.prototype, "secret_key", void 0);
    __decorate([
        class_transformer_1.Exclude(),
        typeorm_1.CreateDateColumn(),
        __metadata("design:type", Date)
    ], Colaborador.prototype, "created_at", void 0);
    __decorate([
        class_transformer_1.Exclude(),
        typeorm_1.UpdateDateColumn(),
        __metadata("design:type", Date)
    ], Colaborador.prototype, "updated_at", void 0);
    Colaborador = __decorate([
        typeorm_1.Entity("colaboradores"),
        __metadata("design:paramtypes", [])
    ], Colaborador);
    return Colaborador;
}());
exports.Colaborador = Colaborador;
