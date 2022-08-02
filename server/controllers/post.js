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