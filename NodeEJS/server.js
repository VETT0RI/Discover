const express = require('express')
const app = express()

app.set("view engine", "ejs")

app.get("/", (req, res) => {
  const items = [
    {tittle: "D",
    message: "anone"
  },{
    tittle: "E",
    message: "spinafre"
  }, {
    tittle: "M",
    message: "aricas"
  }, {
    tittle: "A",
    message: "rminha"
  }, {
    tittle: "I",
    message: "h rapaz"
  }, {
    tittle: "S",
    message:"EXtou"
  }]
  
  res.render('pages/index', {
    bro: items,
  })
})

app.get("/sobre", (req, res) => {
  res.render('pages/about')
})

app.listen(8080)
console.log('rodando')