const reviewModel = require('../../Models/reviews/reviews.model');

const reviewResId = async (req,res)=>{
    try{
        const{
            _Id
        }=req.params
        const reviews = await reviewModel.find({restaurnat:_id })
        return res.status(200).json({
            data:reviews,
            message:"success"
        })
    }catch(error){
        return res.status(500).json({
            message: error
        })
    }
}
const addNewReview = async (req,res)=> {
    try{
        const{
            newReview
        }=req.body
        await reviewModel.create({...newReview})
        return res.json({
            message:"sucessfully added review"
        })
    }catch(error){
        return res.status(500).json({
            message: error
        })
    }
}
const deleteReview = async (req,res)=>{
    try{
        const{
            _id
        }=req.body
        await reviewModel.findByIdAndDelete({_id})
        return res.json({
            message:"sucessfully delete review"
        })
    }catch(error){
        return res.status(500).json({
            message: error
        })
    }
}
module.exports = {
    reviewResId,
    addNewReview,
    deleteReview
}