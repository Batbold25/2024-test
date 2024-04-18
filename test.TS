const express = require("express")

const app = express()
const PORT = 4000

app.get('/', (req, res) => {
    res.send("Hello world")
})

app.get('/test', (req, res) => {
    res.send("yes its work")
})



app.listen( PORT , ()=>{
    console.log(`chinii backend http://localhost:`+ PORT );
})