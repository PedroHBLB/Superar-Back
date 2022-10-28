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
exports.Conhecimento = void 0;
var typeorm_1 = require("typeorm");
var Pilar_1 = require("./Pilar");
var uuid_1 = require("uuid");
var class_transformer_1 = require("class-transformer");
var File_1 = require("./File");
var Conhecimento = /** @class */ (function () {
    function Conhecimento() {
        if (!this.id) {
            this.id = uuid_1.v4();
        }
    }
    __decorate([
        typeorm_1.PrimaryColumn(),
        __metadata("design:type", String)
    ], Conhecimento.prototype, "id", void 0);
    __decorate([
        class_transformer_1.Exclude(),
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], Conhecimento.prototype, "pilar_id", void 0);
    __decorate([
        class_transformer_1.Expose({ name: "pilar" }),
        typeorm_1.JoinColumn({ name: "pilar_id" }),
        typeorm_1.OneToOne(function () { return Pilar_1.Pilar; }),
        __metadata("design:type", Pilar_1.Pilar)
    ], Conhecimento.prototype, "pilarId", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], Conhecimento.prototype, "categoria", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], Conhecimento.prototype, "titulo", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], Conhecimento.prototype, "descricao", void 0);
    __decorate([
        typeorm_1.Column({ nullable: true, select: false }),
        __metadata("design:type", String)
    ], Conhecimento.prototype, "file", void 0);
    __decorate([
        typeorm_1.OneToMany(function (type) { return File_1.File; }, function (file) { return file.conhecimentoId; }),
        __metadata("design:type", Array)
    ], Conhecimento.prototype, "files", void 0);
    __decorate([
        class_transformer_1.Exclude(),
        typeorm_1.CreateDateColumn(),
        __metadata("design:type", Date)
    ], Conhecimento.prototype, "created_at", void 0);
    __decorate([
        class_transformer_1.Exclude(),
        typeorm_1.UpdateDateColumn(),
        __metadata("design:type", Date)
    ], Conhecimento.prototype, "updated_at", void 0);
    Conhecimento = __decorate([
        typeorm_1.Entity("conhecimento"),
        __metadata("design:paramtypes", [])
    ], Conhecimento);
    return Conhecimento;
}());
exports.Conhecimento = Conhecimento;
