"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const User_1 = require("../models/User");
const utils_1 = require("../utils/utils");
const NodeMailer_1 = require("../utils/NodeMailer");
const jwt = require("jsonwebtoken");
const env_1 = require("../environments/env");
const Cheerio = require("cheerio");
const Request = require("request");
const accountSid = 'ACc3c5c63ff3146422aa00e14240e74b47';
const authToken = '7ce004d3edf105a08910a8ea0cc4015f';
const client = require('twilio')(accountSid, authToken);
class UserController {
    static signup(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            const email = req.body.email;
            const username = req.body.username;
            const password = req.body.password;
            const verificationToken = utils_1.Utils.generateVerificationToken();
            try {
                const hash = yield utils_1.Utils.encryptPassword(password);
                const data = {
                    email: email,
                    password: hash,
                    username: username,
                    verification_token: verificationToken,
                    verification_token_time: Date.now() + new utils_1.Utils().MAX_TOKEN_TIME,
                    created_at: new Date(),
                    updated_at: new Date()
                };
                let user = yield new User_1.default(data).save();
                res.send(user);
                yield NodeMailer_1.NodeMailer.sendEmail({
                    to: email,
                    subject: 'Email verification',
                    html: `<h1>${verificationToken}<h1>`
                }).then(() => {
                    res.send('success');
                }).catch(err => {
                    next(err);
                });
            }
            catch (e) {
                console.log('e: ', e);
            }
        });
    }
    static verify(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            const verificationToken = req.body.verification_token;
            const email = req.user.email;
            try {
                const user = yield User_1.default.findOneAndUpdate({
                    email: email,
                    verification_token: verificationToken,
                    verification_token_time: {
                        $gt: Date.now()
                    }
                }, {
                    verified: true
                }, {
                    new: true
                });
                if (user) {
                    res.send(user);
                }
                else {
                    throw new Error('Verification Token is Expired.Please Request for a new One');
                }
            }
            catch (e) {
                next(e);
            }
        });
    }
    static resendVerificationEmail(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log('req: ', req.user.email);
            const email = req.user.email;
            const verificationToken = utils_1.Utils.generateVerificationToken();
            try {
                const user = yield User_1.default.findOneAndUpdate({
                    email: email
                }, {
                    verification_token: verificationToken,
                    verification_token_time: Date.now() + new utils_1.Utils().MAX_TOKEN_TIME
                });
                if (user) {
                    NodeMailer_1.NodeMailer.sendEmail({
                        to: [email],
                        subject: 'Email Verified',
                        html: `<h1>${verificationToken}</h1>`
                    });
                    res.json({
                        success: true
                    });
                }
                else {
                    throw new Error('User does not exist');
                }
            }
            catch (e) {
                next(e);
            }
        });
    }
    static login(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            const email = req.query.email;
            const password = req.query.password;
            const user = req.user;
            try {
                yield utils_1.Utils.comparePassword({
                    plainPassword: password,
                    encryptedPassword: user.password
                });
                const token = jwt.sign({
                    email: user.email,
                    user_id: user._id
                }, env_1.getEnvironmentVariables().jwt_secret, {
                    expiresIn: '120d'
                });
                const data = {
                    user: user,
                    token: token
                };
                res.json(data);
            }
            catch (e) {
                next(e);
            }
        });
    }
    static sendResetPasswordEmail(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            const email = req.query.email;
            console.log('email: ', email);
            const resetPasswordToken = utils_1.Utils.generateVerificationToken();
            try {
                const updatedUser = yield User_1.default.findOneAndUpdate({ email: email }, {
                    updated_at: new Date(), reset_password_token: resetPasswordToken,
                    reset_password_token_time: Date.now() + new utils_1.Utils().MAX_TOKEN_TIME
                }, { new: true });
                res.send(updatedUser);
                yield NodeMailer_1.NodeMailer.sendEmail({
                    to: [email], subject: 'Reset Password Email',
                    html: `<h1>${resetPasswordToken}</h1>`
                });
            }
            catch (e) {
                next(e);
            }
        });
    }
    static VerifyResetPasswordToken(req, res, next) {
        res.json({
            success: true
        });
    }
    static resetPassword(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            const user = req.user;
            const newPassword = req.body.new_password;
            try {
                const encryptedPassword = yield utils_1.Utils.encryptPassword(newPassword);
                const updatedUser = yield User_1.default.findOneAndUpdate({ _id: user._id }, {
                    updated_at: new Date(),
                    password: encryptedPassword
                }, { new: true });
                res.send(updatedUser);
            }
            catch (e) {
                next(e);
            }
        });
    }
    static updateProfilePic(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            const userId = req.user.user_id;
            const fileUrl = 'http://localhost:5000/' + req.file.path;
            try {
                const user = yield User_1.default.findOneAndUpdate({ _id: userId }, {
                    updated_at: new Date(),
                    profile_pic_url: fileUrl
                }, { new: true });
                res.send(user);
            }
            catch (e) {
                next(e);
            }
        });
    }
    static test(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            const user = yield User_1.default.find({ email: 'hitesh25kumar@gmail.com' }).setOptions({ explain: 'executionStats' });
            res.send(user);
        });
    }
    static webscraptest(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            const data = [{ title: 'item title', price: 'item price', description: 'description' }];
            Request('https://webscraper.io/test-sites/e-commerce/allinone', ((error, response, html) => {
                if (!error && response.statusCode === 200) {
                    const $ = Cheerio.load(html);
                    const data = [];
                    $('.thumbnail').each((index, element) => {
                        const image = $(element).find('.img-responsive').attr('src');
                        const title = $(element).find('.title').attr('title');
                        const description = $(element).find('.description').text();
                        const price = $(element).find('.price').text();
                        data.push({ title: title, image: image, description: description, price: price });
                    });
                    res.send(data);
                }
            }));
        });
    }
    static sendWhatapp(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            // client.messages.create({
            //     from: 'whatsapp:+14155238886',
            //     to:'whatsapp:+919756740984',
            //     body:'Hello'
            // }).then(message => res.send(message.sid));
            res.send({
                success: true
            });
        });
    }
    static home(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            res.send({
                success: true
            });
        });
    }
}
exports.UserController = UserController;
