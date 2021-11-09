var express = require("express");
var bodyParser = require("body-parser");
var router = express.Router();

const service = require("./connection.js");
const cors = require("cors");
const app = require("../servidor.js");

router.use(cors({ origin: true, optionsSuccessStatus: 200 }));
router.use(bodyParser.json({ limit: "50mb", extended: true }));
router.use(bodyParser.urlencoded({ limit: "50mb", extended: true }));



router.post("/login", async function (req, res, next) {
  const { color, id_prueba } = req.body;

  let response = await service.connect(
    `SELECT * from PRUEBA WHERE COLOR = '${color}' AND ID_PRUEBA='${id_prueba}'`
  );
 
  if (response.status == 400) {
    res.status(400).json({ message: response.message });
  } else {
    if (response.data.length == 0) {
      res.status(400).json({ message: "Credenciales incorrectas" });
    } else {
      res
        .status(200)
        .json({ message: "Credenciales correctas", data: response.data[0] });
    }
  }
});



router.post("/crear_empleado", async (req, res) => {
  const empli = req.body.empleado;
  //console.log(empli)
  let retorno = false
  
  await service.connect(`
              INSERT INTO EMPLEADO (USUARIO,CONTRASENIA,FECHA_INICIO,ROL,ID_ROL,ID_DEPARTAMENTO,ESTADO)
            VALUES('${empli.usuario}','${empli.contrasenia}',TO_DATE('2003/05/03 21:02:44', 'yyyy/mm/dd hh24:mi:ss'),'${empli.rol}',
            (SELECT r.ID_ROL FROM ROL r WHERE r.NOMBRE = 'administrador'), 
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