const RestaurantModel = require('../../Models/restaurant/restaurant.model');
const { validateRestaurantCity, validateRestaurantSearchString } = require('../../Validation/restaurant');
const {validateRestaurantId} = require("../../Validation/food");

const searchResByLocation = async(req,res)=>{
    try{
        await validateRestaurantCity(req.query);
        const{
            city
        }=req.query
        const restaurants = await RestaurantModel.find({city})

        if(!restaurants){
            return res.status(404).json({
                message: `Restaturant is not around this ${city}`
            })
        }
        return res.status(200).json({
            data: restaurants,
            message:success
        })
    }catch(error){
        return res.status(500).json({
            message: error
        })
    }
}
const searchResById = async (req,res) =>{
    try{
        await validateRestaurantId(req.params);
        const {
            _id
        }=req.params
        const restaurants = await RestaurantModel.findById({_id})
        if(!restaurants){
            return res.status(404).json({
                message: "Restaturant is not found"
            })
        }
        return res.status(200).json({
            data: restaurants,
            message:success
        }) 
    }
    catch(error){
        return res.status(500).json({
            message: error
    })
    }
}
const searchByString = async (req,res) =>{
    try{
        await validateRestaurantSearchString(req.body);
        const{
            searchString
        }=req.body
        const restaurants = await RestaurantModel.find({
            name:{$regex: searchString, $options:"i"}
        });
        if(!restaurants){
            return res.status(404).json({
                message: `No restaurant matched with ${searchString}`
            })
        }
        return res.status(200).json({
            data: restaurants,
            message:success
        }) 
    }
    catch(error){
        return res.status(500).json({
            message: error
    })
    }
}
module.exports = {
    searchResByLocation,
    searchResById,
    searchByString
}