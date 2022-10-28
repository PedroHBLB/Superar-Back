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
exports.Ground = void 0;
var typeorm_1 = require("typeorm");
var Pilar_1 = require("./Pilar");
var Colaborador_1 = require("./Colaborador");
var uuid_1 = require("uuid");
var class_transformer_1 = require("class-transformer");
var Ground = /** @class */ (function () {
    function Ground() {
        if (!this.id) {
            this.id = uuid_1.v4();
        }
    }
    __decorate([
        typeorm_1.PrimaryColumn(),
        __metadata("design:type", String)
    ], Ground.prototype, "id", void 0);
    __decorate([
        class_transformer_1.Exclude(),
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], Ground.prototype, "pilar_id", void 0);
    __decorate([
        typeorm_1.JoinColumn({ name: "pilar_id" }),
        typeorm_1.OneToOne(function () { return Pilar_1.Pilar; }),
        __metadata("design:type", Pilar_1.Pilar)
    ], Ground.prototype, "pilarId", void 0);
    __decorate([
        class_transformer_1.Exclude(),
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], Ground.prototype, "colaborador_id", void 0);
    __decorate([
        typeorm_1.JoinColumn({ name: "colaborador_id" }),
        typeorm_1.OneToOne(function () { return Colaborador_1.Colaborador; }),
        __metadata("design:type", Colaborador_1.Colaborador)
    ], Ground.prototype, "colaboradorId", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], Ground.prototype, "descricao", void 0);
    __decorate([
        class_transformer_1.Exclude(),
        typeorm_1.CreateDateColumn(),
        __metadata("design:type", String)
    ], Ground.prototype, "created_at", void 0);
    __decorate([
        class_transformer_1.Exclude(),
        typeorm_1.UpdateDateColumn(),
        __metadata("design:type", String)
    ], Ground.prototype, "updated_at", void 0);
    Ground = __decorate([
        typeorm_1.Entity("grounds"),
        __metadata("design:paramtypes", [])
    ], Ground);
    return Ground;
}());
exports.Ground = Ground;
