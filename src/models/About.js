"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.About = void 0;
var typeorm_1 = require("typeorm");
var uuid_1 = require("uuid");
var class_transformer_1 = require("class-transformer");
var About = /** @class */ (function () {
    function About() {
        if (!this.id) {
            this.id = (0, uuid_1.v4)();
        }
    }
    __decorate([
        (0, typeorm_1.PrimaryColumn)("uuid")
    ], About.prototype, "id", void 0);
    __decorate([
        (0, typeorm_1.Column)("text")
    ], About.prototype, "name", void 0);
    __decorate([
        (0, typeorm_1.Column)("text")
    ], About.prototype, "sobre", void 0);
    __decorate([
        (0, typeorm_1.Column)("text")
    ], About.prototype, "conhecimento", void 0);
    __decorate([
        (0, typeorm_1.Column)("text")
    ], About.prototype, "saude", void 0);
    __decorate([
        (0, typeorm_1.Column)("text")
    ], About.prototype, "qualidade", void 0);
    __decorate([
        (0, typeorm_1.Column)("text")
    ], About.prototype, "wtt", void 0);
    __decorate([
        (0, typeorm_1.Column)("text")
    ], About.prototype, "rsi", void 0);
    __decorate([
        (0, typeorm_1.Column)("text")
    ], About.prototype, "premiacao", void 0);
    __decorate([
        (0, typeorm_1.Column)("text")
    ], About.prototype, "bonus", void 0);
    __decorate([
        (0, typeorm_1.Column)("text")
    ], About.prototype, "duvidas", void 0);
    __decorate([
        (0, class_transformer_1.Exclude)(),
        (0, typeorm_1.CreateDateColumn)()
    ], About.prototype, "created_at", void 0);
    __decorate([
        (0, class_transformer_1.Exclude)(),
        (0, typeorm_1.UpdateDateColumn)()
    ], About.prototype, "updated_at", void 0);
    About = __decorate([
        (0, typeorm_1.Entity)("about")
    ], About);
    return About;
}());
exports.About = About;
