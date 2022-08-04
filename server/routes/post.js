import express from 'express'
const router =express.Router()

import {getpost,createpost,updatepost, deletepost, likepost} from '../controllers/post.js'  // ei khane router er callback funtion gulo import hoi

router.get('/getpost',getpost)
router.post('/createpost',createpost)
router.put('/:id',updatepost)
router.delete('/delete/:id',deletepost)
router.put('/like/:id',likepost)

export default router