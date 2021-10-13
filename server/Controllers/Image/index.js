//Database Model
const imgaeModel = require('../../Models/image/image.model');


//Library
const AWS = require("aws-sdk");
const multer = require("multer");

//multer config
const storage = multer.memoryStorage();
const upload = multer({storage});

//AWS s3 bucket
const s3Bucket = new AWS.S3({
    accessKeyId : process.env.AWS_S3_ACCESS_KEY,
    secretAccessKey: process.env.AWS_S3_SECRET_ACCESS_KEY,
    region: "ap-southeast-1",
})
const uploadImg = async (req,res)=>{
    try{
        const file = req.file;

        //s3 bucket options
        const bucketOptions ={
            Bucket:"zomato-project1",
            Key: file.originalname,
            Body: file.buffer,
            ContentType: file.mimetype,//file type
            ACL: "public-read"
        }

        const s3Upload = (options) =>{
            return new Promise((resolve,reject)=> s3Bucket.upload(options,(error,data)=>{
                if(error) return reject(error);
                return resolve(data);
            }))
        }
        const uploadImage = await s3Upload(bucketOptions);

        return res.status(200).json({uploadImage})
    }catch(error){
        return res.status(500).json({error: error.message})
    }
}
module.exports = {
    uploadImg,
}