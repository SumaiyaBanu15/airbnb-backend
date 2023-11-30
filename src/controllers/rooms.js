import roomModel from "../models/rooms.js"

// const room = [];

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
        // const data = {
        //     customerName: req.body.customerName,
        //     email: req.body.email,
        //     place:req.body.place,
        //     noOfPerson:req.body.noOfPerson,
        //     amenities:req.body.amenities,
        //     pricePerNight:req.body.pricePerNight,
        //     checkIn:req.body.checkIn,
        //     checkOut:req.body.checkOut,
        //     bookedStatus:"Not Booked"
        // }
    
        // let filteredData = room.filter((e)=>e.email === data.email)
    
        // if(filteredData.length === 0){
        //     room.push(data);
        //     res.status(201).send({
        //         message:"Room Created Successfully"
        //     })
        // }
        // else{
        //     res.status(400).send({
        //         message:"Room Already Booked"
        //     })
        // }
    } catch (error) {
        console.error("Error :", error);
        res.status(500).send({
            message:"Internal Server Error",
            error:error.message
        })
    }
}

export default {
    createRoom
}