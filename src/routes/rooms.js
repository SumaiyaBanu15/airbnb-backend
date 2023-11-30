import express from "express"
import RoomController from '../controllers/rooms.js'

const router = express.Router()

router.post('/createRoom', RoomController.createRoom)

export default router