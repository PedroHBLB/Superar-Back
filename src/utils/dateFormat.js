"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EDateType = exports.LessThanOrEqualDate = exports.LessThanDate = exports.MoreThanOrEqualDate = exports.MoreThanDate = void 0;
var typeorm_1 = require("typeorm");
var date_fns_1 = require("date-fns");
var EDateType;
(function (EDateType) {
    EDateType["Date"] = "yyyy-MM-dd";
    EDateType["Datetime"] = "yyyy-MM-dd HH:MM:ss";
})(EDateType || (EDateType = {}));
exports.EDateType = EDateType;
var MoreThanDate = function (date, type) {
    return typeorm_1.MoreThan(date_fns_1.format(date, type));
};
exports.MoreThanDate = MoreThanDate;
var MoreThanOrEqualDate = function (date, type) {
    return typeorm_1.MoreThanOrEqual(date_fns_1.format(date, type));
};
exports.MoreThanOrEqualDate = MoreThanOrEqualDate;
var LessThanDate = function (date, type) {
    return typeorm_1.LessThan(date_fns_1.format(date, type));
};
exports.LessThanDate = LessThanDate;
var LessThanOrEqualDate = function (date, type) {
    return typeorm_1.LessThanOrEqual(date_fns_1.format(date, type));
};
exports.LessThanOrEqualDate = LessThanOrEqualDate;
