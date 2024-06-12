const express = require("express");
const Transaction = require("../models/Transaction");
const router = express.Router()

// let sample_data = [
//     {
//         account_number: 1,
//         date:"02/21/24",
//         payment_method:"Apple card",
//         transaction_type:"Credit",
//         transaction_category:"Bill",
//         transaction_description:"Power",
//         reward_is_points:false,
//         points_or_cashback_percentage:0.05,
//         amount:123.39
        
//     },
//     {
//         account_number: 2,
//         date:"02/22/24",
//         payment_method:"Chase",
//         transaction_type:"Credit",
//         transaction_category: "Groceries",
//         transaction_description:"Publix",
//         reward_is_points:false,
//         points_or_cashback_percentage: 0.00,
//         amount: 52.22
//     },
//     {
//         account_number: 3,
//         date:"02/22/23",
//         payment_method:"Wells Fargo",
//         transaction_type:"Credit",
//         transaction_category: "Bills",
//         transaction_description:"Gas",
//         reward_is_points:true,
//         points_or_cashback_percentage: 0.02,
//         amount: 13992.22
//     }
// ]


router.get("/api/v1/get-transactions/:accountNumber", (req, res) => {
    const accountNum = Number(req.params['accountNumber']);
    Transaction.find({'account_number': accountNum})
    .then((results) => {
        //console.log(results[0]["_id"])
        res.json(results)
    })
})


module.exports = router;