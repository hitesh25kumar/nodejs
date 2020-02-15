import * as mongoose from 'mongoose';
import { model } from 'mongoose';
import Post from './Post';

const commentSchema = new mongoose.Schema({
    created_at:{type: Date, required: true, default: new Date()},
    updated_at:{type: Date, required: true, default: new Date()},
    content: {type: String, required: true}
});

commentSchema.post('remove',(async doc => {
    const comment = doc as any;
    console.log('comment:.... ', comment);
  const post = await Post.findOne({comments:{$in: [comment._id]}});
  console.log('post:... ', post);
  await Post.findOneAndUpdate({_id: post._id},{$pull: {comments:comment._id}});
}))

export default model('comments' , commentSchema)