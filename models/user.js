const mongoose = require('mongoose');
const userSchema = mongoose.Schema({
    first_name:{type:String,required:[true,'First Name is required']},
    last_name:{type:String,required:[true,'Last Name is required']},
    date_of_birth:{type:Date,required:[true,'Date Of Birth is required']},
    school:{type:String,required:[true,'Schhol is required']},
},{timestamps:true});

const user = mongoose.model('users',userSchema);
 module.exports = user;