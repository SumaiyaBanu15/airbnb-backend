import express from "express";
import BookingController from '../controllers/booking.js'

const router = express.Router()

router.get('/getMyBooking', BookingController.getMyBooking);
router.post('/roomBooking',BookingController.roomBooking)
export default router