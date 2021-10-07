const foodModel = require("../../Models/food/food.model");

const searchResById = async (req,res)=>{
    try{
        const{
            _id
        }= req.params
        const foods = await foodModel.find({
            restaurant : _id,
        })
        if(!foods){
            return res.status(404).json({
                message:"No any foods"
            })
        }
        return res.status(200).json({
            data:foods,
            message:"success"
        })
    }catch(error){
        return res.status(500).json({
            message: error
        })
    }
}
const searchCateByString = async (req,res)=>{
    try{
        const{
            category
        }= req.params
        const foods = await foodModel.find({
            category : { $regex:category, $options:"i" },
        })
        if(!foods){
            return res.status(404).json({
                message:"No any foods"
            })
        }
        return res.status(200).json({
            data:foods,
            message:"success"
        })
    }catch(error){
        return res.status(500).json({
            message: error
        })
    }
}
module.exports= {
    searchResById,
    searchCateByString
}