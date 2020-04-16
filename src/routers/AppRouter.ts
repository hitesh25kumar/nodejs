import { Router } from "express";
import {CommentController} from '../controllers/CommentController';
import {CommentValidators} from '../validators/CommentValidators';
import { GlobalMiddleWare } from "../middlewares/GlobalMiddleware";
import { PostController } from "../controllers/PostController";

class AppRouter{

public router: Router;


constructor(){
    this.router = Router();
    this.postRoutes();
}

postRoutes(){ 
    this.router.post('/add/:id',GlobalMiddleWare.authenticate,CommentValidators.addComment(),GlobalMiddleWare.checkError,CommentController.addComment);
}
}

export default new AppRouter().router;