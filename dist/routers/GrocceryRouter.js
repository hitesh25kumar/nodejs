"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
// import {CommentController} from '../controllers/CommentController';
// import {CommentValidators} from '../validators/CommentValidators';
// import { GlobalMiddleWare } from "../middlewares/GlobalMiddleware";
const GrocceryController_1 = require("../controllers/GrocceryController");
class GroceryRouter {
    constructor() {
        this.router = express_1.Router();
        this.getRoutes();
        // this.postRoutes();
        // this.patchRoutes();
        // this.deleteRoutes();
    }
    getRoutes() {
        this.router.get('/home', GrocceryController_1.GrocceryController.home);
        this.router.get('/productDetails', GrocceryController_1.GrocceryController.productDetails);
    }
}
// postRoutes(){ 
//     this.router.post('/add/:id',GlobalMiddleWare.authenticate,CommentValidators.addComment(),GlobalMiddleWare.checkError,CommentController.addComment);
// }
// patchRoutes(){
//     this.router.patch('/edit/:id',GlobalMiddleWare.authenticate,CommentValidators.editComment(),GlobalMiddleWare.checkError,CommentController.editComment);
// }
// deleteRoutes(){
//     this.router.delete('/delete/:id',GlobalMiddleWare.authenticate,CommentValidators.deleteComment(),GlobalMiddleWare.checkError,CommentController.deleteComment);
exports.default = new GroceryRouter().router;
