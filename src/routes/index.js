import express from 'express'
import UserRoutes from './user.js'
import CardRoutes from './cards.js'
import BookingRoutes from './booking.js'
import RoomRoutes from './rooms.js'

const router = express.Router()

router.get('/',(req,res)=>{
    res.status(200).send(`<h1> Welcome to AirBnb!</h1>`)
})

router.use('/user', UserRoutes)
router.use('/cards', CardRoutes)
router.use('/booking', BookingRoutes)
router.use('/room',RoomRoutes)

export default router