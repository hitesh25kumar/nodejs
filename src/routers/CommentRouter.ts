import { Router } from "express";
import {CommentController} from '../controllers/CommentController';
import {CommentValidators} from '../validators/CommentValidators';
import { GlobalMiddleWare } from "../middlewares/GlobalMiddleware";
import { PostController } from "../controllers/PostController";

class CommentRouter{

public router: Router;


constructor(){

    this.router = Router();

    this.getRoutes();

    this.postRoutes();
    this.patchRoutes();
    this.deleteRoutes();
}

getRoutes(){
    
}

postRoutes(){ 
    this.router.post('/add/:id',GlobalMiddleWare.authenticate,CommentValidators.addComment(),GlobalMiddleWare.checkError,CommentController.addComment) 
}

patchRoutes(){
}

deleteRoutes(){
    
}
}

export default new CommentRouter().router;