var express = require("express");
var bodyParser = require("body-parser");
var router = express.Router();
const nodemailer = require('nodemailer');

const service = require("./connection.js");
const cors = require("cors");
const app = require("../servidor.js");

router.use(cors({ origin: true, optionsSuccessStatus: 200 }));
router.use(bodyParser.json({ limit: "50mb", extended: true }));
router.use(bodyParser.urlencoded({ limit: "50mb", extended: true }));

process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';//para mandar mensajes



//################## MANEJO DE ROLES DE USUARIO ##################
//(admin, coordinador, reclutador, aplicante, undefined que es guest)
//var usuario_logueado = {user: "Adri", rol: "admin"};
//var usuario_logueado = {user: "Adri", rol: "coordinador"};
//var usuario_logueado = {user: "Adri", rol: "reclutador"};
//var usuario_logueado = {user: "Adri", rol: "aplicante"};
var usuario_logueado;

router.get('/usuario_logueado', async (req,res)=>{
  

  res.send(usuario_logueado)
})

router.get('/limpiar_logueo', async (req,res)=>{
  usuario_logueado = undefined;
  res.send(usuario_logueado)

})



router.post('/login', async (req, res) => {
  //usuario_logueado = undefined;
  const usu = req.body.usuario;
  //console.log("entro")
  //console.log(usu)
  let retorno = false

  if(usu.rol == "aplicante"){
    //console.log("entro a aplicante")
    await service.connect(`
            SELECT u.NOMBRE, u.CONTRASENIA FROM USUARIO u WHERE u.NOMBRE = '${usu.usuario}' AND u.CONTRASENIA ='${usu.contrasenia}'
    `).then(/*console.log*/);
  
  }else{
    //console.log("entro a empleado")
    await service.connect(`
                        SELECT e.USUARIO, e.CONTRASENIA FROM EMPLEADO e WHERE e.USUARIO = '${usu.usuario}' AND e.CONTRASENIA ='${usu.contrasenia}
                      `).then(/*console.log*/);
  
  }


  usuario_logueado = {user:usu.usuario, rol:usu.rol};
  //console.log("salio")
  //console.log(usuario_logueado)

//var usuario_logueado = {user: "Adri", rol: "admin"};
  res.send(retorno)
})

 


//#################### estos son para la planilla del coordinador
var planilla = []
router.get('/planicoordinador', async (req,res)=>{
  planilla.splice(0,planilla.length)
    await service.connect(`                          
                          SELECT u.NOMBRE, u.APELLIDO, u.DPI, p2.NOMBRE, p2.SALARIO, p.ESTADOCOO 
                          FROM PLANILLA p 
                          INNER JOIN USUARIO u ON p.ID_USUARIO = u.ID_USUARIO 
                          INNER JOIN PUESTO p2 ON p.ID_PUESTO = p2.ID_PUESTO 
                          WHERE p.ESTADO = 'aceptado'
                        `).then(filas=>{
                          filas.data.forEach(element => {
                            planilla.push({nombre:element.NOMBRE,apellido:element.APELLIDO,dpi:element.DPI, puesto:element.NOMBRE_1, salario:element.SALARIO,estado:element.ESTADOCOO})
                            //console.log(element)
                        })
                    })
                    
  res.send(planilla)
})

router.put('/modificar_planicoor', async (req, res) => {
  const apli = req.body.aplic;
  let retorno = false

  await service.connect(`
          UPDATE PLANILLA p SET p.ESTADOCOO = 'aceptado' 
        WHERE p.ID_USUARIO = (SELECT u.ID_USUARIO FROM USUARIO u WHERE u.NOMBRE = '${apli.nombre}')
     `).then(/*console.log*/)
  
  res.send(retorno)

})

router.put('/modificar_planicoor2', async (req, res) => {
  const apli = req.body.aplic;
  let retorno = false

  await service.connect(`
          UPDATE PLANILLA p SET p.ESTADOCOO = 'rechazado' 
        WHERE p.ID_USUARIO = (SELECT u.ID_USUARIO FROM USUARIO u WHERE u.NOMBRE = '${apli.nombre}')
     `).then(/*console.log*/)
  
  res.send(retorno)

})

router.put('/modificar_planicoor3', async (req, res) => {
  const apli = req.body.aplic;
  let retorno = false

  await service.connect(`
          UPDATE PLANILLA p SET p.ESTADOCOO = 'eliminado' 
        WHERE p.ID_USUARIO = (SELECT u.ID_USUARIO FROM USUARIO u WHERE u.NOMBRE = '${apli.nombre}')
     `).then(/*console.log*/)
  
  res.send(retorno)

})









//expedientes+++++++++++++++++++++++++++++++++++++++++++++++
var expi = []
router.get('/expedientes', async (req,res)=>{
  expi.splice(0,expi.length)
    await service.connect(`
                          SELECT u.NOMBRE, u.APELLIDO, u.CONTRASENIA, u.DPI, u.CORREO, u.DIRECCION, u.TELEFONO
                          FROM USUARIO u
                        `).then(filas=>{
                          filas.data.forEach(element => {
                            expi.push({nombre:element.NOMBRE,apellido:element.APELLIDO,pass:element.CONTRASENIA,dpi:element.DPI,correo:element.CORREO, direccion:element.DIRECCION,telefono:element.TELEFONO})
                              //console.log(element)
                        })
                    })
                    
    res.send(expi)
})

router.put("/modificar_apli", async (req, res) => {
  const empli = req.body.empleado;
  let retorno = false

  await service.connect(`
          UPDATE EMPLEADO e SET e.CONTRASENIA = '${empli.contrasenia}', e.ROL = '${empli.rol}' WHERE e.USUARIO = '${empli.usuario}'
      `).then(console.log)
  
  res.send(retorno)

})

//%%%%%%%%%%%% filtra aplicantes
//var aplicantes = [{id:1,nombre:'aplicante 1',apellido:'aplicante 1',dpi:1,puesto:'puesto',salario:'Q5000',estado:'aceptado'},{id:2,nombre:'aplicante 2',apellido:'aplicante 2',dpi:2,puesto:'puesto 2',salario:'Q8000',estado:'pendiente'}]
var aplicantes = []
router.get('/aplicantes', async (req,res)=>{
  aplicantes.splice(0,aplicantes.length)
    await service.connect(`
                          SELECT u.NOMBRE, u.APELLIDO, u.CONTRASENIA, u.DPI, p2.NOMBRE, p2.SALARIO, p.ESTADO FROM PLANILLA p 
                          INNER JOIN PUESTO p2 ON p.ID_PUESTO = p2.ID_PUESTO 
                          INNER JOIN USUARIO u ON p.ID_USUARIO = u.ID_USUARIO 
                        `).then(filas=>{
                          filas.data.forEach(element => {
                            aplicantes.push({nombre:element.NOMBRE,apellido:element.APELLIDO,pass:element.CONTRASENIA,dpi:element.DPI, puesto:element.NOMBRE_1, salario:element.SALARIO,estado:element.ESTADO})
                              //console.log(element)
                        })
                    })
                    
    res.send(aplicantes)
})


router.put('/modificar_planillaAplicante', async (req, res) => {
  const apli = req.body.aplic;
  let retorno = false

  await service.connect(`
          UPDATE PLANILLA p SET p.ESTADO = 'aceptado' 
        WHERE p.ID_USUARIO = (SELECT u.ID_USUARIO FROM USUARIO u WHERE u.NOMBRE = '${apli.nombre}')
     `).then(/*console.log*/)
  
  res.send(retorno)

})

router.put('/modificar_planillaAplicante2', async (req, res) => {
  const apli = req.body.aplic;
  let retorno = false

  await service.connect(`
          UPDATE PLANILLA p SET p.ESTADO = 'eliminado' 
        WHERE p.ID_USUARIO = (SELECT u.ID_USUARIO FROM USUARIO u WHERE u.NOMBRE = '${apli.nombre}')
     `).then(/*console.log*/)
  
  res.send(retorno)

})




//PARA RECLUTADOR ACEPTAR EXPEDIENTE
router.post("/mensaje_aceptaExpediente", async(req,res)=>{
  const apli = req.body.aplic;
  let usu = apli.usuario;
  let apellido = apli.apellido;
  let pass = apli.pass;
  let dpi = apli.dpi;
  let correo = apli.correo;
  let direccion = apli.direccion;
  let telefono = apli.telefono;

  let retorno = false;
  let transporter = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
      user: "bc686dc6a8d146", // generated ethereal user
      pass: "9129a1654d4498" // generated ethereal password
    },
  });

  // send mail with defined transport object
   let info = await transporter.sendMail({
    from: '"mensaje prueba!!" <foo@example.com>', // sender address
    to: "bar@example.com", // list of receivers
    subject: "Expediente aceptado", // Subject line
    text: "Felicidades, su expediente ha sido aceptado: \n"
    +"nombres: "+usu+"\n"
    +"apellidos: "+apellido+"\n"
    +"contrasenia: "+pass+"\n"
    +"DPI: "+dpi+"\n"
    +"correo: "+correo+"\n"
    +"direccion: "+direccion+"\n"
    +"telefono: "+telefono+"\n", // plain text body
  });
  res.send(retorno)
})
//PARA RECLUTADOR RECHAZAR EXPEDIENTE
router.post("/mensaje_rechazaExpediente", async(req,res)=>{
  const apli = req.body.aplic;
  let usu = apli.usuario;
  let apellido = apli.apellido;
  let pass = apli.pass;
  let dpi = apli.dpi;
  let correo = apli.correo;
  let direccion = apli.direccion;
  let telefono = apli.telefono;

  let retorno = false;
  let transporter = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
      user: "bc686dc6a8d146", // generated ethereal user
      pass: "9129a1654d4498" // generated ethereal password
    },
  });

  // send mail with defined transport object
   let info = await transporter.sendMail({
    from: '"mensaje prueba!!" <foo@example.com>', // sender address
    to: "bar@example.com", // list of receivers
    subject: "Expediente rechazado", // Subject line
    text: "Su expediente ha sido rechazado, por favor, corregir: \n"
    +"nombres: "+usu+"\n"
    +"apellidos: "+apellido+"\n"
    +"contrasenia: "+pass+"\n"
    +"DPI: "+dpi+"\n"
    +"correo: "+correo+"\n"
    +"direccion: "+direccion+"\n"
    +"telefono: "+telefono+"\n", // plain text body
  });
  res.send(retorno)
})

//APLICANTE ACEPTADO PARA LOGUEO
router.post("/envia_emailAplicante", async(req,res)=>{
  const apli = req.body.aplic;
  let usu = apli.usuario;
  let pass = apli.contrasenia;

  let retorno = false;
  let transporter = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
      user: "bc686dc6a8d146", // generated ethereal user
      pass: "9129a1654d4498" // generated ethereal password
    },
  });

  // send mail with defined transport object
   let info = await transporter.sendMail({
    from: '"mensaje prueba!!" <foo@example.com>', // sender address
    to: "bar@example.com", // list of receivers
    subject: "Credenciales de aplicante", // Subject line
    text: "¡Bienvenido! use sus credenciales para poder loguearse: \n"
    +" usuario: "+usu+"\n"
    +" contrasenia: "+pass, // plain text body
  });
  res.send(retorno)
})

//COORDINADOR ACEPTA A UN APLICANTE PARA TRABAJAR
router.post("/envia_emailCoordinador", async(req,res)=>{
  const apli = req.body.aplic;
  let usu = apli.usuario;
  let puesto = apli.puesto;
  let salario = apli.salario;

  let retorno = false;
  let transporter = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
      user: "bc686dc6a8d146", // generated ethereal user
      pass: "9129a1654d4498" // generated ethereal password
    },
  });

  // send mail with defined transport object
   let info = await transporter.sendMail({
    from: '"mensaje prueba!!" <foo@example.com>', // sender address
    to: "bar@example.com", // list of receivers
    subject: "Contratado para un puesto", // Subject line
    text: "¡Felicidades, ha sido aceptado para el siguiente puesto! \n"
    +" usuario: "+usu+" \n"
    +" puesto: "+puesto+" \n"
    +" salario: "+salario, // plain text body
  });
  res.send(retorno)
})
/*
router.post("/envia_email", async(req,res)=>{

  console.log("entro a mensajes")
  let retorno = false;
  let transporter = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
      user: "bc686dc6a8d146", // generated ethereal user
      pass: "9129a1654d4498" // generated ethereal password
    },
  });

  // send mail with defined transport object
   let info = await transporter.sendMail({
    from: '"mensaje prueba!!" <foo@example.com>', // sender address
    to: "bar@example.com", // list of receivers
    subject: "enviado desde la aplicacion", // Subject line
    text: "adios mundo", // plain text body
  });
  console.log("Message sent: %s", info.messageId);
  res.send(retorno)
})
 */


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
                INSERT INTO PLANILLA (ESTADO, ID_PUESTO, ID_USUARIO, ESTADOCOO)
                VALUES ('pendiente',(SELECT p.ID_PUESTO FROM PUESTO p WHERE p.NOMBRE = '${apli.puesto}'),
                (SELECT u.ID_USUARIO FROM USUARIO u WHERE u.NOMBRE = '${apli.nombre}'),'pendiente')
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








//################## MANEJO DE MENSAJES ##################
let usuarioparamensaje;
router.post("/crear_mensaje", async (req, res) => {
  const msj = req.body.mensaje;
  //console.log(empli)
  let retorno = false
  usuarioparamensaje = msj.usuario;
  
  await service.connect(`  
        INSERT INTO MENSAJE (TEXTO,FECHA,ID_USUARIO,ID_EMPLEADO)
        VALUES ('${msj.mensaje}',TO_DATE('2003/05/03 21:02:44', 'yyyy/mm/dd hh24:mi:ss'),
        (SELECT u.ID_USUARIO FROM USUARIO u WHERE u.NOMBRE = '${msj.usuario}'),
        (SELECT e.ID_EMPLEADO FROM EMPLEADO e
        INNER JOIN USUARIO u2 ON u2.ID_EMPLEADO = e.ID_EMPLEADO
        WHERE u2.NOMBRE = '${msj.usuario}'))  
  `).then(/*console.log*/);
  res.send(retorno)
})

var ddd = []
router.get('/mensajines', async (req,res)=>{
  ddd.splice(0,ddd.length)
    await service.connect(`
                            SELECT m.TEXTO,m.FECHA  FROM MENSAJE m 
                            INNER JOIN USUARIO u ON u.ID_USUARIO = m.ID_USUARIO 
                            INNER JOIN EMPLEADO e ON m.ID_EMPLEADO = e.ID_EMPLEADO
                            WHERE u.NOMBRE = '${usuarioparamensaje}'
                        `).then(filas=>{
                          filas.data.forEach(element => {
                            ddd.push({texto:element.TEXTO,fecha:element.FECHA})
                              //console.log(element)
                        })
                    })
                    
    res.send(ddd)
})


router.post("/crear_mensaje2", async (req, res) => {
  const msj = req.body.mensaje;
  //console.log(empli)
  let retorno = false
  usuarioparamensaje = msj.usuario;
  
  await service.connect(`  
        INSERT INTO MENSAJE (TEXTO,FECHA,ID_USUARIO,ID_EMPLEADO)
        VALUES ('${msj.mensaje}',TO_DATE('2003/05/03 21:02:44', 'yyyy/mm/dd hh24:mi:ss'),
        (SELECT u.ID_USUARIO FROM USUARIO u WHERE u.NOMBRE = '${msj.usuario}'),
        (SELECT e.ID_EMPLEADO FROM EMPLEADO e
        INNER JOIN USUARIO u2 ON u2.ID_EMPLEADO = e.ID_EMPLEADO
        WHERE u2.NOMBRE = '${msj.usuario}'))  
  `).then(/*console.log*/);
  res.send(retorno)
})







/*
const io = require("socket.io")(service, 
  {  
    cors: {    origin: "http://localhost:3000",  
  }
});

io.on("connection", (socket) => {
  //console.log(`texto enviado :o ` );
  
  socket.on("probando", ()=>{
    console.log("cambio :o")
  })
});
*/




module.exports = router;