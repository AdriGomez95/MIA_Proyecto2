

var express = require("express");
var bodyParser = require("body-parser");
var router = express.Router();

const service = require("./connection.js");
const cors = require("cors");
const app = require("../servidor.js");

router.use(cors({ origin: true, optionsSuccessStatus: 200 }));
router.use(bodyParser.json({ limit: "50mb", extended: true }));
router.use(bodyParser.urlencoded({ limit: "50mb", extended: true }));






//var puestos = [{puesto:'puesto 1', salario:'Q7000', categoria:'categoria 1', departamento:'departamento 1'},{puesto:'puesto 2', salario:'Q7000', categoria:'categoria 2', departamento:'departamento 2'},{puesto:'puesto 3', salario:'Q7000', categoria:'categoria 3', departamento:'departamento 3'}]
var puestos = []
router.get('/listado_puestos', async (req,res)=>{
    puestos.splice(0,puestos.length)
    await service.connect(`SELECT p.NOMBRE, p.SALARIO, c.NOMBRE, d.NOMBRE FROM PUESTO p 
                        INNER JOIN PUESTO_CATEGORIA pc ON p.ID_PUESTO = pc.ID_PUESTO 
                        INNER JOIN  CATEGORIA c ON pc.ID_CATEGORIA = c.ID_CATEGORIA 
                        INNER JOIN PUESTO_DEPARTAMENTO pd ON p.ID_PUESTO  = pd.ID_PUESTO 
                        INNER JOIN DEPARTAMENTO d ON pd.ID_DEPARTAMENTO = d.ID_DEPARTAMENTO 
                    `).then(filas=>{
                        filas.data.forEach(element => {
                            puestos.push({puesto:element.NOMBRE, salario:element.SALARIO, categoria:element.NOMBRE_1, departamento:element.NOMBRE_2})
                            
                        })
                    })
                    
                        
    res.send(puestos)
})


var puestosreporte1 = []
router.get('/listado_puestosreporte1', async (req,res)=>{
    puestosreporte1.splice(0,puestosreporte1.length)
    await service.connect(`
    SELECT p.NOMBRE, p.SALARIO, d.NOMBRE, d.CAPITAL_TOTAL FROM PUESTO p 
    INNER JOIN PUESTO_DEPARTAMENTO pd ON pd.ID_PUESTO = p.ID_PUESTO 
    INNER JOIN DEPARTAMENTO d ON d.ID_DEPARTAMENTO = pd.ID_DEPARTAMENTO
                    `).then(filas=>{
                        filas.data.forEach(element => {
                            puestosreporte1.push({puesto:element.NOMBRE, salario:element.SALARIO, departamento:element.NOMBRE_1, capital:element.CAPITAL_TOTAL})
                            
                        })
                    })
                    
                        
    res.send(puestosreporte1)
})
var puestosreporte2 = []
router.get('/listado_puestosreporte2', async (req,res)=>{
    puestosreporte2.splice(0,puestosreporte2.length)
    await service.connect(`
                        SELECT u.NOMBRE, p.ESTADOCOO, p2.NOMBRE, d.NOMBRE FROM PLANILLA p 
                        INNER JOIN PUESTO p2 ON p.ID_PUESTO = p2.ID_PUESTO 
                        INNER JOIN PUESTO_DEPARTAMENTO pd ON pd.ID_PUESTO = p2.ID_PUESTO 
                        INNER JOIN DEPARTAMENTO d ON d.ID_DEPARTAMENTO = pd.ID_DEPARTAMENTO 
                        INNER JOIN USUARIO u ON u.ID_USUARIO = p.ID_USUARIO 
                        WHERE p.ESTADOCOO = 'aceptado'
                    `).then(filas=>{
                        filas.data.forEach(element => {
                            puestosreporte2.push({aplicante:element.NOMBRE, estado:element.ESTADOCOO, puesto:element.NOMBRE_1, departamento:element.NOMBRE_2})
                            
                        })
                    })
                    
                        
    res.send(puestosreporte2)
})
var puestosreporte4 = []
router.get('/listado_puestosreporte4', async (req,res)=>{
    puestosreporte4.splice(0,puestosreporte4.length)
    await service.connect(`
    SELECT d.NOMBRE, u.NOMBRE, u.APELLIDO FROM PLANILLA p 
INNER JOIN PUESTO p2 ON p2.ID_PUESTO = p.ID_PUESTO 
INNER JOIN PUESTO_DEPARTAMENTO pd ON pd.ID_PUESTO = p.ID_PUESTO 
INNER JOIN DEPARTAMENTO d ON d.ID_DEPARTAMENTO = pd.ID_DEPARTAMENTO 
INNER JOIN USUARIO u ON u.ID_USUARIO = p.ID_USUARIO
                    `).then(filas=>{
                        filas.data.forEach(element => {
                            puestosreporte4.push({departamento:element.NOMBRE, nombre:element.NOMBRE_1, apellido:element.APELLIDO})
                            
                        })
                    })
                    
                        
    res.send(puestosreporte4)
})
var puestosreporte5 = []
router.get('/listado_puestosreporte5', async (req,res)=>{
    puestosreporte5.splice(0,puestosreporte5.length)
    await service.connect(`
    SELECT d.NOMBRE, u.NOMBRE, d.ESTADO, d.RECHAZOS FROM DOCUMENTO d 
    INNER JOIN USUARIO u ON u.ID_USUARIO = d.ID_USUARIO 
    WHERE d.ESTADO = 'rechazado'
                    `).then(filas=>{
                        filas.data.forEach(element => {
                            puestosreporte5.push({documento:element.NOMBRE, aplicante:element.NOMBRE_1, estado:element.ESTADO, rechazos:element.RECHAZOS})
                            
                        })
                    })
                    
                        
    res.send(puestosreporte5)
})


/*

DELETE FROM DEPARTAMENTO d; 
DELETE FROM PUESTO p ;
DELETE FROM REQUISITOS r; 
DELETE FROM FORMATO f ;
DELETE FROM CATEGORIA c ;
DELETE FROM EMPLEADO e ;

DELETE FROM FORMATO_REQUISITOS fr; 
DELETE FROM PUESTO_CATEGORIA pc ;
DELETE FROM PUESTO_DEPARTAMENTO pd; 
DELETE FROM PUESTO_REQUISITOS pr; 



INSERT INTO EMPLEADO (USUARIO,CONTRASENIA,FECHA_INICIO,ROL,ID_ROL,ID_DEPARTAMENTO,ESTADO)
VALUES('aa','aa',TO_DATE('2003/05/03 21:02:44', 'yyyy/mm/dd hh24:mi:ss'),'administrador',
(SELECT r.ID_ROL FROM ROL r WHERE r.NOMBRE = 'administrador'), 
(SELECT d.ID_DEPARTAMENTO FROM DEPARTAMENTO d WHERE d.NOMBRE = 'ÁREA DE DESARROLLO'),'activo');

SELECT e.USUARIO, e.CONTRASENIA, e.FECHA_INICIO,
e.FECHA_FIN, e.ROL, e.ID_DEPARTAMENTO, e.ESTADO FROM EMPLEADO e ;

DELETE FROM EMPLEADO e ;

INSERT INTO ROL  (NOMBRE) VALUES ('Aplicante');


UPDATE EMPLEADO e SET e.USUARIO = 'adios', e.CONTRASENIA = '2321' WHERE USUARIO = 'hola';

UPDATE EMPLEADO e SET e.FECHA_FIN = TO_DATE('2003/05/03 21:02:44', 'yyyy/mm/dd hh24:mi:ss') WHERE e.USUARIO = 'aaaaaa';



INSERT INTO CALIFICACION_PUESTOS (PUESTO, CALIFICACION)
VALUES('aa','5') ;

 SELECT * FROM CALIFICACION_PUESTOS ;


*/

//################## PARA EL MANEJO DE CALIFICACION DE PUESTOS EN GUEST #########
var puuestooscaal = [];
router.get('/puestos_calificados', async (req,res)=>{

    puuestooscaal.splice(0,puuestooscaal.length)
    await service.connect(`
                            SELECT * FROM CALIFICACION_PUESTOS  
                        `).then(filas=>{
                            filas.data.forEach(element => {
                                //console.log(element)
                                puuestooscaal.push({puesto:element.PUESTO, calificacion:element.CALIFICACION})
                                
                            })
                        })
                
  res.send(puuestooscaal)
})

var pcc = [];
router.get('/puestitoscalif', async (req,res)=>{

    pcc.splice(0,pcc.length)
    pcc.push('...')
    await service.connect(`
                            SELECT NOMBRE FROM PUESTO
                        `).then(filas=>{
                            filas.data.forEach(element => {
                                //console.log(element)
                                pcc.push(element.NOMBRE)
                                
                            })
                        })
                    
  res.send(pcc)
})

router.post("/cp_cp", async (req, res) => {
    const puest = req.body.puestito;
    let retorno = false
    //console.log(puest)
    
    await service.connect(`
                INSERT INTO CALIFICACION_PUESTOS (PUESTO, CALIFICACION)
                VALUES('${puest.puesto}','${puest.calificacion}') 
                `).then(/*console.log*/);
    res.send(retorno)
  })


  
  


module.exports = router;