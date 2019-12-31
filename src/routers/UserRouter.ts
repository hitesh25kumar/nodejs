import { Router } from "express";
import {UserController} from '../controllers/UserController';
import {UserValidators} from '../validators/UserValidators';
import {body} from 'express-validator';
import { GlobalMiddleWare } from "../middlewares/GlobalMiddleware";

 class UserRouter {
    public router: Router;


    constructor(){

        this.router = Router();

        this.getRoutes();

        this.postRoutes();
        this.patchRoutes();
        this.deleteRoutes();
    }

    getRoutes(){
        this.router.get('/send/verification/email',UserController.resendVerificationEmail)
    }

    postRoutes(){ 
        this.router.post( '/signup',UserValidators.signup(),GlobalMiddleWare.checkError, UserController.signup) 
    }

    patchRoutes(){
        this.router.patch('/verify',UserValidators.verifyUser(),GlobalMiddleWare.checkError, UserController.verify)
    }

    deleteRoutes(){
        
    }
}

export default new UserRouter().router;