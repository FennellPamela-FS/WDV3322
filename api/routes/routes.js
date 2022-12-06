const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();
const User = require("../models/user");


router.post('/signup', (req, res) => {
    res.status(200).json({
        message: '/signup Successful - POST',
    });
});

// router.post('/login', (req, res) => {
//     res.status(200).json({
//         message: '/login Successful - POST',
//     });
// });

// router.get('/profile', (req, res) => {
//     res.status(200).json({
//         message: '/profile Successful - GET',
//     });
// });

module.exports = router;
