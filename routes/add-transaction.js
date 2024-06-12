const express = require("express");
const Transaction = require("../models/Transaction");

const router = express.Router()


router.post("/api/v1/add-transaction", (req, res) => {
    const {account_number, date, payment_method, transaction_type, transaction_category, transaction_description, reward_is_points, points_or_cashback_percentage, amount} = req.body;
    console.log(date)
    res.send("received")
})

router.post("/api/v1/add-transactions", (req, res) => {
    const numOfTransactions = req.body[0];
    if(numOfTransactions + 1 === req.body.length) {
        for(let i =  1; i <= numOfTransactions; i++) {
            
            const {id,account_number, date, payment_method, transaction_type, transaction_category, transaction_description, reward_is_points, points_or_cashback_percentage, amount, is_verified} = req.body[i];
            console.log(is_verified)
            Transaction.create({account_number: Number(account_number), id: id, date: date, payment_method: payment_method, transaction_type: transaction_type, transaction_category: transaction_category, transaction_description: transaction_description, reward_is_points: reward_is_points, points_or_cashback_percentage: (points_or_cashback_percentage / 100), amount: amount, is_verified: true})
            .then(() => {
                //res.status(200);
                //res.send("successful")
            }) 
        }
        res.send("successful")
    }
    else {
        console.log("Invalid ")
        //res.status(400)
        res.send("Invalid format")
    }
    
})


module.exports = router;