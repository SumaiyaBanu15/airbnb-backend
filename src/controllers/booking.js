import bookingModel from "../models/booking.js";

// Get All Bookings
const getMyBooking = async(req,res)=>{
    try {
        const bookings = await bookingModel.find();
        res.status(200).send({
            message:"Your Bookings Fetched Successfully",
            bookings
        })
    } catch (error) {
        res.status(500).send({message:"Internal Server Error",
        error:error.message
       })
    }
}

// Booking a room
const roomBooking = async(req,res)=>{
    try {
        let booking = false
        const {roomId,title,email,customerName,checkIn,checkOut,date} = req.body

        if(roomId && title && email && customerName && checkIn && checkOut){
            await bookingModel.create({
                roomId,
                email,
                title,
                customerName,
                checkIn,
                checkOut
            })
            res.status(201).send({
                message:"Room Booked Successfully"
            })
        }
        else{
            res.status(400).send({
                message:"Data entered Incorrectly",
            })
        }
    } catch (error) {
        res.status(500).send({
            message:"Internal Server Error",
            error:error.message
        })
    }
}
export default {
    getMyBooking,
    roomBooking
}