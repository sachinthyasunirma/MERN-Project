const mongoose = require("mongoose");

const OrderSchema = new mongoose.Schema({
    user:{
        type:mongoose.Types.ObjectId,
        ref: "Users"
    },
    orderDetails:[
        {
            food:{
                type:mongoose.Types.ObjectId,
                ref:"Foods"
            },
            quantity:{
                type:Number,
                required:true
            },
            paymode:{
                type:String,
                required:true
            },
            status:{
                type: String,
                default: "Placed"
            },
            paymentDeatils:{
                itemTotal:{
                    type:Number,
                    required:true
                },
                promo:{
                    type: String,
                    required:true
                },
                tax:{
                    type: String,
                    required:true
                }
            }
        }
    ],
},{
    timestamps:true
})

const OrderModel = mongoose.model("Orders", OrderSchema);

module.exports = OrderModel;