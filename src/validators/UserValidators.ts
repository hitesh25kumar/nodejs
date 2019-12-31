import { body } from 'express-validator';
import User from '../models/User';
export class UserValidators {
    static signup(){
        return [body('email','Email is required').isEmail().custom((email, {req}) => {
        console.log(req.body);
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
        return [body('verification_token','Verification Token is Required').isNumeric(),body('email','Email is Required').isEmail()]
    }

    static resendVerificationEmail() {
        // return[query('email').isEmail()]
    }
}