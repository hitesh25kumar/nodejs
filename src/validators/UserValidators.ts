import { body, query } from 'express-validator';
import User from '../models/User';
export class UserValidators {
    static signup(){
        return [body('email','Email is required').isEmail().custom((email, {req}) => {
        
     return User.findOne({ email:email}).then(user => {
            if(user){
                throw new Error('User already exist');
            }
            else{
                return true
            }
        })
        }),
        body('password','Password is Required').isAlphanumeric().isLength({min: 8, max:20}).withMessage('Password can be from 8-20 characters'),
    body('username', "Username is required").isString()]
    }

    static verifyUser(){
        return [body('verification_token','Verification Token is Required').isNumeric()]
    }

    static resendVerificationEmail() {
        return[query('email','Email is required').isEmail()]
    }

    static login(){
        return [query('email','Email is required').isEmail().custom((email, {req}) => {
            return User.findOne({ email:email}).then(user => {
               
                if(user){
                    req.user = user;
                    return true;
                }
                else{
                  throw new Error('User does not exist')  
                }
            })
        }), query('password','Password is Required').isAlphanumeric()]
    }

    static SendResetPasswordEmail(){
        return[query('email').isEmail().custom((email, {req}) => {
          return User.findOne({email:email}).then((user) => {
            
                if(user){
                    req.user = user;
                    return true;
                }
                else{
                    throw new Error('Email Does not exist');
                }
            })
        })]
    }

    static VerifyResetPasswordToken(){
        return [query('reset_password_token','Reset Password Token is Required')
        .isNumeric().custom((token, {req}) => {
            
            return User.findOne({reset_password_token:token,reset_password_token_time:{$gt: Date.now()}}).then((user) => {
                
                if(user){
                    return true;
                }
                else{
                    throw new Error('Token does not exist .Please request for new one')
                }
            })
        })
    ]
    }

    static resetPassword(){
        return [query('email','Email is required').isEmail().custom((email, {req}) => {
            return User.findOne({ email:email}).then(user => {
               
                if(user){
                    
                    req.user = user;
                    return true;
                }
                else{
                  throw new Error('User does not exist')  
                }
            })
        }), body('new_password','New Password is Required').isAlphanumeric().custom((newPassword, {req}) => {
            if(newPassword === req.body.confirm_password){
return true;
            }
            else{
                throw new Error('Confirm Password and New Password does not match');
            }
        })
        ,
        body('confirm_password','Confirm Password is Required').isAlphanumeric(),
        body('reset_password_token','Reset Password Token').isNumeric().custom((token,{req}) => {
            
            if(Number(req.user.reset_password_token) === Number(token)){
                return true
            }
            else{
                req.errorStatus = 422;
                throw new Error('Reset Password Token is Invalid.Please try again')
            }
        })]
    }

    static updateProfilePic(){
        return [body('profile_pic').custom((profilePic, {req}) => {
           if(req.file){
               return true
           }
           else{
               throw new Error('File not uploaded')
           }

        })]
    }
}