const express = require('express')
const cors = require('cors')
const testGetJsonController = require('./controllers/dummyControllers/testGetJsonController')
const getTodosController = require('./controllers/dummyControllers/getTodosController')
const testPostJsonController = require('./controllers/dummyControllers/testPostJsonController')

const app = express()
app.use(cors())
app.use(express.json())
const port = 3000

app.get('/', (req, res) => {
    res.send('<h1>hello nfrom node server from nodemon</h1>')
})
app.get('/about', (req, res) => {
    res.send('<h1>hello about page from from nodemon</h1>')
})



app.get(`/test-get-json`, testGetJsonController)

// http get
app.get(`/todos/1`, getTodosController)

// post request
app.post(`/test-post-json`, testPostJsonController)

app.listen(port, () => {
    console.log(`Example app listening on ports ${port}`)
})