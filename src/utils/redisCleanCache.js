"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.redisCleanCache = void 0;
var ioredis_1 = __importDefault(require("ioredis"));
function redisCleanCache(pattern) {
    var redis = new ioredis_1.default();
    var stream = redis.scanStream({
        match: pattern + ":*",
    });
    stream.on("data", function (keys) {
        if (keys.length) {
            var pipeline = redis.pipeline();
            keys.forEach(function (key) {
                pipeline.del(key);
            });
            pipeline.exec();
        }
    });
}
exports.redisCleanCache = redisCleanCache;
