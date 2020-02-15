"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_validator_1 = require("express-validator");
const Post_1 = require("../models/Post");
class PostValidators {
    static addPost() {
        return [express_validator_1.body('content', 'Post content is required')];
    }
    static getPostById() {
        return [express_validator_1.param('id').custom((id, { req }) => {
                return Post_1.default.findOne({ _id: id }).populate('comments').then((post) => {
                    if (post) {
                        req.post = post;
                        return true;
                    }
                    else {
                        throw new Error('Post does not Exist');
                    }
                });
            })];
    }
    static editPost() {
        return [express_validator_1.param('id').custom((id, { req }) => {
                return Post_1.default.findOne({ _id: id }).populate('comments').then((post) => {
                    if (post) {
                        req.post = post;
                        return true;
                    }
                    else {
                        throw new Error('Post does not Exist');
                    }
                });
            })];
    }
}
exports.PostValidators = PostValidators;
