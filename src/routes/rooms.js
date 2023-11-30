import express from "express"
import RoomController from '../controllers/rooms.js'

const router = express.Router()

router.get('/allRooms',RoomController.getAllRooms)
router.post('/createRoom', RoomController.createRoom)

export default router