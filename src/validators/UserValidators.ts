import { body, query } from 'express-validator';
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
}