var express = require("express");
var bodyParser = require("body-parser");
var router = express.Router();

const service = require("./connection.js");
const cors = require("cors");
const app = require("../servidor.js");

router.use(cors({ origin: true, optionsSuccessStatus: 200 }));
router.use(bodyParser.json({ limit: "50mb", extended: true }));
router.use(bodyParser.urlencoded({ limit: "50mb", extended: true }));


//################## MANEJO DE CARGA MASIVA ##################
router.use(express.urlencoded({extended:true}))
router.use(express.json())


/*

DELETE FROM DEPARTAMENTO d 
DELETE FROM PUESTO p 
DELETE FROM REQUISITOS r 
DELETE FROM FORMATO f 
DELETE FROM CATEGORIA c 

DELETE FROM FORMATO_REQUISITOS fr 
DELETE FROM PUESTO_CATEGORIA pc 
DELETE FROM PUESTO_DEPARTAMENTO pd 
DELETE FROM PUESTO_REQUISITOS pr 

*/



var formatosrepetidos = [];
var categoriasrepetidos = [];
var requisitosrepetidos = [];
var formato_requisito_repetidos = [];




    router.post('/CMS', (req,res)=>{
        const data = req.body.datosDeCarga
        console.log("hola :)")
        //console.log(data)
        aqui(data)
        console.log("adios :)")
        //console.log(formato_requisito_repetidos)
    })
  
  

    const aqui = (objeto)=>{
        //console.log("********* objetos ********* ")
        aqui2(objeto.departamentos)
    }
  
    const aqui2 = (array) =>{
        //console.log("********* arrays ********* ")
        for(let i=0; i<=50; i++){
            if(array.departamento[i]!==undefined){
                //console.log(array.departamento)
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
        //console.log(">>>>>>>>>> Datos del departamento >>>>>>>>>> ")
        for(let i=0; i<=50; i++){
            if(objeto[i]!==undefined){
    
                //console.log("Nombre: " + objeto[i].nombre)
                //console.log("Capital: " + objeto[i].capital_total)

                let nombre_dep = objeto[i].nombre
                let capital_dep = objeto[i].capital_total
                service.connect(`INSERT INTO DEPARTAMENTO (NOMBRE, CAPITAL_TOTAL) VALUES('${nombre_dep}','${capital_dep}')`)
                
                puestosss(objeto[i].puestos,nombre_dep)
                if(objeto[i].departamentos!==undefined){
                    dep(objeto[i].departamentos)
    
                }else{
    
                }
                
            }else{
                //console.log("ya no hay departamentos")
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

  
    const puestosss = (array,nombre_dep) => {
        //console.log(">>>>>>>>>> Datos del puesto >>>>>>>>>> ")
        for(let i=0; i<=50; i++){
            if(array[i]!==undefined){
                puestoDatos(array[i].puesto,nombre_dep)
            }else{
                //console.log("ya no hay puestos")
                break
            }
        }        
    }
  
    
    const puestoDatos = (objeto,nombre_dep) => {
        for(let i=0; i<=50; i++){
            if(objeto[i]!==undefined){          
                //console.log("Puesto: " + objeto[i].nombre)
                //console.log("Puesto salario: " + objeto[i].salario)

                let nombre_puesto = objeto[i].nombre
                let salario_puesto = objeto[i].salario
                service.connect(`INSERT INTO PUESTO (NOMBRE, SALARIO) VALUES('${nombre_puesto}','${salario_puesto}')`)

                setTimeout(()=> service.connect(`INSERT INTO PUESTO_DEPARTAMENTO (ID_PUESTO, ID_DEPARTAMENTO) 
                                                VALUES ((SELECT ID_PUESTO FROM PUESTO p WHERE p.NOMBRE = '${nombre_puesto}'),
                                                (SELECT ID_DEPARTAMENTO FROM DEPARTAMENTO d WHERE d.NOMBRE = '${nombre_dep}'))`
                                            ),3000);

                requisitos(objeto[i].requisitos,nombre_puesto)
                categorias(objeto[i].categorias,nombre_puesto)
            }else{
                break
            }
        }
    }
  
  
  
  
  
  
    const requisitos = (array,nombre_puesto) => {
        //console.log(">>>>>>>>>> Datos del requisito >>>>>>>>>> ")
        for(let i=0; i<=50; i++){
            if(array[i]!==undefined){
                requisitoDatos(array[i].requisito,nombre_puesto)
            }else{
                //console.log("ya no hay requisitos")
                break
            }
        }        
    }
  
    const requisitoDatos = (objeto,nombre_puesto) => {
        //console.log(">>>>>>>>>> Tipos del requisito >>>>>>>>>> ")
        for(let i=0; i<=50; i++){
            if(objeto[i]!==undefined){
                //console.log("Requisito nombre: " + objeto[i].nombre)
                //console.log("Requisito obligatorio: " + objeto[i].obligatorio)
                //console.log("Requisito tamanio: " + objeto[i].tamaño)
    

                let nombre_requisito = objeto[i].nombre
                let obligatorio_requisito = objeto[i].obligatorio
                let tamanio_requisito = objeto[i].tamaño
    
                let form = requisitosrepetidos.find(ff => ff.nombre[0] == nombre_requisito)
                if(form === undefined){
                    requisitosrepetidos.push({...objeto[i]})
                    service.connect(`INSERT INTO REQUISITOS (NOMBRE, OBLIGATORIO, TAMANIO) VALUES('${nombre_requisito}','${obligatorio_requisito}','${tamanio_requisito}')`)
    
                }

                setTimeout(()=> service.connect(`INSERT INTO PUESTO_REQUISITOS (ID_PUESTO, ID_REQUISITOS) 
                                                VALUES ((SELECT ID_PUESTO FROM PUESTO p WHERE p.NOMBRE = '${nombre_puesto}'),
                                                (SELECT ID_REQUISITOS FROM REQUISITOS r WHERE r.NOMBRE = '${nombre_requisito}'))`
                                            ),3000);


                formatos(objeto[i].formatos,nombre_requisito)
            }else{
                break
            }
        }   
    }
  
    const formatos = (array,nombre_requisito) => {
        //console.log(">>>>>>>>>> Datos del requisito >>>>>>>>>> ")
        for(let i=0; i<=50; i++){
            if(array[i]!==undefined){
                formatoDatos(array[i].formato,nombre_requisito)
            }else{
                //console.log("ya no hay formatos para este requisito")
                break
            }
        }        
    }
  
    const formatoDatos = (objeto,nombre_requisito) => {
        //console.log(">>>>>>>>>> Tipos del formato >>>>>>>>>> ")
        for(let i=0; i<=50; i++){
            if(objeto[i]!==undefined){
                //console.log("Formato nombre: " + objeto[i].nombre)
                //console.log("Requisito: " + nombre_requisito)

                let nombre_formato = objeto[i].nombre
         
                let form = formatosrepetidos.find(ff => ff.nombre[0] == nombre_formato)
                if(form === undefined){
                    formatosrepetidos.push({...objeto[i]})
                    //console.log(formatosrepetidos)
                    service.connect(`INSERT INTO FORMATO (NOMBRE) VALUES('${nombre_formato}')`)

                    setTimeout(()=> service.connect(`INSERT INTO FORMATO_REQUISITOS (ID_FORMATO, ID_REQUISITOS) 
                                                    VALUES ((SELECT ID_FORMATO FROM FORMATO f WHERE f.NOMBRE = '${nombre_formato}'),
                                                    (SELECT ID_REQUISITOS FROM REQUISITOS r WHERE r.NOMBRE = '${nombre_requisito}'))`
                                                ),3000);
                }
                
/*
                setTimeout(()=> service.connect(`INSERT INTO FORMATO_REQUISITOS (ID_FORMATO, ID_REQUISITOS) 
                                                VALUES ((SELECT ID_FORMATO FROM FORMATO f WHERE f.NOMBRE = '${nombre_formato}'),
                                                (SELECT ID_REQUISITOS FROM REQUISITOS r WHERE r.NOMBRE = '${nombre_requisito}'))`
                                            ),3000);
*/

                let revisarequisito = formato_requisito_repetidos.find(rev => rev.nombre_requisito[0] == nombre_requisito)
                if( revisarequisito === undefined ){ //no existe el requisito

                    formato_requisito_repetidos.push({nombre_requisito,nombre_formato})
                    setTimeout(()=> service.connect(`INSERT INTO FORMATO_REQUISITOS (ID_FORMATO, ID_REQUISITOS) 
                                                    VALUES ((SELECT ID_FORMATO FROM FORMATO f WHERE f.NOMBRE = '${nombre_formato}'),
                                                    (SELECT ID_REQUISITOS FROM REQUISITOS r WHERE r.NOMBRE = '${nombre_requisito}'))`
                                                ),3000);


                }else{//existe el requisito

                    let revisaformato = formato_requisito_repetidos.find(ff => ff.nombre_formato[0] == nombre_formato)
                    if(revisaformato === undefined){//existe el requisito pero no el formato

                        formato_requisito_repetidos.push({nombre_requisito,nombre_formato})    
                        setTimeout(()=> service.connect(`INSERT INTO FORMATO_REQUISITOS (ID_FORMATO, ID_REQUISITOS) 
                                                        VALUES ((SELECT ID_FORMATO FROM FORMATO f WHERE f.NOMBRE = '${nombre_formato}'),
                                                        (SELECT ID_REQUISITOS FROM REQUISITOS r WHERE r.NOMBRE = '${nombre_requisito}'))`
                                                    ),3000);
                    }


                }


            }else{
                break
            }
        }   
    }

  
    const categorias = (array,nombre_puesto) => {
        //console.log(">>>>>>>>>> Datos de las categorias >>>>>>>>>> ")
        for(let i=0; i<=50; i++){
            if(array[i]!==undefined){
                categoriaDatos(array[i].categoria,nombre_puesto)
            }else{
                //console.log("ya no hay categorias para este puesto")
                break
            }
        }        
    }
  
    const categoriaDatos = (objeto,nombre_puesto) => {
        //console.log(">>>>>>>>>> Tipos de categorias >>>>>>>>>> ")
        for(let i=0; i<=50; i++){
            if(objeto[i]!==undefined){
                //console.log("Categoria nombre: " + objeto[i].nombre)

                let nombre_categoria = objeto[i].nombre

                let form = categoriasrepetidos.find(ff => ff.nombre[0] == nombre_categoria)
                if(form === undefined){
                    categoriasrepetidos.push({...objeto[i]})
                    service.connect(`INSERT INTO CATEGORIA (NOMBRE) VALUES('${nombre_categoria}')`)
                }

                setTimeout(()=> service.connect(`INSERT INTO PUESTO_CATEGORIA (ID_PUESTO, ID_CATEGORIA) 
                                                VALUES ((SELECT ID_PUESTO FROM PUESTO p WHERE p.NOMBRE = '${nombre_puesto}'),
                                                (SELECT ID_CATEGORIA FROM CATEGORIA c WHERE c.NOMBRE = '${nombre_categoria}'))`
                                            ),3000);


            }else{
                break
            }
        }   
    }






module.exports = router;