const mongoose = require('mongoose');
const userSchema = mongoose.Schema({
    name:{type:String,required:[true,'Name is required']},
    lastName:{type:String,required:[true,'Last name is required']},
    age:{type:Number,required:[true,'Age is required']},
    nationality:{type:String,required:[true,'Nationality is required']},
    dateOfBirth:{type:Date,required:[true,'Date is required']},
    isEmployed:Boolean,
},{timestamps:true});

const user = mongoose.model('users',userSchema);
 module.exports = user;