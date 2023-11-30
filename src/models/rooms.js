import mongoose from "mongoose";

const validateEmail = (e)=> {
    var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
}
const roomSchema = new mongoose.Schema({
    customerName: {type:String, required:[true,"Name is required"]},
    email: {type:String, required:[true,"Email is Required"],validate:validateEmail},
    place: {type:String, required:[true,"Place is required"]},
    noOfPerson: {type:Number, required:[true,"No of Person is required"]},
    amenities: {type:String, required:[true,"Select your needed amenities"]},
    pricePerNight: {type:Number},
    checkIn: {type:String, required:[true,"Check-In Date is required"]},
    checkOut: {type:String, required:[true,"Check-Out Date is required"]},
    status: {type:String, default:false},
    date: {type:Date, default:Date.now()}
},{
    collection: "myrooms",
    versionKey: false
})

const roomModel = mongoose.model('myrooms', roomSchema)

export default roomModel