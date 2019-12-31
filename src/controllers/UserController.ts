import User from "../models/User";
import {
    validationResult
} from 'express-validator';
import {
    Utils
} from '../utils/utils';
import {NodeMailer} from '../utils/NodeMailer';

export class UserController {
    static async signup(req, res, next) {
        const email = req.body.email;
        const password = req.body.password;
        const username = req.body.username;
const verificationToken = Utils.generateVerificationToken();
        const data = {
            email: email,
            password: password,
            username: username,
            verification_token: verificationToken,
            verification_token_time: Date.now() + new Utils().MAX_TOKEN_TIME
        };

        try {
            let user = await new User(data).save();
            res.send(user);
            await NodeMailer.sendEmail({to: email, subject: 'Email verification',
    html: `<h1>${verificationToken}<h1>`}).then(() => {
     res.send('success');
        }).catch(err => {
             next(err);
            })
        } catch (e) {
            next(e);
        }

    }

    static async verify(req, res, next) {

        const verificationToken = req.body.verification_token;
        const email = req.body.email;
        try {
            const user = await User.findOneAndUpdate({
                email: email,
                verification_token: verificationToken,
                verification_token_time: {
                    $gt: Date.now()
                }
            }, {
                verified: true
            }, {
                new: true
            })

            if (user) {
                res.send(user);
            } else {
                throw new Error('Verification Token is Expired.Please Request for a new One');
            }
        } catch (e) {
            next(e);
        }
    }

    static async resendVerificationEmail(req, res, next){
        const email = req.query.email;
        const verificationToken = Utils.generateVerificationToken();
        try {
       const user = await User.findOneAndUpdate({email: email},{
                verification_token: verificationToken,
                verification_token_time: Date.now() + new Utils().MAX_TOKEN_TIME
            });

            if(user){
NodeMailer.sendEmail({to: [email], subject:'Email Verified',html: `<h1>${verificationToken}</h1>`})

res.json({
    success:true
});

            }
            else{
                throw Error('User does not exist') 

            }
        }
        catch(e){
            console.log('e: ', e);

        }
    }
}