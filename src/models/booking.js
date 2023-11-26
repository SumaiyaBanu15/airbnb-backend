import mongoose from "mongoose";

const validateEmail = (e)=> {
    var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
}

const bookingSchema = new mongoose.Schema({
   roomId: {type:String, required:[true,"Room Id is required"]},
   email: {type:String, required:[true,"Email is Required"],validateEmail},
   title: {type:String, required:[true,"Title is required"]},
   customerName: {type:String, required:[true,"Name is required"]},
   checkIn: {type:String, required:[true,"Check-In Date is required"]},
   checkOut: {type:String, required:[true,"Check-Out Date is required"]},
   status: {type:String, default:false},
   date: {type:Date, default:Date.now()}
},{
    collection: 'mybookings',
    versionKey: false
})

const bookingModel = mongoose.model('booking', bookingSchema)

export default bookingModel