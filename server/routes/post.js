import express from 'express'
const router =express.Router()

import {getpost,createpost} from '../controllers/post.js'  // ei khane router er callback funtion gulo import hoi

router.get('/getpost',getpost)
router.post('/createpost',createpost)

export default router