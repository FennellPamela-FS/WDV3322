const express = require('express');
const routes = express.Router();


routes.post('/signup', (req, res) => {
    res.status(200).json({
        message: '/signup Successful - POST',
    });
});

routes.post('/login', (req, res) => {
    res.status(200).json({
        message: '/login Successful - POST',
    });
});

routes.get('/profile', (req, res) => {
    res.status(200).json({
        message: '/profile Successful - GET',
    });
});

module.exports = routes;
