const menuModel = require("../../Models/menu/menu.model");
const imageModel = require("../../Models/image/image.model");


const searchMenuById = async (req,res)=>{
    try{
        const{
            _id
        }=body.params
        const menus = await menuModel.find({_id});
        if(!menus){
            return res.status(404).json({
                message: "Not Found"
            })
        }
        return res.status(200).json({
            data: menus,
            message: "success"
        })
    }catch(error){
        return res.status(500).json({
            message: error
        })
    }
}
const getAllRelaMenuImage = async(req,res)=>{
    try{
        const{
            _id
        }=body.params
        const menus = await imageModel.findOne({_id});
        if(!menus){
            return res.status(404).json({
                message: "Not Found Images"
            })
        }
        return res.status(200).json({
            data: menus,
            message: "success"
        })
    }catch(error){
        return res.status(500).json({
            message: error
        })
    }
}
module.exports = {
    searchMenuById,
    getAllRelaMenuImage
}