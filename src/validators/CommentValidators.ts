import { body,param } from 'express-validator';
import Post from '../models/Post';

export class CommentValidators{

    static addComment(){

        return [body('content','Content is required').isString(),
    param('id').custom((id,{req}) => {
        return Post.findOne({_id:id}).then((post) => {
            console.log('post: ', post);
            if(post){
req.post = post;
return true;
            }
            else{
                throw new Error('Post Does not Exist.');
            }
        })
    })];
    }
}