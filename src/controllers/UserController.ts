import User from "../models/User";
import {
    validationResult
} from 'express-validator';
import {
    Utils
} from '../utils/utils';
import {
    NodeMailer
} from '../utils/NodeMailer';
import * as Bcrypt from 'bcrypt';
import * as jwt from 'jsonwebtoken';
import {
    userInfo
} from "os";
import {
    getEnvironmentVariables
} from '../environments/env';

export class UserController {

    static async signup(req, res, next) {
        const email = req.body.email;
        const username = req.body.username;
        const password = req.body.password;

        const verificationToken = Utils.generateVerificationToken();


        try {

            const hash = await Utils.encryptPassword(password);

            const data = {
                email: email,
                password: hash,
                username: username,
                verification_token: verificationToken,
                verification_token_time: Date.now() + new Utils().MAX_TOKEN_TIME,
                created_at: new Date(),
                updated_at: new Date()
            };

            let user = await new User(data).save();

            res.send(user);

            await NodeMailer.sendEmail({
                to: email,
                subject: 'Email verification',
                html: `<h1>${verificationToken}<h1>`
            }).then(() => {
                res.send('success');
            }).catch(err => {
                next(err);
            })

        } catch (e) {
            console.log('e: ', e);

        }
    }



    static async verify(req, res, next) {

        const verificationToken = req.body.verification_token;
        const email = req.user.email;
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

    static async resendVerificationEmail(req, res, next) {
        console.log('req: ', req.user.email);
        const email = req.user.email;
        const verificationToken = Utils.generateVerificationToken();
        try {
            const user: any = await User.findOneAndUpdate({
                email: email
            }, {
                verification_token: verificationToken,
                verification_token_time: Date.now() + new Utils().MAX_TOKEN_TIME
            });

            if (user) {
                NodeMailer.sendEmail({
                    to: [email],
                    subject: 'Email Verified',
                    html: `<h1>${verificationToken}</h1>`
                })

                res.json({
                    success: true
                });

            } else {

                throw new Error('User does not exist')
            }
        } catch (e) {
            next(e);

        }
    }

    static async login(req, res, next) {
        const email = req.query.email;
        const password = req.query.password;
        const user = req.user;
        try {
            await Utils.comparePassword({
                plainPassword: password,
                encryptedPassword: user.password
            });

            const token = jwt.sign({
                    email: user.email,
                    user_id: user._id
                },
                getEnvironmentVariables().jwt_secret, {
                    expiresIn: '120d'
                });
            const data = {
                user: user,
                token: token
            };

            res.json(data);
        } catch (e) {
            next(e);
        }
    }

}