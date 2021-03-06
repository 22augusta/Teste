const express = require("express")
const bodyParser = require("body-parser");
const mongoose = require("mongoose")

const app = express()

mongoose.connect("mongodb://localhost:27017/senac", {
                 useNewUrlParser: true,
                 useUnifiedTopology: true
});

let db = mongoose.connection;

db.on("error", console.log.bind(console, "connection error:"))
db.once("open", function (){
  console.log("conexão feita com sucesso.")
})

const index = require("./routes/index")
const doadors = require("./routes/doadorsRoute.js")
const instituicaos = require("./routes/instituicaosRoute.js")
const beneficiarios = require("./routes/beneficiariosRoute.js")

app.use(express.json())

app.use(function ( req,res,next ){
    res.header("Access-Control-Allow-Origin", "*")
    res.header(
        "Access-Control-Allow-Headers",
        "Origin,X-Requested-With,Content-Type,Accept"
    )
    next()
})

app.use("/",index)
app.use("/doadors", doadors)
app.use("/instituicaos", instituicaos)
app.use("/beneficiarios", beneficiarios)

module.exports = app;
