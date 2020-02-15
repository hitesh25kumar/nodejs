import Comment from '../models/Comment';

export class CommentController {

    static async addComment(req,res,next){
     const post = req.post;
     console.log('post: ', post);
     const content = req.body.content;
     
try{
const comment = new Comment({
    content: content,
    created_at: new Date(),
    updated_at: new Date()
});
post.comments.push(comment);
await Promise.all([comment.save(),post.save()])
res.send(comment);
}
catch(e){
    next(e);
}

    }
}