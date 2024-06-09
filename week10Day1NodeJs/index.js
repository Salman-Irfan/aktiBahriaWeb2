const express = require('express')
const { connectToMongoDB } = require('./config/dbConfig/connectToMongoDB.js')
const { PORT } = require('./constants/serverConstants/sercerConstants.js')
const router = require('./routes/index.js')

const cors = require('cors')
const app = express()
app.use(express.json())


app.use(cors())

connectToMongoDB()

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.use(`/`, router)


app.listen(PORT, () => {
    console.log(`Bank app listening on  http://localhost:/${PORT}`)
})