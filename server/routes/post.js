import express from 'express'
const router =express.Router()

import {getposts,createpost,updatepost, deletepost, likepost,getPost,commentPost} from '../controllers/post.js'  // ei khane router er callback funtion gulo import hoi
import authmiddelware from '../middleware/authmiddleware.js'

router.get('/getpost',getposts)
router.get('/:id',getPost)
router.post('/createpost',authmiddelware,createpost)
router.put('/:id',authmiddelware,updatepost)
router.delete('/delete/:id',authmiddelware,deletepost)
router.put('/like/:id',authmiddelware,likepost)
router.post('/:id/commentPost', commentPost);

export default router