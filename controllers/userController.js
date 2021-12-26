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

function getInfoById(req,res){
    // const {id} = req.params;
    const name = req.params.name;
    user.find({name:name})
    .then(
        function (data) {
            res.status(200).json({sucess:true, message:'Info retrived', data})
        }
    ).catch(
        function (error) {
        res.status(404).json({sucess:false, message:'Info not retrived'+error.message})
    })
};

function postInfo(req,res){
    user.create(req.body)
    .then(
        function (data) {
            res.status(200).json({sucess:true, message:'Info created', data})
        }
    ).catch(
        function (error) {
        res.status(404).json({sucess:false, message:'Info not created: '+error.message})
    })
};

function deleteInfoById(req,res){
    const {id} = req.params;
    user.findByIdAndDelete(id)
    .then(
        function (data) {
            res.status(200).json({sucess:true, message:'Info deleted: ', data})
        }
    ).catch(
        function (error) {
        res.status(404).json({sucess:false, message:'Info not deleted: '+error.message})
    })
};

function updateInfoById(req,res){
    const {id} = req.params;
    const {isEmployed} = req.body;
    user.findByIdAndUpdate(id, {isEmployed:isEmployed})
    .then(
        function (data) {
            res.status(200).json({sucess:true, message:'Info updated', data})
        }
    ).catch(
        function (error) {
        res.status(404).json({sucess:false, message:'Info not updated: '+error.message})
    })
};

module.exports = {getAllInfo,getInfoById,postInfo,deleteInfoById,updateInfoById};