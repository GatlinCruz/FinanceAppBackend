const {mongoose} = require('mongoose');
const { Schema, model } = mongoose;

const transactionSchema = new Schema({
  account_number: Number,
  id: Number,
  date: String,
  payment_method: String,
  transaction_type: String,
  transaction_category: String,
  transaction_description: String,
  reward_is_points: Boolean,
  points_or_cashback_percentage: Number,
  amount: Number,
  is_verified: Boolean
}, 
{ collection: "transactions"});

const Transaction = model('Transaction', transactionSchema);
module.exports = model("Transaction", transactionSchema);