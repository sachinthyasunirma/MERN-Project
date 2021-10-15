const joi = require("joi");

const validateRestaurantCity = (city)=>{
    const Schema = joi.object({
        city: joi.string().required()
    })
    return Schema.validateAsync(city);
}
const validateRestaurantSearchString = (restaurantObj)=>{
    const Schema = joi.object({
        searchString: joi.string().required()
    })
    return Schema.validateAsync(restaurantObj);
}
module.exports = {validateRestaurantCity,validateRestaurantSearchString};