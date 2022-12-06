const express = require('express');
const app = express();
const bcrypt = require('bcrypt');
const mongoose = require('mongoose');
require("dotenv").config();

app.use(express.json());
const user = {};

app.post('/signup', (req, res) => {
    // tell json to request body parse the body into an object
    // req.body.password = bcrypt.hashSync(req.body.password); 

    //signup
    // hash info from reg form
    // 2nd param is the salt to cover with strings over our plain text password
    // 3rd param is a promise that returns err or hash
    bcrypt.hash(req.body.password, 10, (err, hash) => {
        if (err) {
            res.status(500).json({ message: err.message });
        }
        else {
            user.password = hash;
            res.status(200).json({ password: hash });
        }
    });
});

app.post('/login', (req, res) => {
    bcrypt.compare(req.body.password, user.password, (err, result) => {
        if (err) {
            return res.status(501), json({ message: err.message });
        }

        if (result) {
            res.status(200).json({
                message: 'Authorization Successful',
                result: result,
            });
        }
        else {
            res.status(401).json({
                message: 'Authorization Failed',
                result: result,
            });
        }
    });
});




// connect to mongodb
mongoose.connect(process.env.mongodbURL, (err) => {
    if (err) {
        console.error("Error: ", err.message);
    }
    else {
        console.log("MongoDB connection successful");
    }
});


module.exports = app;

