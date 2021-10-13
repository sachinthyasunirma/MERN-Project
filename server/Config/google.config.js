// //const passport = require('passport');

// const googleOauth = require('passport-google-oauth20');

// const usermodel = require('../Models/user/user.model');

// const googleStrategy = googleOauth.Strategy;//create login in google route

// module.exports = (passport) => {
//     passport.use(
//         new googleStrategy({
//             clientID: process.env.AUTH_CLIENT_ID,
//             clientSecret: process.env.AUTH_CLIENT_SECRET,
//             callbackURL : "http://localhost:4000/auth/google/callback"
//         },
//         //after authenticating with google you will get these values
//         async (acessToken , refreshToken, profile, done) => {
//             try{
//                 //creating a new user object
//                 const newUser={
//                     fullName: profile.displayName,
//                     email: profile.emails[0].value,
//                     profilePic: profile.photos[0].value
//                 };
//                 //check if the user exists
//                 const user = await usermodel.findOne({email: newUser.email});
//                 if(user){
//                     //generate token
//                     const token = user.generatejwtToken();
//                     //return user 
//                     done(null, {user,token});
//                 }else{
//                     //create new user
//                     const user = await usermodel.create(newUser);
//                     //generate token
//                     const token = await user.generatejwtToken();

//                     //return user
//                     done(null,{user,token})
//                 } 
//             }catch(error){
//                 done(error, null)
//             }
//         }

//         )
//     )
//     passport.serializeUser((userData, done)=> done(null, {...userData}));
//     passport.deserializeUser((id,done)=> done(null, id));
// }