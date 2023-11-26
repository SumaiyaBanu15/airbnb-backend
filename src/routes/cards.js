import express from "express";
import Auth from '../common/auth.js'
import CardController from '../controllers/cards.js'

const router = express.Router()

router.post('/create',Auth.validate,CardController.createCards)
router.get('/getAllCards',Auth.validate,CardController.getAllcards)

export default router