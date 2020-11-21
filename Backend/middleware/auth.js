const JWT = require("jsonwebtoken");
const User = require('../models/user-model')
require('dotenv').config();

module.exports = async function (req, res, next) {
    const token = req.header("auth-token")
    if (!token) return res.send(`No Token Entered !!`)
    try {
        const verified = JWT.verify(token, process.env.JWTTOKEN)
        const check = await User.findById(verified._id)
        req.user = check;
        next();
    }catch(e) {
        res.send(e);
        console.log(e); 
    }
}