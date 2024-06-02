const express = require('express')
const { connectToMongoDB } = require('./config/dbConfig/connectToMongoDB.js')
const { PORT } = require('./constants/serverConstants/sercerConstants.js')
const createUserAccountController = require('./controllers/bankControllers/userAccountsControllers/createUserAccountController.js')
const readAllBankAccountsController = require('./controllers/bankControllers/userAccountsControllers/readAllBankAccountsController.js')
const readBankAccountByIdController = require('./controllers/bankControllers/userAccountsControllers/readBankAccountByIdController.js')
const deleteUserBankAccountController = require('./controllers/bankControllers/userAccountsControllers/deleteUserBankAccountController.js')
const updateUserBankAccountController = require('./controllers/bankControllers/userAccountsControllers/updateUserBankAccountController.js')
const cors = require('cors')
const app = express()
app.use(express.json())
app.use(cors())

connectToMongoDB()

app.get('/', (req, res) => {
    res.send('Hello World!')
})

// bank user account routes
// create 
app.post(`/api/create-user-account`, createUserAccountController)
// read
app.get(`/api/read-all-bank-accounts`, readAllBankAccountsController)
app.get(`/api/read-bank-account/:id`, readBankAccountByIdController)
// delete
app.delete(`/api/delete-user-bank-account/:id`, deleteUserBankAccountController)
// update
app.patch(`/api/update-user-bank-account/:id`, updateUserBankAccountController)

app.listen(PORT, () => {
    console.log(`Example app listening on PORT ${PORT}`)
})