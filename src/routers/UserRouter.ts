import { Router } from "express";
import {UserController} from '../controllers/UserController';
import {UserValidators} from '../validators/UserValidators';
import { GlobalMiddleWare } from "../middlewares/GlobalMiddleware";
import { Utils } from "../utils/utils";

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
        this.router.get('/send/verification/email', GlobalMiddleWare.authenticate,UserController.resendVerificationEmail)
    this.router.get('/login',UserValidators.login(),GlobalMiddleWare.checkError,UserController.login)
this.router.get('/reset/password', UserValidators.SendResetPasswordEmail(),GlobalMiddleWare.checkError,UserController.sendResetPasswordEmail);
this.router.get('/verify/resetPasswordToken',UserValidators.VerifyResetPasswordToken(),GlobalMiddleWare.checkError,UserController.VerifyResetPasswordToken)
this.router.get('/test',UserController.test);
this.router.get('/webscraptest',UserController.webscraptest)
this.router.get('/whatsapp',UserController.sendWhatapp)
this.router.get('/home',UserController.home)
}

    postRoutes(){ 
        this.router.post('/signup',UserValidators.signup(),GlobalMiddleWare.checkError,UserController.signup) 
    }

    patchRoutes(){
        this.router.patch('/verify',UserValidators.verifyUser(),GlobalMiddleWare.checkError,GlobalMiddleWare.authenticate, UserController.verify)
    this.router.patch('/reset/password',UserValidators.resetPassword(),GlobalMiddleWare.checkError,UserController.resetPassword)
this.router.patch('/update/profilePic',new Utils().multer.single('profile_pic'),GlobalMiddleWare.authenticate,UserValidators.updateProfilePic(),GlobalMiddleWare.checkError,UserController.updateProfilePic)    
}

    deleteRoutes(){
        
    }
}

export default new UserRouter().router;