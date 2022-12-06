const express = require('express');
const user = require('../api/model/user');
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


// findUser() pass in something where that something is an obj
// findUser(obj)
// that obj could be 
// findUser({email: req.body.email})
// or findUser({firstName: req.body.firstName})
// but do it like the following so you can pass what is needed

// const findUser = async (obj) = > {
//     return await user.findOne(obj)  // some obj gets passed un
// }

