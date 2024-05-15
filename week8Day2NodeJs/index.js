const express = require('express')
const cors = require('cors')
const getRequestController = require('./controllers/dummyControllers/getRequestController')
const postRequestController = require('./controllers/dummyControllers/postRequestController')
const connectToMongoDb = require('./config/connectToMongoDb')
const createBankAccountController = require('./controllers/bankControllers/accountControllers/createBankAccountController')
const app = express()
app.use(express.json())
app.use(cors())

const port = 3000

connectToMongoDb()

app.get('/', (req, res) => {
    res.send(`
        <html>
            <head>
                <body>
                    <p>testing</p>
                </body>
            </head>
        </html>
    `)
})

app.get(`/get-json`, getRequestController)
app.post(`/post-json`, postRequestController)
app.put(`/put-json`, postRequestController)
app.patch(`/patch-json`, postRequestController)
app.delete(`/delete-json/11`, (req, res)=>{
    return res.json({
        success: true,
        message: `record 11 deleted successfully`
    })
})


app.post(`/open-bank-account`, createBankAccountController)

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})