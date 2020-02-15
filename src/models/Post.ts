import * as mongoose from 'mongoose';
import { model } from 'mongoose';

const postSchema = new mongoose.Schema({
    user_id: {type: mongoose.Types.ObjectId, required: true},
    created_at:{type: Date, required: true, default: new Date()},
    updated_at:{type: Date, required: true, default: new Date()},
    content: {type: String, required: true},
    comments: [{type: mongoose.Types.ObjectId, ref: 'comments'}],
});

postSchema.virtual('commentCount').get(function() {
    return this.comments.length;
});

export default model('Posts' , postSchema)