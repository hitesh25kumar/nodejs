"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_validator_1 = require("express-validator");
const Post_1 = require("../models/Post");
const Comment_1 = require("../models/Comment");
class CommentValidators {
    static addComment() {
        return [express_validator_1.body('content', 'Content is required').isString(),
            express_validator_1.param('id').custom((id, { req }) => {
                return Post_1.default.findOne({ _id: id }).then((post) => {
                    console.log('post: ', post);
                    if (post) {
                        req.post = post;
                        return true;
                    }
                    else {
                        throw new Error('Post Does not Exist.');
                    }
                });
            })];
    }
    static editComment() {
        return [express_validator_1.body('content', 'Content is required').isString(),
            express_validator_1.param('id').custom((id, { req }) => {
                return Post_1.default.findOne({ _id: id }).then((post) => {
                    console.log('post: ', post);
                    if (post) {
                        req.post = post;
                        return true;
                    }
                    else {
                        throw new Error('Post Does not Exist.');
                    }
                });
            })];
    }
    static deleteComment() {
        return [express_validator_1.param('id').custom((id, { req }) => {
                return Comment_1.default.findOne({ _id: id }).then((comment) => {
                    if (comment) {
                        req.comment = comment;
                        return true;
                    }
                    else {
                        throw new Error('Comment does not exist');
                    }
                });
            })];
    }
}
exports.CommentValidators = CommentValidators;
