
import PostMessage from "../models/postMessage.js"


export const getpost = async (req, res) => {     //eikhane callback funtion gulo define kori
    try {
        const postmessage = await PostMessage.find()
        res.status(200).json(postmessage)

    } catch (error) {
        res.status(404).json({ message: error.message })
    }
}

export const createpost = async (req, res) => {
    try {
        const post = req.body
        const newpost = new PostMessage(post)
        await newpost.save()
        console.log(newpost)
    } catch (error) {
        res.status(409).json({ message: error.message })
    }
}

export const updatepost = async (req, res) => {
    try {
        const { id } = req.params
        const postnew = req.body

        let post = await PostMessage.findById(id);
        if (!post) { return res.status(404).send("Not Found") }

        const updatedpost = await PostMessage.findByIdAndUpdate(id, postnew, { new: true })

        res.json(updatedpost)
    } catch (error) {
        console.log(error);
    }

}

export const deletepost = async (req, res) => {
    try {
        const { id } = req.params
        let post = await PostMessage.findById(id);
        if (!post) { return res.status(404).send("Not Found") }
        await PostMessage.findByIdAndRemove(id)
        res.json({ message: "Post Succesfully deleted" })
    } catch (error) {
        console.log(error);
    }
}


export const likepost = async (req, res) => {
    try {
        const { id } = req.params
        let post = await PostMessage.findById(id);
        if (!post) { return res.status(404).send("Not Found") }

        const updatedPost = await PostMessage.findByIdAndUpdate(id, { likecount: post.likecount + 1 }, { new: true });

        res.json(updatedPost);
    } catch (error) {
        console.log(error)
    }
}