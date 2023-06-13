const mongoose=require("mongoose")

const userSchema= mongoose.Schema({
    Name:String,
    MobileNo:String,
    Email:String,
    Address:String,
    ProfilePic:String
})

const userModel= mongoose.model("user",userSchema)

module.exports={
    userModel
}