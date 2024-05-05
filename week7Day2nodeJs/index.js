const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
    res.send('<h1>hello nfrom node server from nodemon</h1>')
})
app.get('/about', (req, res) => {
    res.send('<h1>hello about page from from nodemon</h1>')
})

app.listen(port, () => {
    console.log(`Example app listening on ports ${port}`)
})