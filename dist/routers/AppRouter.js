"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const CommentController_1 = require("../controllers/CommentController");
const CommentValidators_1 = require("../validators/CommentValidators");
const GlobalMiddleware_1 = require("../middlewares/GlobalMiddleware");
class AppRouter {
    constructor() {
        this.router = express_1.Router();
        this.postRoutes();
    }
    postRoutes() {
        this.router.post('/add/:id', GlobalMiddleware_1.GlobalMiddleWare.authenticate, CommentValidators_1.CommentValidators.addComment(), GlobalMiddleware_1.GlobalMiddleWare.checkError, CommentController_1.CommentController.addComment);
    }
}
exports.default = new AppRouter().router;
