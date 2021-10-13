const express = require("express");
const router = express.Router();

const AWS = require('aws-sdk');
const multer = require('multer');//save image in the ram short time period

const imgaeModel = require('../../../Models/image/image.model');

//multer config
const storage = multer.memoryStorage();
const upload = multer({storage:storage});

const {
    uploadImg
}=require('../../../Controllers/Image/index')

// //AWS s3 bucket config
// const s3Bucket = new AWS.S3({
//     accessKeyId: process.env.AWS_S3_ACCESS_KEY,
//     secretAccessKey: process.env.AWS_S3_SECRET_ACCESS_KEY,
//     region: 'ap-southeast-1'
// })

router.post("/s",upload.single('file'), uploadImg);

module.exports = router;

