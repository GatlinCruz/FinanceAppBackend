const {mongoose} = require('mongoose');
const { Schema, model } = mongoose;

const accountInfoSchema = new Schema({
  account_number: Number,
  username: String,
  password: String,
  savings_amount: Number,
  debt_amount: Number
}, 
{ collection: "accounts"});

module.exports = model("AccountInfo", accountInfoSchema);