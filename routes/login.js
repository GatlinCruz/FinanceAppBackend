const express = require("express");
const AccountInfo = require("../models/AccountInfo");
const router = express.Router()

router.post("/api/v1/login", (req, res) => {
    const {username, encrypted_password} = req.body;
    res.send("received")
   
    AccountInfo.findOne({'username': username, 'password': encrypted_password})
    .then((results) => {
        console.log(results)
        //res.json(results)
    })
})

module.exports = router;