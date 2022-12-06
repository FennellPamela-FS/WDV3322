const express = require('express');
// const router = require('../app/app');
const router = express.Router();

router.get('/', (req, res) => {
    res.status(200).json({
        message: 'Get - Successful',
    });
});

router.get('/:id', (req, res) => {
    res.status(200).json({
        message: 'Get by Id - Successful',
        id: req.params.id,
    });
});

router.post('/signup', (req, res) => {
    res.status(200).json({
        message: '/signup Successful - POST',
    });
});

router.post('/login', (req, res) => {
    res.status(200).json({
        message: '/login Successful - POST',
    });
});

router.get('/profile', (req, res) => {
    res.status(200).json({
        message: '/profile Successful - GET',
    });
});

module.exports = router;
