"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const UserController_1 = require("../controllers/UserController");
const UserValidators_1 = require("../validators/UserValidators");
const GlobalMiddleware_1 = require("../middlewares/GlobalMiddleware");
const utils_1 = require("../utils/utils");
class UserRouter {
    constructor() {
        this.router = express_1.Router();
        this.getRoutes();
        this.postRoutes();
        this.patchRoutes();
        this.deleteRoutes();
    }
    getRoutes() {
        this.router.get('/send/verification/email', GlobalMiddleware_1.GlobalMiddleWare.authenticate, UserController_1.UserController.resendVerificationEmail);
        this.router.get('/login', UserValidators_1.UserValidators.login(), GlobalMiddleware_1.GlobalMiddleWare.checkError, UserController_1.UserController.login);
        this.router.get('/reset/password', UserValidators_1.UserValidators.SendResetPasswordEmail(), GlobalMiddleware_1.GlobalMiddleWare.checkError, UserController_1.UserController.sendResetPasswordEmail);
        this.router.get('/verify/resetPasswordToken', UserValidators_1.UserValidators.VerifyResetPasswordToken(), GlobalMiddleware_1.GlobalMiddleWare.checkError, UserController_1.UserController.VerifyResetPasswordToken);
        this.router.get('/test', UserController_1.UserController.test);
    }
    postRoutes() {
        this.router.post('/signup', UserValidators_1.UserValidators.signup(), GlobalMiddleware_1.GlobalMiddleWare.checkError, UserController_1.UserController.signup);
    }
    patchRoutes() {
        this.router.patch('/verify', UserValidators_1.UserValidators.verifyUser(), GlobalMiddleware_1.GlobalMiddleWare.checkError, GlobalMiddleware_1.GlobalMiddleWare.authenticate, UserController_1.UserController.verify);
        this.router.patch('/reset/password', UserValidators_1.UserValidators.resetPassword(), GlobalMiddleware_1.GlobalMiddleWare.checkError, UserController_1.UserController.resetPassword);
        this.router.patch('/update/profilePic', new utils_1.Utils().multer.single('profile_pic'), GlobalMiddleware_1.GlobalMiddleWare.authenticate, UserValidators_1.UserValidators.updateProfilePic(), GlobalMiddleware_1.GlobalMiddleWare.checkError, UserController_1.UserController.updateProfilePic);
    }
    deleteRoutes() {
    }
}
exports.default = new UserRouter().router;
