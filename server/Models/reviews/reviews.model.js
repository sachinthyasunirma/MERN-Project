const mongoose = require("mongoose");

const ReviewSchema =new mongoose.Schema({
    food:{
        type:mongoose.Types.ObjectId,
        ref:"Foods"
    },
    restaurnat:{
        type:mongoose.Types.ObjectId,
        ref:"Rastaurants"
    },
    rating:{
        type:Number,
        required: true
    },
    reviewText:{
        type:String,
        required:true
    },
    isRestaurantReview:{
        type:Boolean,
    },
    isFoodReview:{
        type:Boolean
    },
    photos:[{
        type:mongoose.Types.ObjectId,
        ref="Images"
    }]
},{
    timestamps: true
});

const ReviewModel = mongoose.model("Reviews", ReviewSchema);

module.exports = ReviewModel;