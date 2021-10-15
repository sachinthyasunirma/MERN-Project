const jwtPassport = require('passport-jwt');
const dotenv = require('dotenv');
const { required } = require('joi');
dotenv.config({
    path:require('path').resolve(__dirname, '../.env'),
})
const userModel =  require('../Models/user/user.model');
const passport = require('passport');

const jwtStrategy = jwtPassport.Strategy;
const extractJwt = jwtPassport.ExtractJwt;

const options={
    jwtFromRequest: extractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: process.env.JWT_KEY
}
module.exports = (passport) =>{
    passport.use(
        new jwtStrategy(options, async (jwt__payload, done)=>{
            try{
                const doesUserExist = await userModel.findById(jwt__payload.user)//decrypt
                if(!doesUserExist) return done(null,false);

                return done(null, doesUserExist);
            }catch(error){
                throw new Error(error);
            }
        })
    )
}