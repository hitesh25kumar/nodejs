import * as mongoose from 'mongoose';
import { model } from 'mongoose';

const commentSchema = new mongoose.Schema({
    created_at:{type: Date, required: true, default: new Date()},
    updated_at:{type: Date, required: true, default: new Date()},
    content: {type: String, required: true}
});

export default model('comments' , commentSchema)