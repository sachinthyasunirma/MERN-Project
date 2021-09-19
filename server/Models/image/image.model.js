const mongoose = require("mongoose");

const ImageSchema = new mongoose.Schema({
    location: [{
        type: String,
        required: true
    }]
},{
    timestamps: true
})

const ImgaeModel = mongoose.model("Images", ImageSchema);

module.exports = ImgaeModel;