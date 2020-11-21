const express = require('express')
const router = express.Router()
const Crime = require('../models/crimereports')
const auth = require('../middleware/auth')

router.post('/crime', auth, async (req, res) => {
    const {description, arealocation} = req.body ;
    try {
        var check = await new Crime({userid: req.user._id, description, arealocation});
        await check.populate('userid').execPopulate()
        // await check.save()
        res.send(check)
    } catch (e) {
        console.log(e);
        res.send(e);
    }
}) 

router.get('/crime', auth, async (req, res) => {
    try {
        var check = await Crime.find({})
        var template = []
        for (var i = 0 ; i < check.length ; i++ ){
            var make = await check[i].populate('userid').execPopulate()
            template.push(make)
        }
        console.log(template)
        res.send(template)
    } catch (e) {
        console.log(e);
        res.send(e);
    }
})

module.exports = router;