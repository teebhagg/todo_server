const express = require('express');
const server = express();
const mongoose = require('mongoose');
const userController = require('./controllers/userController')


mongo_db_url = 'mongodb://localhost:27017/server_index';
server.use(express.json());


server.listen(27017, function () {
    console.log('server is running...');
    mongoose.connect(mongo_db_url).then(function () {
        console.log("DB  is up and running");
        server.get('/users', userController.getAllInfo);
        server.post('/users', userController.postInfo);
    }
    ).catch(function (error) {
        console.log('Cant Connect to DB: ' + error.message);
    });
});