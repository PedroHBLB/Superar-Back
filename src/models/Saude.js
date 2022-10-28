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
exports.Saude = void 0;
var typeorm_1 = require("typeorm");
var Pilar_1 = require("./Pilar");
var Image_1 = require("./Image");
var uuid_1 = require("uuid");
var class_transformer_1 = require("class-transformer");
var Saude = /** @class */ (function () {
    function Saude() {
        if (!this.id) {
            this.id = uuid_1.v4();
        }
    }
    __decorate([
        typeorm_1.PrimaryColumn(),
        __metadata("design:type", String)
    ], Saude.prototype, "id", void 0);
    __decorate([
        class_transformer_1.Exclude(),
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], Saude.prototype, "pilar_id", void 0);
    __decorate([
        class_transformer_1.Expose({ name: "pilar" }),
        typeorm_1.JoinColumn({ name: "pilar_id" }),
        typeorm_1.OneToOne(function () { return Pilar_1.Pilar; }),
        __metadata("design:type", Pilar_1.Pilar)
    ], Saude.prototype, "pilarId", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], Saude.prototype, "categoria", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], Saude.prototype, "legenda", void 0);
    __decorate([
        class_transformer_1.Exclude(),
        typeorm_1.Column(),
        __metadata("design:type", Boolean)
    ], Saude.prototype, "isAvailable", void 0);
    __decorate([
        typeorm_1.OneToMany(function (type) { return Image_1.Image; }, function (image) { return image.postId; }),
        __metadata("design:type", Array)
    ], Saude.prototype, "photos", void 0);
    __decorate([
        class_transformer_1.Exclude(),
        typeorm_1.CreateDateColumn(),
        __metadata("design:type", Date)
    ], Saude.prototype, "created_at", void 0);
    __decorate([
        class_transformer_1.Exclude(),
        typeorm_1.UpdateDateColumn(),
        __metadata("design:type", Date)
    ], Saude.prototype, "updated_at", void 0);
    Saude = __decorate([
        typeorm_1.Entity("saude"),
        __metadata("design:paramtypes", [])
    ], Saude);
    return Saude;
}());
exports.Saude = Saude;
