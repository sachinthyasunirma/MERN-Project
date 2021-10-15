const foodModel = require("../../Models/food/food.model");
const {validateRestaurantId,validateRestaurantCategory} = require("../../Validation/food");

const searchResById = async (req,res)=>{
    try{
        
        const{
            _id//resturant Id
        }= req.params
        await validateRestaurantId(_id);
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
        await validateRestaurantCategory(category);
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