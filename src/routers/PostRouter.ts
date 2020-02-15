import { Router } from "express";
import {PostController} from '../controllers/PostController';
import {PostValidators} from '../validators/PostValidator';
import { GlobalMiddleWare } from "../middlewares/GlobalMiddleware";

 class PostRouter {
    public router: Router;


    constructor(){

        this.router = Router();

        this.getRoutes();

        this.postRoutes();
        this.patchRoutes();
        this.deleteRoutes();
    }

    getRoutes(){
        this.router.get('/me',GlobalMiddleWare.authenticate,PostController.getPostByUser);
        this.router.get('/all',GlobalMiddleWare.authenticate,PostController.getAllPosts);
        this.router.get('/:id',GlobalMiddleWare.authenticate,PostValidators.getPostById(),GlobalMiddleWare.checkError,PostController.getPostById)
    }

    postRoutes(){ 
        this.router.post('/add',GlobalMiddleWare.authenticate,PostValidators.addPost(),GlobalMiddleWare.checkError,PostController.addPost);
    }

    patchRoutes(){
        this.router.patch('/edit/:id',GlobalMiddleWare.authenticate,PostValidators.editPost(),GlobalMiddleWare.checkError,PostController.editPost)
    }

    deleteRoutes(){
      this.router.delete('/delete/:id',GlobalMiddleWare.authenticate,PostValidators.deletePost(),GlobalMiddleWare.checkError,PostController.deletePost)
    }
}

export default new PostRouter().router;