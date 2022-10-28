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
exports.Image = void 0;
var class_transformer_1 = require("class-transformer");
var typeorm_1 = require("typeorm");
var uuid_1 = require("uuid");
var Saude_1 = require("./Saude");
var Image = /** @class */ (function () {
    function Image() {
        if (!this.id) {
            this.id = uuid_1.v4();
        }
    }
    __decorate([
        typeorm_1.PrimaryColumn(),
        __metadata("design:type", String)
    ], Image.prototype, "id", void 0);
    __decorate([
        class_transformer_1.Exclude(),
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], Image.prototype, "post_id", void 0);
    __decorate([
        class_transformer_1.Expose({ name: "post" }),
        typeorm_1.JoinColumn({ name: "post_id" }),
        typeorm_1.ManyToOne(function () { return Saude_1.Saude; }, function (saude) { return saude.photos; }),
        __metadata("design:type", Saude_1.Saude)
    ], Image.prototype, "postId", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], Image.prototype, "uri", void 0);
    __decorate([
        class_transformer_1.Exclude(),
        typeorm_1.CreateDateColumn(),
        __metadata("design:type", String)
    ], Image.prototype, "created_at", void 0);
    __decorate([
        class_transformer_1.Exclude(),
        typeorm_1.UpdateDateColumn(),
        __metadata("design:type", String)
    ], Image.prototype, "updated_at", void 0);
    Image = __decorate([
        typeorm_1.Entity("images"),
        __metadata("design:paramtypes", [])
    ], Image);
    return Image;
}());
exports.Image = Image;
