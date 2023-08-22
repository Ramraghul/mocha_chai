const express = require('express');
const route = express.Router();

const userTestingLearn = require('../controller/User.controller');

route.get('/', userTestingLearn.checking);
route.get('/all_user',userTestingLearn.getAllUser)
route.post('/createNewUser', userTestingLearn.createNewUser)
// route.get('/getUserById/:id', userTestingLearn.getUserById)
// route.put('/updateUser/:id', userTestingLearn.updateOldUser)
// route.put('/deleteUser/:id', userTestingLearn.userDelete)

module.exports = route;
