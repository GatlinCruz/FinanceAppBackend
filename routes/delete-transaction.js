const express = require("express");
const Transaction = require("../models/Transaction");

const router = express.Router()

router.delete("/api/v1/remove-transactions", (req, res) => {
    //console.log(req.body)
    for(let i =  0; i < req.body.length; i++) {
        const id = req.body[i];
        console.log(id)
        Transaction.deleteOne({_id: id})
        .then(() => {console.log("success")}) 
        }
    
    console.log("Success")
    res.send("success")
})

module.exports = router;