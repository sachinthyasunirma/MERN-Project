const mongoose = require("mongoose");
const encrypt = require("crypto");

const userSchema = mongoose.Schema({
    firstname:{
        type: String,
        required: [true, " Please provid your first name"],
        trim: true,
        min: 3,
        max: 20
    },
    lastname:{
        type: String,
        required: [true, " Please provid your last name"],
        trim: true,// use for the trim extra space eg:-"sachin "-> "sachin"
        min: 3,
        max: 20
    },
    email:{
        type: String,
        required: [true, " Please provid your email"],
        trim: true,
        unique: true,//email should be unique for one by one
        lowercase: true
    }, 
    username:{
        type: String,
        required: [true, " Please provid your username"],
        trim: true,
        unique: true,
        lowercase: true,
        index: true//index number
    },
    role:{
        type: String,
        enum:["user", "admin", "super-admin"]// enum-> enumerations (enums are used to represent a fixed number of possible values)
    },
    contact_number:{
        type: Number
    },
    hash_password:{
        type: String,
        required: [true, " Please provid your password"]
    }
},{
    timestamps: true// when this document created, when this document update
})
// strict it is had default


const user = mongoose.model("User", userSchema);

userSchema.virtual("password").set(()=>{
    (password)=>this.hash_password=encrypt.hash_password(password);
})
userSchema.virtual("fullname").get(()=>{
    return this.firstname+" "+ this.lastname;
}).set(()=>{
    this.firstname = fullname.split(' ')[0];
    this.lastname = fullname.split(' ')[1];
})

module.exports = user;