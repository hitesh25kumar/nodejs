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
const Comment_1 = require("../models/Comment");
class CommentController {
    static addComment(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            const post = req.post;
            console.log('post: ', post);
            const content = req.body.content;
            try {
                const comment = new Comment_1.default({
                    content: content,
                    created_at: new Date(),
                    updated_at: new Date()
                });
                post.comments.push(comment);
                yield Promise.all([comment.save(), post.save()]);
                res.send(comment);
            }
            catch (e) {
                next(e);
            }
        });
    }
    static editComment(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            const content = req.body.content;
            const commentId = req.params.id;
            try {
                const updatedComment = yield Comment_1.default.findOneAndUpdate({ _id: commentId }, {
                    content: content,
                    updated_at: Date.now()
                }, { new: true });
                if (updatedComment) {
                    res.send(updatedComment);
                }
                else {
                    throw new Error('Comment does not exist');
                }
            }
            catch (e) {
                next(e);
            }
        });
    }
    static deleteComment(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            const comment = req.comment;
            console.log('comment: ', comment);
            try {
                comment.remove();
                res.send(comment);
            }
            catch (e) {
                next(e);
            }
        });
    }
}
exports.CommentController = CommentController;
