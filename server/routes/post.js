import express from 'express'
const router =express.Router()

import {getpost,createpost,updatepost} from '../controllers/post.js'  // ei khane router er callback funtion gulo import hoi

router.get('/getpost',getpost)
router.post('/createpost',createpost)
router.put('/:id',updatepost)

export default router