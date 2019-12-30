import { body } from 'express-validator';
export class UserValidators {
    static signup(){
        return [body('email','Email is required').isEmail(),
        body('password','Password is Required').isAlphanumeric().isLength({min: 8, max:20}).withMessage('Password can be from 8-20 characters'),
    body('username', "Username is required").isString()]
    }
}