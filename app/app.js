const express = require('express');
const routes = require('../api/routes/routes');
const app = express();
const bcrypt = require('bcrypt');
const mongoose = require('mongoose');
app.use(express.json());
const user = {};

app.post('/signup', (req, res) => {
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

// parsing wihtout using body parser
app.use(
    express.urlencoded({
        extended: true,
    })
);

// middleware that all request are handled with json
app.use(express.json());

// CORS
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header(
        'Access-Control-Allow-Headers',
        'Origin, X-Requested-With, Content-Type, Accept, Authorization'
    );

    if (req.method === 'OPTIONS') {
        res.header('Access-Control-Allow-Methods', "POST, PUT, GET, PATCH, DELETE");
    }
    next();
});

app.get('/', (req, res, next) => {
    res.status(201).json({
        message: "Service is up!",
        method: req.method
    });
});

// routes - users
app.use('/users', routes);


// add middleware for errors and bad url paths
app.use((req, res, next) => {
    const error = new Error('NOT FOUND!!!');
    error.status = 404;
    next(error);
});

app.use((error, req, res, next) => {
    res.status(error.status || 500).json({
        error: {
            message: error.message,
            status: error.status,
        },
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

