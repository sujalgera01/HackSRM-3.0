const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    googleId: {
        type: String,
    },
    name: {
        type: String
    },
    email: {
        type: String
    },
    contact: {
        type: Number,
        match: /^([7-9][0-9]{9})$/g
    },
    token : {type: String}
});


module.exports = mongoose.model('User', userSchema);