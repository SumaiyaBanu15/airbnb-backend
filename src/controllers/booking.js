import bookingModel from "../models/booking.js";

const room = [];
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

// Create Room
const createRoom = async(req,res)=>{
    const data = {
        roomId: req.body.roomId,
        title:req.body.title,
        noOfPerson:req.body.noOfPerson,
        amenities:req.body.amenities,
        pricePerNight:req.body.pricePerNight,
        checkIn:req.body.checkIn,
        checkOut:req.body.checkOut,
        bookedStatus:"Not Booked"
    }

    let filteredData = room.filter((e)=>e.roomId === data.roomId)

    if(filteredData.length === 0){
        room.push(data);
        res.status(201).send({
            message:"Room Created Successfully"
        })
    }
    else{
        res.status(400).send({
            message:"Room Already Booked"
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
    createRoom,
    roomBooking
}