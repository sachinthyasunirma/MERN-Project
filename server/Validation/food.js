const joi = require("joi");

const validateRestaurantId = (resId)=>{
    const Schema = joi.object({
        _id: joi.string().required()
    })
    return Schema.validateAsync(resId);
}
const validateRestaurantCategory = (category)=>{
    const Schema = joi.object({
        category: joi.string().required()
    })
    return Schema.validateAsync(category);
}

module.exports = {validateRestaurantId, validateRestaurantCategory};