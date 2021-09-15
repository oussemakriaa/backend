const mongoose=require('mongoose')
const userShema = mongoose.Schema({
    fullName:String,
    email:String,
    age:Number
})
module.exports=mongoose.model('User',userShema)