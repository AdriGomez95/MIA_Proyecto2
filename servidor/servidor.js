
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

/*

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
*/




var express = require("express");
var app = express();
const cors = require("cors");


/* CONEXION CON LA DB ORACLE */
var oracledb = require("oracledb");
const connect_db = {
  user: 'dbadri',
  password: '123',
  connectString: '172.17.0.2:1521/ORCL18',
}
require("dotenv").config();
app.use(cors());
const port = 9000;
/* ***** ***** ***** ***** */


var usuario_logueado = {user: "Adri", rol: "admin"};
//var usuario_logueado = {user: "Adri", rol: "trabajador"};
//var usuario_logueado;

app.get('/usuario_logueado', (req,res)=>{
  res.send(usuario_logueado)
})

app.get('/con', (req, res)=>{
  let datos;
  const conexion = async() => {
    let conn;
    try{
      conn = await oracledb.getConnection(connect_db);

      const result = await conn.execute(
        'SELECT * from PRUEBA'
      );

      console.log(result);
    }catch (err){
      console.log(err);
    }finally {
      if(conn){
        try{
          await conn.close();
        }catch (err){
          console.log('err');
        }
      }
    }
  }
  conexion()
  res.send({data:"info enviada"})
})




app.listen(port, async () => {
  console.debug("Servidor escuchando en puerto: 9000");
});
