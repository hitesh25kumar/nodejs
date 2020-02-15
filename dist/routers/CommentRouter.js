"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const CommentController_1 = require("../controllers/CommentController");
const CommentValidators_1 = require("../validators/CommentValidators");
const GlobalMiddleware_1 = require("../middlewares/GlobalMiddleware");
class CommentRouter {
    constructor() {
        this.router = express_1.Router();
        this.getRoutes();
        this.postRoutes();
        this.patchRoutes();
        this.deleteRoutes();
    }
    getRoutes() {
    }
    postRoutes() {
        this.router.post('/add/:id', GlobalMiddleware_1.GlobalMiddleWare.authenticate, CommentValidators_1.CommentValidators.addComment(), GlobalMiddleware_1.GlobalMiddleWare.checkError, CommentController_1.CommentController.addComment);
    }
    patchRoutes() {
        this.router.patch('/edit/:id', GlobalMiddleware_1.GlobalMiddleWare.authenticate, CommentValidators_1.CommentValidators.editComment(), GlobalMiddleware_1.GlobalMiddleWare.checkError, CommentController_1.CommentController.editComment);
    }
    deleteRoutes() {
        this.router.delete('/delete/:id', GlobalMiddleware_1.GlobalMiddleWare.authenticate, CommentValidators_1.CommentValidators.deleteComment(), GlobalMiddleware_1.GlobalMiddleWare.checkError, CommentController_1.CommentController.deleteComment);
    }
}
exports.default = new CommentRouter().router;
