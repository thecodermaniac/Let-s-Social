import mongoose from "mongoose"
const { Schema } = mongoose;

const PostSchema = Schema({
    title: String,
    message: String,
    name: String,
    creator: String,
    tags: [String],
    selectedfile: String,
    likes: { type: [String], default: [] },
    createAt: {
        type: Date,
        default: new Date()
    }
})

const PostMessage = mongoose.model('PostMessage', PostSchema)

export default PostMessage