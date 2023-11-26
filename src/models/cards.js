import mongoose from "./index.js";

const cardSchema = new mongoose.Schema({
    imgSrc:{type:String, required:[true,"Image Url is Required"]},
    title:{type:String, required:[true,"Title is Required"]},
    date:{type:String, required:[true,"Date is Required"]},
    price:{type:String, required:[true,"Price is Required"]},
    ratings:{type:String, required:[true,"Rating is Required"]}
},{
    collection:'cards',
    versionKey:false
})

const cardModel = mongoose.model('cards',cardSchema)

export default cardModel