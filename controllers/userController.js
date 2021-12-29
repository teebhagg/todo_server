// const { find } = require("../models/user");
const user = require("../models/user")

function getAllInfo(req,res){
    user.find({})
    .then(
        function (data) {
            res.status(200).json({sucess:true, message:'All info retrived', data})
        }
    ).catch(function (error) {
        res.status(404).json({sucess:false, message:'Info not retrived'+error.message})
    })
};



function postInfo(req,res){
    user.create({
        "first_name":"Abena",
        "last_name":"Bankushishi",
        "date_of_birth": 1999-03-13,
        "school":"Hambrigde"

    },
    {
        "first_name":"Benedicta",
        "last_name":"Sprinkles",
        "date_of_birth":1995-11-09,
        "school":"Lemonade High School"
    },
    {
        "first_name":"Janet",
        "last_name":"Hubert",
        "date_of_birth":1985-08-11,
        "school":"Talin University"
    })
    .then(
        function (data) {
            res.status(200).json({sucess:true, message:'Info created', data})
        }
    ).catch(
        function (error) {
        res.status(404).json({sucess:false, message:'Info not created: '+error.message})
    })
};



module.exports = {getAllInfo,postInfo};