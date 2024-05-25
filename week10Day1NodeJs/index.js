const express = require('express')
const { connectToMongoDB } = require('./config/dbConfig/connectToMongoDB.js')
const { PORT } = require('./constants/serverConstants/sercerConstants.js')
const createUserAccountController = require('./controllers/bankControllers/userAccountsControllers/createUserAccountController.js')
const app = express()
app.use(express.json())

connectToMongoDB()

app.get('/', (req, res) => {
    res.send('Hello World!')
})

// bank user accoutn routes
app.post(`/api/create-user-account`, createUserAccountController)

app.listen(PORT, () => {
    console.log(`Example app listening on PORT ${PORT}`)
})