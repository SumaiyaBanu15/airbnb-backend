import express from 'express'
import UserController from '../controllers/user.js'
import Auth from '../common/auth.js';

const router = express.Router()

router.post('/signup',Auth.validate,UserController.create)
router.post('/login',Auth.validate,UserController.login)


export default router