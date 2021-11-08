
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


app.use(cors(corsOptions));
app.use("/usuarios", usuarios);
app.use("/cargaMS", carga);


app.listen(9000, () => {
  console.debug("Servidor escuchando en puerto: 9000");
});






//################## MANEJO DE ROLES DE USUARIO ##################
//(admin, coordinador, reclutador, aplicante, undefined que es guest)
var usuario_logueado = {user: "Adri", rol: "admin"};
//var usuario_logueado = {user: "Adri", rol: "coordinador"};
//var usuario_logueado = {user: "Adri", rol: "reclutador"};
//var usuario_logueado = {user: "Adri", rol: "aplicante"};
//var usuario_logueado;

app.get('/usuario_logueado', (req,res)=>{
  res.send(usuario_logueado)
})

app.get('/limpiar_logueo', (req,res)=>{
  usuario_logueado = undefined;
  res.send(usuario_logueado)
})


//################## MANEJO DE DEPARTAMENTOS ##################
var departamentos = ['1','2','3'];

app.get('/departamentos', (req,res)=>{
  res.send(departamentos)
})


//################## MANEJO DE EMPLEADOS ##################
var empleados = [{usuario:'Adri', password:'123', fecha_inicio:'29/10/2021', fecha_fin:'-', rol:'admin', departamento:'Logistica'},{usuario:'hhhhh', password:'hhh', fecha_inicio:'29/10/2021', fecha_fin:'-', rol:'hhhh', departamento:'hhhh'}]

app.get('/listado_empleados', (req,res)=>{
  res.send(empleados)
})


//################## MANEJO DE PUESTOS ##################
var puestos = [{puesto:'Developer', salario:'Q7000', categoria:'categoria 1', departamento:'departamento 1'},{puesto:'Secretaria', salario:'Q7000', categoria:'categoria 2', departamento:'departamento 2'},{puesto:'Maestra', salario:'Q7000', categoria:'categoria 3', departamento:'departamento 3'}]

app.get('/listado_puestos', (req,res)=>{
  res.send(puestos)
})


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










//################## MANEJO DE CARGA MASIVA ##################
app.use(express.urlencoded({extended:true}))
app.use(express.json())

app.post('/CMS', (req,res)=>{
  const data = req.body.datosDeCarga
  console.log("hola :)")
  console.log(data)
  aqui(data)
  console.log("adios :)")
})


const aqui = (objeto)=>{
  //console.log("********* objetos ********* ")
  aqui2(objeto.departamentos)
}

const aqui2 = (array) =>{
  console.log("********* arrays ********* ")
  for(let i=0; i<=50; i++){
      if(array.departamento[i]!==undefined){
          console.log(array.departamento)
          departamentoDatos(array.departamento)
      }
      else
      {
          //console.log("Se terminaron")
          break
      }
  }  
}

const departamentoDatos = (objeto) => {
  console.log(">>>>>>>>>> Datos del departamento >>>>>>>>>> ")
  for(let i=0; i<=50; i++){
      if(objeto[i]!==undefined){

          console.log("Nombre: " + objeto[i].nombre)
          console.log("Capital: " + objeto[i].capital_total)
          puestosss(objeto[i].puestos)
          if(objeto[i].departamentos!==undefined){
              dep(objeto[i].departamentos)

          }else{

          }

      }else{
          console.log("ya no hay departamentos")
          break
      }
  }
}


const dep = (array) => {
  //console.log(">>>>>>>>>> Datos del departamento >>>>>>>>>> ")
  for(let i=0; i<=50; i++){
      if(array[i]!==undefined){
          departamentoDatos(array[i].departamento)
      }else{
          //console.log("yaaaaaaaaaaaaaaaaaaaaa")
          break
      }
  }            
}

const puestosss = (array) => {
  //console.log(">>>>>>>>>> Datos del puesto >>>>>>>>>> ")
  for(let i=0; i<=50; i++){
      if(array[i]!==undefined){
          puestoDatos(array[i].puesto)
      }else{
          console.log("ya no hay puestos")
          break
      }
  }        
}


const puestoDatos = (objeto) => {
  for(let i=0; i<=50; i++){
      if(objeto[i]!==undefined){          
          console.log("Puesto: " + objeto[i].nombre)
          console.log("Puesto salario: " + objeto[i].salario)
          requisitos(objeto[i].requisitos)
          categorias(objeto[i].categorias)
      }else{
          break
      }
  }
}






const requisitos = (array) => {
  //console.log(">>>>>>>>>> Datos del requisito >>>>>>>>>> ")
  for(let i=0; i<=50; i++){
      if(array[i]!==undefined){
          requisitoDatos(array[i].requisito)
      }else{
          console.log("ya no hay requisitos")
          break
      }
  }        
}

const requisitoDatos = (objeto) => {
  //console.log(">>>>>>>>>> Tipos del requisito >>>>>>>>>> ")
  for(let i=0; i<=50; i++){
      if(objeto[i]!==undefined){
          console.log("Requisito nombre: " + objeto[i].nombre)
          console.log("Requisito obligatorio: " + objeto[i].obligatorio)
          console.log("Requisito tamanio: " + objeto[i].tamaño)

          formatos(objeto[i].formatos)
      }else{
          break
      }
  }   
}

const formatos = (array) => {
//console.log(">>>>>>>>>> Datos del requisito >>>>>>>>>> ")
for(let i=0; i<=50; i++){
    if(array[i]!==undefined){
        formatoDatos(array[i].formato)
    }else{
        console.log("ya no hay formatos para este requisito")
        break
    }
}        
}

const formatoDatos = (objeto) => {
//console.log(">>>>>>>>>> Tipos del formato >>>>>>>>>> ")
for(let i=0; i<=50; i++){
    if(objeto[i]!==undefined){
        console.log("Formato nombre: " + objeto[i].nombre)
    }else{
        break
    }
}   
}

const categorias = (array) => {
//console.log(">>>>>>>>>> Datos de las categorias >>>>>>>>>> ")
for(let i=0; i<=50; i++){
    if(array[i]!==undefined){
        categoriaDatos(array[i].categoria)
    }else{
        console.log("ya no hay categorias para este puesto")
        break
    }
}        
}

const categoriaDatos = (objeto) => {
//console.log(">>>>>>>>>> Tipos de categorias >>>>>>>>>> ")
for(let i=0; i<=50; i++){
    if(objeto[i]!==undefined){
        console.log("Categoria nombre: " + objeto[i].nombre)
    }else{
        break
    }
}   
}





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