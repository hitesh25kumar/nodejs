"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const PostController_1 = require("../controllers/PostController");
const PostValidator_1 = require("../validators/PostValidator");
const GlobalMiddleware_1 = require("../middlewares/GlobalMiddleware");
class PostRouter {
    constructor() {
        this.router = express_1.Router();
        this.getRoutes();
        this.postRoutes();
        this.patchRoutes();
        this.deleteRoutes();
    }
    getRoutes() {
        this.router.get('/me', GlobalMiddleware_1.GlobalMiddleWare.authenticate, PostController_1.PostController.getPostByUser);
        this.router.get('/all', GlobalMiddleware_1.GlobalMiddleWare.authenticate, PostController_1.PostController.getAllPosts);
        this.router.get('/:id', GlobalMiddleware_1.GlobalMiddleWare.authenticate, PostValidator_1.PostValidators.getPostById(), GlobalMiddleware_1.GlobalMiddleWare.checkError, PostController_1.PostController.getPostById);
    }
    postRoutes() {
        this.router.post('/add', GlobalMiddleware_1.GlobalMiddleWare.authenticate, PostValidator_1.PostValidators.addPost(), GlobalMiddleware_1.GlobalMiddleWare.checkError, PostController_1.PostController.addPost);
    }
    patchRoutes() {
        this.router.patch('/edit/:id', GlobalMiddleware_1.GlobalMiddleWare.authenticate, PostValidator_1.PostValidators.editPost(), GlobalMiddleware_1.GlobalMiddleWare.checkError, PostController_1.PostController.editPost);
    }
    deleteRoutes() {
        this.router.delete('/delete/:id', GlobalMiddleware_1.GlobalMiddleWare.authenticate, PostValidator_1.PostValidators.deletePost(), GlobalMiddleware_1.GlobalMiddleWare.checkError, PostController_1.PostController.deletePost);
    }
}
exports.default = new PostRouter().router;
