const express = require('express');
const routes = express.Router();


routes.post('/signup', (req, res) => {
    res.status(200).json({
        message: '/signup Successful - POST',
    });

    // findUser - by email address  {id: _Id } {email: _Id }

    // if user exist return status 409 message user exist
    // else encrypt password 
    // else err create from Model newUser obj with hash as password
    // saveUser pass in suer.saveUser
});

routes.post('/login', (req, res) => {
    // findUser
    // if user not found, then return (think like an err) 401 message Authorization failed
    // else
    // compare passwords (returns true or false)
    // test for err in callback function
    // test result
    // then return authorization message successful
    // return name you got back from the user if you'd like


    res.status(200).json({
        message: '/login Successful - POST',
    });
});

routes.get('/profile', (req, res) => {
    // routes.get('/profile', , (req, res) => {  // add middleware
    res.status(200).json({
        message: '/profile Successful - GET',
    });
});

module.exports = routes;
