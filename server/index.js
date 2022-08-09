import cors from 'cors'
import bodyParser from 'body-parser'
import mongoose from 'mongoose'
import express from 'express'

import postRoutes from './routes/post.js'
import userRoutes from './routes/user.js'

const app = express()
app.use(bodyParser.json({ limit: "30mb", extended: true }))
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }))
app.use(cors())

app.use('/posts', postRoutes)
app.use('/users', userRoutes)

const Connection_URL = 'mongodb+srv://InfinityXZod:LXaULb72Ht3.bqG@cluster0.w5larfk.mongodb.net/?retryWrites=true&w=majority'
const port = process.env.PORT || 5000

mongoose.connect(Connection_URL).then(app.listen(port, () => console.log(`server running on ${port}`))).catch((error) => console.log(error.message))

