
/*

//INICIO DEL SERVIDOR
const express = require('express');
const app = express();
const port = 8000;
//const cors = require('cors');
//app.use(cors());



app.listen(port, ()=>{
    console.log("servidor encendido");
})


app.get('/', (req, res)=>{
    res.send({data:"info enviada"})
})

*/



require("dotenv").config();

var express = require("express");
var app = express();
var corsOptions = { origin: true, optionsSuccessStatus: 200 };

const cors = require("cors");


var usuarios = require("./routes/usuarios");


app.use(cors(corsOptions));
app.use("/usuarios", usuarios);


app.listen(9000, () => {
  console.debug("Servidor escuchando en puerto: 9000");
});

module.exports = app;






