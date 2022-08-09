import express from 'express'
const router =express.Router()

import {getpost,createpost,updatepost, deletepost, likepost} from '../controllers/post.js'  // ei khane router er callback funtion gulo import hoi
import authmiddelware from '../middleware/authmiddleware.js'

router.get('/getpost',getpost)
router.post('/createpost',authmiddelware,createpost)
router.put('/:id',authmiddelware,updatepost)
router.delete('/delete/:id',authmiddelware,deletepost)
router.put('/like/:id',authmiddelware,likepost)

export default router