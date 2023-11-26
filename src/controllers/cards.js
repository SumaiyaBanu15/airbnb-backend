import cardModel from "../models/cards.js";


// Create a Card
const createCards = async(req,res)=>{
    try {
        const {imgSrc,title,date,price,ratings} = req.body
        if(title && imgSrc && date && ratings && price){
            await cardModel.create({
                imgSrc,
                title,
                date,
                price,
                ratings

            })
            res.status(201).send({
                message:"Card Created Successfully"
            })
        }
        else{
            res.status(400).send({
                message:"Title, Imgsrc, Date, Price, Ratings are required"
            })
        }
    } catch (error) {
        res.status(500).send({
            message:"Internal Server Error",
            error:error.message
        })
    }
}

// Get All Cards
const getAllcards = async(req,res)=>{
    try {
        let cards = await cardModel.find({},{_id:1,title:1,imgSrc:1,price:1,date:1,ratings:1})

        res.status(200).send({
            message:"Cards Fetched Successfully",
            cards
        })
    } catch (error) {
        res.status(500).send({
            message:"Internal Server Error",
            error:error.message
        })

    }
}

export default {
    createCards,
    getAllcards    
}

