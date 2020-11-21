const express = require('express')
const router = express.Router()
const User = require('../models/user-model')
const auth = require('../middleware/auth')

router.post('/contact', auth, async (req, res) => {
    const {contact} = req.body;
    var checks = await User.findById(req.user._id)
    console.log(req.user)
    checks.contact = contact
    await checks.save();
    res.json(checks)
})

module.exports = router;