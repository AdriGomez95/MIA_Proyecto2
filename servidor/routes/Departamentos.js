

var express = require("express");
var bodyParser = require("body-parser");
var router = express.Router();

const service = require("./connection.js");
const cors = require("cors");
const app = require("../servidor.js");

router.use(cors({ origin: true, optionsSuccessStatus: 200 }));
router.use(bodyParser.json({ limit: "50mb", extended: true }));
router.use(bodyParser.urlencoded({ limit: "50mb", extended: true }));




var departamentos = [];

router.get('/departamentos', async (req,res)=>{

    departamentos.splice(0,departamentos.length)
    departamentos.push('...')
    await service.connect(`
                            SELECT nombre FROM DEPARTAMENTO d 
                        `).then(filas=>{
                            filas.data.forEach(element => {
                                departamentos.push(element.NOMBRE)
                                
                            })
                        })
                    
  res.send(departamentos)
})

module.exports = router;