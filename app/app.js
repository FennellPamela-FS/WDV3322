const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
// const routes = require('../routes/router');
// const routes = require('../api/routes/routes');
const app = express();
const userRoute = require('../routes/router');
const bcrypt = require('bcrypt');
// app.use(express.json());
const user = {};

// parsing without using body parser
app.use(
    express.urlencoded({
        extended: true,
    })
);

// middleware that all request are handled with json
app.use(express.json());

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



// CORS
app.use(cors(), (req, res, next) => {
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

// routes 
app.use('/users', userRoute);
// app.use('/users', routes);


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


// // connect to mongodb
mongoose.createConnection(process.env.mongodbURL, (err) => {
    if (err) {
        console.error("Error: ", err.message);
    }
    else {
        console.log("MongoDB connection successful");
    }
});

// mongoose.connect(url, () => {
//     console.log("MongoDB connection successful");
// })

module.exports = app;

