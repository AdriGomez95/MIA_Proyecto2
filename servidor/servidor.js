
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





var puestos = [{puesto:'Developer', salario:'Q7000'}]
var empleados = [{usuario:'Adri', password:'123', fecha_inicio:'29/10/2021', fecha_fin:'-', rol:'admin', departamento:'Logistica'}]
var departamentos = ['1','2','3'];
//var usuario_logueado = {user: "Adri", rol: "aplicante"};
//var usuario_logueado = {user: "Adri", rol: "admin"};
//var usuario_logueado = {user: "Adri", rol: "coordinador"};
//var usuario_logueado = {user: "Adri", rol: "reclutador"};
var usuario_logueado;

app.get('/usuario_logueado', (req,res)=>{
  res.send(usuario_logueado)
})

app.get('/limpiar_logueo', (req,res)=>{
  usuario_logueado = undefined;
  res.send(usuario_logueado)
})

app.get('/departamentos', (req,res)=>{
  res.send(departamentos)
})

app.get('/listado_empleados', (req,res)=>{
  res.send(empleados)
})

app.get('/listado_puestos', (req,res)=>{
  res.send(puestos)
})




module.exports = app;




/*
var express = require("express");
var app = express();
const cors = require("cors");

//CONEXION CON LA DB
var oracledb = require("oracledb");
const connect_db = {
  user: 'dbadri',
  password: '123',
  connectString: '172.17.0.2:1521/ORCL18',
}
require("dotenv").config();
app.use(cors());
const port = 9000;
//FIN









var puestos = [{puesto:'Developer', salario:'Q7000'}]
var empleados = [{usuario:'Adri', password:'123', fecha_inicio:'29/10/2021', fecha_fin:'-', rol:'admin', departamento:'Logistica'}]
var departamentos = ['1','2','3'];
//var usuario_logueado = {user: "Adri", rol: "aplicante"};
var usuario_logueado = {user: "Adri", rol: "admin"};
//var usuario_logueado = {user: "Adri", rol: "coordinador"};
//var usuario_logueado = {user: "Adri", rol: "reclutador"};
//var usuario_logueado;

app.get('/usuario_logueado', (req,res)=>{
  res.send(usuario_logueado)
})

app.get('/limpiar_logueo', (req,res)=>{
  usuario_logueado = undefined;
  res.send(usuario_logueado)
})

app.get('/departamentos', (req,res)=>{
  res.send(departamentos)
})

app.get('/listado_empleados', (req,res)=>{
  res.send(empleados)
})

app.get('/listado_puestos', (req,res)=>{
  res.send(puestos)
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


*/