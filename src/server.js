const express = require('express')
const app = express()
const cors = require('cors')
const port = process.env.PORT || 9000
const router = require('./moduls')
app.use(express.json())
app.use(cors())
app.use(router)


app.use('/*', (req, res)=> res.send('404 Not found 🚓'))

app.listen(port, console.log(port))