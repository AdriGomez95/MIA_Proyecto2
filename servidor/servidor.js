
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
var carga = require("./routes/cargaMS");
var listadoPuestos = require("./routes/ListadoPuestos");
var departamentos = require("./routes/Departamentos");
var documentos = require("./routes/Documentos");


app.use(cors(corsOptions));
app.use("/usuarios", usuarios);
app.use("/cargaMS", carga);
app.use("/ListadoPuestos", listadoPuestos);
app.use("/Departamentos", departamentos);
app.use("/Documentos", documentos);






const pd = app.listen(9000, () => {
  console.debug("Servidor escuchando en puerto: 9000");
});


const io = require("socket.io")(pd, 
  {  
    cors: {    origin: "http://localhost:3000",  
  }
});

io.on("connection", (socket) => {
  
  socket.on("probando", ()=>{
    console.log("yes yes")
  })
});





/*
//################## MANEJO DE ROLES DE USUARIO ##################
//(admin, coordinador, reclutador, aplicante, undefined que es guest)
//var usuario_logueado = {user: "Adri", rol: "admin"};
//var usuario_logueado = {user: "Adri", rol: "coordinador"};
//var usuario_logueado = {user: "Adri", rol: "reclutador"};
//var usuario_logueado = {user: "Adri", rol: "aplicante"};
var usuario_logueado;

app.get('/usuario_logueado', (req,res)=>{
  res.send(usuario_logueado)
})

app.get('/limpiar_logueo', (req,res)=>{
  usuario_logueado = undefined;
  res.send(usuario_logueado)
})
*/





//################## MANEJO DE APLICANTES ##################
//(aceptado rechazado pendiente, contratado despedido, calificador de puestos)
var aplicantes = [{id:1,nombre:'aplicante 1',apellido:'aplicante 1',dpi:1,puesto:'puesto',salario:'Q5000',estado:'aceptado'},{id:2,nombre:'aplicante 2',apellido:'aplicante 2',dpi:2,puesto:'puesto 2',salario:'Q8000',estado:'pendiente'}]

app.get('/aplicantes', (req,res)=>{
  res.send(aplicantes)
})


//################## MANEJO DE DOCUMENTOS ##################
//(aceptado rechazado pendiente)
var documentos = [{id:1,id_usuario:1,nombre:'CV',estado:'pendiente',motivo:'-',link:'google.com',formato:'PDF',rechazos:0},{id:2,id_usuario:2,nombre:'Antecedentes',estado:'pendiente',motivo:'-',link:'google.com',formato:'JPG',rechazos:0}]
//var id_revision_docs = -1;

app.get('/documentos', (req,res)=>{
  res.send(documentos)
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