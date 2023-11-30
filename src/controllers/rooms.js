import roomModel from "../models/rooms.js"

// const room = [];
// Get All Rooms
const getAllRooms = async(req,res)=>{
    try {
        const allRooms = await roomModel.find();
        res.status(200).send({
            message:"Rooms fetched Successfully",
            count:allRooms.length,
            allRooms
        })
    } catch (error) {
        res.status(500).send({message:"Internal Server Error",
        error:error.message
       })
    }
}

// Create Room
const createRoom = async(req,res)=>{
    try {
        // let bookedStatus = false
        const {customerName,email,place,noOfPerson,amenities,pricePerNight,checkIn,checkOut,date} = req.body

        if(customerName && email && place && noOfPerson && amenities && pricePerNight && checkIn && checkOut) {

          const existingRoom = await roomModel.findOne({email})

          if(!existingRoom){  
            await roomModel.create({
                customerName,
                email,
                place,
                noOfPerson,
                amenities,
                pricePerNight,
                checkIn,
                checkOut,
            })
            res.status(201).send({
                message:"Room Created Successfully"
            })
        }
        else{
            res.status(400).send({
                message:"Room already Booked",
            })
        }
    }
        else{
            res.status(400).send({
                message:"Data entered Incorrectly",
            })
        }
    } catch (error) {
        console.error("Error :", error);
        res.status(500).send({
            message:"Internal Server Error",
            error:error.message
        })
    }
}

export default {
    getAllRooms,
    createRoom
}