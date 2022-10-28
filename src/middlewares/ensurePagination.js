"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ensurePagination = void 0;
function ensurePagination(request, response, next) {
    var _a = request.query, _page = _a._page, limit = _a.limit;
    try {
        var page = Number(_page) ? Number(_page) : 1;
        var pageLimit = Number(limit) ? Number(limit) : 10;
        var startIndex = (page - 1) * pageLimit;
        request.start = startIndex;
        request.limit = pageLimit;
        return next();
    }
    catch (error) {
        console.log("aqui");
        return response.json(error);
    }
}
exports.ensurePagination = ensurePagination;
