import { Router } from "express";
import {UserController} from '../controllers/UserController';
import {UserValidators} from '../validators/UserValidators';
import {body} from 'express-validator';

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

    }

    postRoutes(){ 
        this.router.post( '/signup',UserValidators.signup(), UserController.signup) 
    }

    patchRoutes(){
        
    }

    deleteRoutes(){
        
    }
}

export default new UserRouter().router;