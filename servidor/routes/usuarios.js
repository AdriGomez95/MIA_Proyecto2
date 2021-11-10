var express = require("express");
var bodyParser = require("body-parser");
var router = express.Router();

const service = require("./connection.js");
const cors = require("cors");
const app = require("../servidor.js");

router.use(cors({ origin: true, optionsSuccessStatus: 200 }));
router.use(bodyParser.json({ limit: "50mb", extended: true }));
router.use(bodyParser.urlencoded({ limit: "50mb", extended: true }));



//################## MANEJO DE ROLES DE USUARIO ##################
//(admin, coordinador, reclutador, aplicante, undefined que es guest)
//var usuario_logueado = {user: "Adri", rol: "admin"};
//var usuario_logueado = {user: "Adri", rol: "coordinador"};
var usuario_logueado = {user: "Adri", rol: "reclutador"};
//var usuario_logueado = {user: "Adri", rol: "aplicante"};
//var usuario_logueado;

router.get('/usuario_logueado', (req,res)=>{
  res.send(usuario_logueado)
})

router.get('/limpiar_logueo', (req,res)=>{
  usuario_logueado = undefined;
  res.send(usuario_logueado)

})



router.post("/login", async (req, res) => {
  const usu = req.body.usuario;
  console.log(usu)
  let retorno = false

  await service.connect(`
          SELECT u.NOMBRE, u.CONTRASENIA FROM USUARIO u WHERE u.NOMBRE = '${usu.usuario}' AND u.CONTRASENIA ='${usu.contrasenia}'
  `).then(/*console.log*/);

  usuario_logueado = {user:usu.usuario, rol:'admin'};

//var usuario_logueado = {user: "Adri", rol: "admin"};
  res.send(retorno)
})









//%%%%%%%%%%%% filtra aplicantes
//var aplicantes = [{id:1,nombre:'aplicante 1',apellido:'aplicante 1',dpi:1,puesto:'puesto',salario:'Q5000',estado:'aceptado'},{id:2,nombre:'aplicante 2',apellido:'aplicante 2',dpi:2,puesto:'puesto 2',salario:'Q8000',estado:'pendiente'}]
var aplicantes = []
router.get('/aplicantes', async (req,res)=>{
  aplicantes.splice(0,aplicantes.length)
    await service.connect(`
                          SELECT u.NOMBRE, u.APELLIDO, u.DPI, p2.NOMBRE, p2.SALARIO, p.ESTADO FROM PLANILLA p 
                          INNER JOIN PUESTO p2 ON p.ID_PUESTO = p2.ID_PUESTO 
                          INNER JOIN USUARIO u ON p.ID_USUARIO = u.ID_USUARIO 
                        `).then(filas=>{
                          filas.data.forEach(element => {
                            aplicantes.push({nombre:element.NOMBRE,apellido:element.APELLIDO,dpi:element.DPI, puesto:element.NOMBRE_1, salario:element.SALARIO,estado:element.ESTADO})
                              //console.log(element)
                        })
                    })
                    
    res.send(aplicantes)
})


router.put("/modificar_planillaAplicante", async (req, res) => {
  const apli = req.body.aplic;
  let retorno = false

  await service.connect(`
          UPDATE PLANILLA p SET p.ESTADO = 'aceptado' 
        WHERE p.ID_USUARIO = (SELECT u.ID_USUARIO FROM USUARIO u WHERE u.NOMBRE = '${apli.nombre}')
     `).then(/*console.log*/)
  
  res.send(retorno)

})

router.put("/modificar_planillaAplicante2", async (req, res) => {
  const apli = req.body.aplic;
  let retorno = false

  await service.connect(`
          UPDATE PLANILLA p SET p.ESTADO = 'eliminado' 
        WHERE p.ID_USUARIO = (SELECT u.ID_USUARIO FROM USUARIO u WHERE u.NOMBRE = '${apli.nombre}')
     `).then(/*console.log*/)
  
  res.send(retorno)

})



//############################ TODO LO DE USUARIOS/APLICANTES ###########################

router.post("/crear_aplicante", async (req, res) => {
  const apli = req.body.aplicante;
  //console.log(empli)
  let retorno = false
  let contra = parseInt(Math.random() * (100 - 1) + 1)
  
  //para la tabla usuario
  await service.connect(`
            INSERT INTO USUARIO (DPI,CONTRASENIA, NOMBRE ,APELLIDO ,CORREO,DIRECCION,TELEFONO,NUEVOLOG,ID_ROL,ID_EMPLEADO)
            VALUES('${apli.dpi}','${contra}','${apli.nombre}','${apli.apellido}','${apli.correo}','${apli.direccion}', '${apli.telefono}','1',
            (SELECT r.ID_ROL FROM ROL r WHERE r.NOMBRE = 'aplicante'),
            (SELECT e.ID_EMPLEADO FROM EMPLEADO e
            INNER JOIN DEPARTAMENTO d ON e.ID_DEPARTAMENTO = d.ID_DEPARTAMENTO 
            INNER JOIN PUESTO_DEPARTAMENTO pd ON d.ID_DEPARTAMENTO = pd.ID_DEPARTAMENTO 
            INNER JOIN PUESTO p ON pd.ID_PUESTO = p.ID_PUESTO
            WHERE p.NOMBRE = '${apli.puesto}'))
      `).then(/*console.log*/);


  //para la tabla planilla
  await service.connect(`
                INSERT INTO PLANILLA (ESTADO, ID_PUESTO, ID_USUARIO)
                VALUES ('pendiente',(SELECT p.ID_PUESTO FROM PUESTO p WHERE p.NOMBRE = '${apli.puesto}'),
                (SELECT u.ID_USUARIO FROM USUARIO u WHERE u.NOMBRE = '${apli.nombre}'))
      `).then(/*console.log*/);


  res.send(retorno)
})














//############################ TODO LO DE EMPLEADOS ###########################


router.post("/crear_empleado", async (req, res) => {
  const empli = req.body.empleado;
  //console.log(empli)
  let retorno = false
  
  await service.connect(`
              INSERT INTO EMPLEADO (USUARIO,CONTRASENIA,FECHA_INICIO,ROL,ID_ROL,ID_DEPARTAMENTO,ESTADO)
            VALUES('${empli.usuario}','${empli.contrasenia}',TO_DATE('2003/05/03 21:02:44', 'yyyy/mm/dd hh24:mi:ss'),'${empli.rol}',
            (SELECT r.ID_ROL FROM ROL r WHERE r.NOMBRE = '${empli.rol}'), 
            (SELECT d.ID_DEPARTAMENTO FROM DEPARTAMENTO d WHERE d.NOMBRE = '${empli.departamento}'),'activo')
      `).then(/*console.log*/);
  res.send(retorno)
})




router.put("/modificar_empleado", async (req, res) => {
  const empli = req.body.empleado;
  let retorno = false

  await service.connect(`
          UPDATE EMPLEADO e SET e.CONTRASENIA = '${empli.contrasenia}', e.ROL = '${empli.rol}' WHERE e.USUARIO = '${empli.usuario}'
      `).then(console.log)
  
  res.send(retorno)

})



router.put("/eliminar_empleado", async (req, res) => {
  const empli = req.body.empleado;
  let retorno = false

  await service.connect(`
          UPDATE EMPLEADO e SET e.ESTADO = 'inactivo', e.FECHA_FIN = TO_DATE('2003/05/03 21:02:44', 'yyyy/mm/dd hh24:mi:ss') 
          WHERE e.USUARIO = '${empli.usuario}'
      `).then(console.log)
  
  res.send(retorno)

})





//################## MANEJO DE EMPLEADOS ##################
//var empleados = [{usuario:'Adri', password:'123', fecha_inicio:'29/10/2021', fecha_fin:'-', rol:'admin', departamento:'Logistica'},{usuario:'hhhhh', password:'hhh', fecha_inicio:'29/10/2021', fecha_fin:'-', rol:'hhhh', departamento:'hhhh'}]
var empleadosarr = []
router.get('/listado_empleados', async (req,res)=>{

  empleadosarr.splice(0,empleadosarr.length)
  await service.connect(`
  SELECT e.USUARIO, e.CONTRASENIA, e.FECHA_INICIO, e.FECHA_FIN, e.ESTADO, e.ROL, e.ID_DEPARTAMENTO FROM EMPLEADO e
                      `).then(filas=>{
                          filas.data.forEach(element => {
                            empleadosarr.push({usuario:element.USUARIO,password:element.CONTRASENIA,fecha_inicio:element.FECHA_INICIO,fecha_fin:element.FECHA_FIN,estado:element.ESTADO,rol:element.ROL,departamento:element.ID_DEPARTAMENTO})
                              
                          })
                      })
                  
  res.send(empleadosarr)
})



module.exports = router;