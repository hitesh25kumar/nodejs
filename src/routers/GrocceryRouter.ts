import { Router } from "express";
// import {CommentController} from '../controllers/CommentController';
// import {CommentValidators} from '../validators/CommentValidators';
// import { GlobalMiddleWare } from "../middlewares/GlobalMiddleware";
import { GrocceryController } from "../controllers/GrocceryController";

class GroceryRouter{

public router: Router;


constructor(){

    this.router = Router();

    this.getRoutes();

    // this.postRoutes();
    // this.patchRoutes();
    // this.deleteRoutes();
}

getRoutes(){
    this.router.get('/home',GrocceryController.home);  
    this.router.get('/productDetails',GrocceryController.productDetails); 
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

export default new GroceryRouter().router;