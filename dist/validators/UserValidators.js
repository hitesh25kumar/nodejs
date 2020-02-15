"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_validator_1 = require("express-validator");
const User_1 = require("../models/User");
class UserValidators {
    static signup() {
        return [express_validator_1.body('email', 'Email is required').isEmail().custom((email, { req }) => {
                return User_1.default.findOne({ email: email }).then(user => {
                    if (user) {
                        throw new Error('User already exist');
                    }
                    else {
                        return true;
                    }
                });
            }),
            express_validator_1.body('password', 'Password is Required').isAlphanumeric().isLength({ min: 8, max: 20 }).withMessage('Password can be from 8-20 characters'),
            express_validator_1.body('username', "Username is required").isString()];
    }
    static verifyUser() {
        return [express_validator_1.body('verification_token', 'Verification Token is Required').isNumeric()];
    }
    static resendVerificationEmail() {
        return [express_validator_1.query('email', 'Email is required').isEmail()];
    }
    static login() {
        return [express_validator_1.query('email', 'Email is required').isEmail().custom((email, { req }) => {
                return User_1.default.findOne({ email: email }).then(user => {
                    if (user) {
                        req.user = user;
                        return true;
                    }
                    else {
                        throw new Error('User does not exist');
                    }
                });
            }), express_validator_1.query('password', 'Password is Required').isAlphanumeric()];
    }
    static SendResetPasswordEmail() {
        return [express_validator_1.query('email').isEmail().custom((email, { req }) => {
                return User_1.default.findOne({ email: email }).then((user) => {
                    if (user) {
                        req.user = user;
                        return true;
                    }
                    else {
                        throw new Error('Email Does not exist');
                    }
                });
            })];
    }
    static VerifyResetPasswordToken() {
        return [express_validator_1.query('reset_password_token', 'Reset Password Token is Required')
                .isNumeric().custom((token, { req }) => {
                return User_1.default.findOne({ reset_password_token: token, reset_password_token_time: { $gt: Date.now() } }).then((user) => {
                    if (user) {
                        return true;
                    }
                    else {
                        throw new Error('Token does not exist .Please request for new one');
                    }
                });
            })
        ];
    }
    static resetPassword() {
        return [express_validator_1.query('email', 'Email is required').isEmail().custom((email, { req }) => {
                return User_1.default.findOne({ email: email }).then(user => {
                    if (user) {
                        req.user = user;
                        return true;
                    }
                    else {
                        throw new Error('User does not exist');
                    }
                });
            }), express_validator_1.body('new_password', 'New Password is Required').isAlphanumeric().custom((newPassword, { req }) => {
                if (newPassword === req.body.confirm_password) {
                    return true;
                }
                else {
                    throw new Error('Confirm Password and New Password does not match');
                }
            }),
            express_validator_1.body('confirm_password', 'Confirm Password is Required').isAlphanumeric(),
            express_validator_1.body('reset_password_token', 'Reset Password Token').isNumeric().custom((token, { req }) => {
                if (Number(req.user.reset_password_token) === Number(token)) {
                    return true;
                }
                else {
                    req.errorStatus = 422;
                    throw new Error('Reset Password Token is Invalid.Please try again');
                }
            })];
    }
    static updateProfilePic() {
        return [express_validator_1.body('profile_pic').custom((profilePic, { req }) => {
                if (req.file) {
                    return true;
                }
                else {
                    throw new Error('File not uploaded');
                }
            })];
    }
}
exports.UserValidators = UserValidators;
