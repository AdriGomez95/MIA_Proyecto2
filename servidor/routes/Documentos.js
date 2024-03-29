var express = require("express");
var bodyParser = require("body-parser");
var router = express.Router();

const service = require("./connection.js");
const cors = require("cors");
const app = require("../servidor.js");

router.use(cors({ origin: true, optionsSuccessStatus: 200 }));
router.use(bodyParser.json({ limit: "50mb", extended: true }));
router.use(bodyParser.urlencoded({ limit: "50mb", extended: true }));






router.post("/crear_documento", async (req, res) => {
    const doc = req.body.doc;
    //console.log(doc)
    let retorno = false
    
    await service.connect(`
                INSERT INTO DOCUMENTO (ESTADO,LINK,FORMATO,RECHAZOS,NOMBRE,ID_USUARIO)
                VALUES ('pendiente','${doc.link}','${doc.formato}','0','${doc.documentoname}',
                (SELECT u.ID_USUARIO FROM USUARIO u
                WHERE u.NOMBRE = '${doc.nombre}'))
         `).then(/*console.log*/);

         
    res.send(retorno)
  })
  var documentosfiltrados = []
  router.get('/filtra_docsAplicante', async (req,res)=>{
    documentosfiltrados.splice(0,documentosfiltrados.length)
      await service.connect(`                          
                            SELECT d.NOMBRE, u.NOMBRE, d.ESTADO, d.RECHAZOS, d.FORMATO, d.LINK 
                            FROM DOCUMENTO d
                            INNER JOIN USUARIO u ON d.ID_USUARIO = u.ID_USUARIO 
                          `).then(filas=>{
                            filas.data.forEach(element => {
                              documentosfiltrados.push({nombre:element.NOMBRE,aplicante:element.NOMBRE_1,estado:element.ESTADO, rechazos:element.RECHAZOS, formato:element.FORMATO, link:element.LINK})
                                //console.log(element)
                          })
                      })
                      
      res.send(documentosfiltrados)
  })

  router.put("/actualizaDatos_Aplicante", async (req, res) => {
    const doc = req.body.doc;
    //console.log(doc)
    let retorno = false
  
    await service.connect(`
              UPDATE DOCUMENTO p SET p.FORMATO = '${doc.formato}', 
              p.LINK = '${doc.link}'
              WHERE p.ID_USUARIO = (SELECT u.ID_USUARIO FROM USUARIO u WHERE u.NOMBRE = '${doc.nombre}')
              AND p.NOMBRE = '${doc.documentoname}'
        `).then(console.log)
    
    res.send(retorno)
  
  })

  router.put("/actualizaDatos", async (req, res) => {
    const doc = req.body.doc;
    //console.log(doc)
    let retorno = false
  
    await service.connect(`
                UPDATE USUARIO u SET u.ID_DOCUMENTO = 
                (SELECT d.ID_DOCUMENTO FROM DOCUMENTO d 
                INNER JOIN USUARIO u2 ON d.ID_USUARIO = u2.ID_USUARIO 
                WHERE u2.NOMBRE = '${doc.nombre}') 
                WHERE u.NOMBRE = '${doc.nombre}'
        `).then(console.log)
    
    res.send(retorno)
  
  })


//%%%%%%%%%%%% filtra documentos
//################## MANEJO DE DOCUMENTOS ##################
//(aceptado rechazado pendiente)
//var documentos = [{id:1,id_usuario:1,nombre:'CV',estado:'pendiente',motivo:'-',link:'google.com',formato:'PDF',rechazos:0},{id:2,id_usuario:2,nombre:'Antecedentes',estado:'pendiente',motivo:'-',link:'google.com',formato:'JPG',rechazos:0}]
//var id_revision_docs = -1;
var documentos = []
router.get('/documentos', async (req,res)=>{
    documentos.splice(0,documentos.length)
    await service.connect(`                         
    SELECT d.NOMBRE, u.NOMBRE, d.ESTADO, d.RECHAZOS, d.FORMATO, d.LINK 
    FROM DOCUMENTO d
    INNER JOIN USUARIO u ON d.ID_USUARIO = u.ID_USUARIO 
                        `).then(filas=>{
                          filas.data.forEach(element => {
                            documentos.push({nombre:element.NOMBRE,aplicante:element.NOMBRE_1,estado:element.ESTADO,motivo:element.MOTIVO, rechazos:element.RECHAZOS, formato:element.FORMATO, link:element.LINK})
                                //console.log(element)
                        })
                    })
                    
    res.send(documentos)
})



router.put("/modificar_estadoDoc", async (req, res) => {
    const docs = req.body.docs;
    let retorno = false
  
    await service.connect(`
                            UPDATE DOCUMENTO d SET d.ESTADO = 'aceptado' 
                            WHERE d.NOMBRE = '${docs.nombre}'
                        `).then(/*console.log*/)
    
    res.send(retorno)
  
  })
  router.put("/modificar_estadoDocrechazado", async (req, res) => {
      const docs = req.body.docs;
      let retorno = false
      let rechaz = docs.rechazos;
      rechaz = rechaz + 1
      console.log(rechaz)
    
      await service.connect(`
                              UPDATE DOCUMENTO d SET d.ESTADO = 'rechazado', 
                              d.RECHAZOS = '${rechaz}'
                              WHERE d.NOMBRE = '${docs.nombre}'
                          `).then(/*console.log*/)
      
      res.send(retorno)
    
    })





module.exports = router;