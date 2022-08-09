import express from 'express'
const router = express.Router()

import { signin, signup } from '../controllers/user.js'

router.get("/signin", signin);
router.post("/signup", signup);

export default router