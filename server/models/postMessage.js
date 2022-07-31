import mongoose from "mongoose"
const { Schema } = mongoose;

const PostSchema = Schema({
    title: String,
    message: String,
    creator: String,
    tags: [String],
    selectedfile: String,
    likecount: {
        type: Number,
        default: 0
    },
    createAt: {
        type: Date,
        default: new Date()
    }
})

const PostMessage = mongoose.model('PostMessage', PostSchema)

export default PostMessage