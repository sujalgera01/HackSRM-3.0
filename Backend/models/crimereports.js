const mongoose = require('mongoose');
const User = require('./user-model')


const crimeSchema = mongoose.Schema({
    userid : {type : mongoose.ObjectId, ref: User},
    description : {type: String},
    arealocation : [{lat:{type: Number}, lng:{type: Number}}],
});


module.exports = mongoose.model('Crime', crimeSchema);