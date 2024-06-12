const express = require("express");
const Transaction = require("../models/Transaction");

const router = express.Router()

router.put("/api/v1/modify-transactions", (req, res) => {
    const account_number = req.body[0]
    for(let i =  1; i < req.body.length; i++) {
        const id = req.body[i][0];
        let changes = {};
        changes[req.body[i][1]] = req.body[i][2];
        console.log(id)
        Transaction.updateOne({id:id}, changes)
        .then(() => console.log("Succe"))    
    }
    res.send("successful")
})

module.exports = router;
