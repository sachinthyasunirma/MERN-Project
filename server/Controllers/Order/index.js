const { findOneAndUpdate } = require('../../Models/order/order.model');
const orderModel = require('../../Models/order/order.model');

const orderId = async (req,res)=>{
    try{
        const{
            _id
        }=req.params;
        const orders = await orderModel.findOne({user:_id});
        if(!order){
            return res.status(404).json({
                data:[],
                message: "User not found "
            })
        }
        return res.status(200).json({
            data:orders,
            message:"success"
        })
    }catch(error){
        return res.status(500).json({
            message: error
        })
    }
}
const orderNew = async (req,res)=>{
    try{
        const{
            _id
        }=req.params;
        const{
            orderDetails
        }=req.body
        const newOrder = await orderModel.findOneAndUpdate({
            user:_id
        },{
            $push:{orderDetails: orderDetails}
        },{
            new:true
        })
        return res.status(200).json({
            data:newOrder
        })
    }

    catch(error){
        return res.status(500).json({
            message: error
        })
    }
}

module.exports= {
    orderId,
    orderNew
}