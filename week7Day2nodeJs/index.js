const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
    res.send('<h1>hello nfrom node server from nodemon</h1>')
})
app.get('/about', (req, res) => {
    res.send('<h1>hello about page from from nodemon</h1>')
})



app.get(`/test-get-json`, (req, res)=>{
    res.json({
        success: true,
        data: 123,
        age: 25,
        name: "node server"
    })
})

// http get
app.get(`/todos/1`, (req, res)=>{
    res.json({
        userId: 1,
        id: 1,
        title: "koi ajeeb c english",
        completed: false
    })
})

app.listen(port, () => {
    console.log(`Example app listening on ports ${port}`)
})