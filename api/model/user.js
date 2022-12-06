const mongoose = require('mongoose');

// const id = new mongoose.Schema.Types.ObjectId;

const userSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    // _id: id,
    firstName: String,
    // },
    // lastName: {
    //     type: String,
    // },
    // address: {
    //     type: String,
    // },
    // city: {
    //     type: String,
    // },
    // zip: {
    //     type: String,
    // },
    // email: {
    //     type: String,
    // },
    // password: {
    //     type: String,
    // },
});

module.exports = mongoose.model('User', userSchema);