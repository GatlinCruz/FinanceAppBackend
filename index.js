const express = require('express')
const cors = require('cors')
const {mongoose} = require('mongoose')
//const transactionSchema = require('./models/Transaction')


//awat mongoose.connect("mongodb://localhost:27017/maindb/main");

main().catch((err) => console.log(err));
async function main() {
  await mongoose.connect("mongodb://localhost:27017/maindb")
  .then(console.log("database connected"))
  .catch((err) => {
    console.log(err)
  })
}

const getTransactions = require("./routes/get-transactions")
const addTransaction = require("./routes/add-transaction")
const removeTransaction = require("./routes/delete-transaction")
const modifyTransactions = require("./routes/update-transaction")
const login = require("./routes/login")


const app = express()
const PORT = 3200

app.use(cors())
app.use(express.json())
app.use(getTransactions);
app.use(addTransaction)
app.use(removeTransaction)
app.use(modifyTransactions)
app.use(login)
// transactionSchema.findOne({})
// .then((docs) => {console.log(docs)})



app.get('/', (req, res) => {
    console.log("sending data cuz")
    res.send('Hello World')
});
// app.get("/", getTransactions)

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
})

// transactionSchema.find({})
// .then((result) => {
//     console.log(result[0])
// })
