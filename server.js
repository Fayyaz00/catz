
const port = process.env.PORT || 3000

const express = require('express')
const app = express()

app.use(express.static('www'));
const path = require('path');

app.use(logger)

app.get('/', (req, res) => {
  // console.log("Home Page");
  res.sendFile(path.join(__dirname + '/index.html'));

  // res.send("Home Page")
})

app.get('/public/css/style.css', (req, res) => {
  console.log("css Page");
  res.sendFile(path.join(__dirname + '/public/css/style.css'));
})

app.get('/public/engine.js', (req, res) => {
  console.log("catz Page");
  res.sendFile(path.join(__dirname + '/public/engine.js'));
})

function logger(req, res, next) {
  console.log(req.originalUrl)
  next()
}

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})