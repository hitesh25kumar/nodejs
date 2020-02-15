import { body,param } from 'express-validator';
import Post from '../models/Post';

export class PostValidators{
    static addPost(){
        return [body('content','Post content is required')];
    }

    static getPostById(){
return [param('id').custom((id,{req}) => {
    return Post.findOne({_id: id}).populate('comments').then((post) => {
        if(post){
            req.post = post;
            return true;
        }
        else{
            throw new Error('Post does not Exist')
        }
    })
})]
    }
}