import xml2js from 'xml2js';
import React from 'react';



function Pruebita() {

    let id_dep_puesto = 1
    let id_puesto_requisito = 1
    let id_puesto_categoria = 1
    let id_requisito_formato = 1



    let grafo = "digraph G { \r\n"+
                    " institucion -> departamentos "

  const data = `
  <departamentos>
  <departamento>
      <nombre>OORDINACIÓN GENERAL DE LA UNIDAD DEL SISTEMA DE INFORMACIÓN GERENCIAL DE SALUD</nombre>
      <capital_total>40000.00</capital_total>
      <puestos>
          <puesto>
              <nombre>Coordinador General</nombre>
              <salario>20000.00</salario>
              <categorias>
                  <categoria>
                      <nombre>Coordinación</nombre>
                  </categoria>
                  <categoria>
                      <nombre>IT</nombre>
                  </categoria>
                  <categoria>
                      <nombre>Gerencial</nombre>
                  </categoria>
              </categorias>
              <requisitos>
                  <requisito>
                      <nombre>CV</nombre>
                      <formatos>
                          <formato>
                              <nombre>PDF</nombre>
                          </formato>
                      </formatos>
                      <tamaño>5</tamaño>
                      <obligatorio>1</obligatorio>
                  </requisito>
                  <requisito>
                      <nombre>Antecedentes Penales</nombre>
                      <formatos>
                          <formato>
                              <nombre>PDF</nombre>
                          </formato>
                      </formatos>
                      <tamaño>5</tamaño>
                      <obligatorio>1</obligatorio>
                  </requisito>
                  <requisito>
                      <nombre>Foto Tamaño Cedula</nombre>
                      <formatos>
                          <formato>
                              <nombre>PDF</nombre>
                          </formato>
                          <formato>
                              <nombre>PNG</nombre>
                          </formato>
                          <formato>
                              <nombre>JPG</nombre>
                          </formato>
                      </formatos>
                      <tamaño>2</tamaño>
                      <obligatorio>1</obligatorio>
                  </requisito>
                  <requisito>
                      <nombre>Colegiado Activo</nombre>
                      <formatos>
                          <formato>
                              <nombre>PDF</nombre>
                          </formato>
                          <formato>
                              <nombre>PNG</nombre>
                          </formato>
                          <formato>
                              <nombre>JPG</nombre>
                          </formato>
                      </formatos>
                      <tamaño>2</tamaño>
                      <obligatorio>0</obligatorio>
                  </requisito>
                  <requisito>
                      <nombre>Declaración Jurada</nombre>
                      <formatos>
                          <formato>
                              <nombre>PDF</nombre>
                          </formato>
                      </formatos>
                      <tamaño>1</tamaño>
                      <obligatorio>1</obligatorio>
                  </requisito>
              </requisitos>
          </puesto>
      </puestos>
      <departamentos>
          <departamento>
              <nombre>COORDINACIÓN DE GESTIÓN DE PROYECTOS DE TECNOLOGÍA</nombre>
              <capital_total>150000.00</capital_total>
              <puestos>
                  <puesto>
                      <nombre>Coordinador de Proyectos</nombre>
                      <salario>18000.00</salario>
                      <categorias>
                          <categoria>
                              <nombre>Coordinación</nombre>
                          </categoria>
                          <categoria>
                              <nombre>IT</nombre>
                          </categoria>
                          <categoria>
                              <nombre>Gerencial</nombre>
                          </categoria>
                      </categorias>
                      <requisitos>
                          <requisito>
                              <nombre>CV</nombre>
                              <formatos>
                                  <formato>
                                      <nombre>PDF</nombre>
                                  </formato>
                              </formatos>
                              <tamaño>5</tamaño>
                              <obligatorio>1</obligatorio>
                          </requisito>
                          <requisito>
                              <nombre>Antecedentes Penales</nombre>
                              <formatos>
                                  <formato>
                                      <nombre>PDF</nombre>
                                  </formato>
                              </formatos>
                              <tamaño>5</tamaño>
                              <obligatorio>1</obligatorio>
                          </requisito>
                          <requisito>
                              <nombre>Foto Tamaño Cedula</nombre>
                              <formatos>
                                  <formato>
                                      <nombre>PDF</nombre>
                                  </formato>
                                  <formato>
                                      <nombre>PNG</nombre>
                                  </formato>
                                  <formato>
                                      <nombre>JPG</nombre>
                                  </formato>
                              </formatos>
                              <tamaño>2</tamaño>
                              <obligatorio>1</obligatorio>
                          </requisito>
                          <requisito>
                              <nombre>Colegiado Activo</nombre>
                              <formatos>
                                  <formato>
                                      <nombre>PDF</nombre>
                                  </formato>
                                  <formato>
                                      <nombre>PNG</nombre>
                                  </formato>
                                  <formato>
                                      <nombre>JPG</nombre>
                                  </formato>
                              </formatos>
                              <tamaño>2</tamaño>
                              <obligatorio>0</obligatorio>
                          </requisito>
                          <requisito>
                              <nombre>Declaración Jurada</nombre>
                              <formatos>
                                  <formato>
                                      <nombre>PDF</nombre>
                                  </formato>
                              </formatos>
                              <tamaño>1</tamaño>
                              <obligatorio>1</obligatorio>
                          </requisito>
                          <requisito>
                              <nombre>Titulo o Diploma</nombre>
                              <formatos>
                                  <formato>
                                      <nombre>PDF</nombre>
                                  </formato>
                              </formatos>
                              <tamaño>1</tamaño>
                              <obligatorio>1</obligatorio>
                          </requisito>
                      </requisitos>
                  </puesto>
              </puestos>
          </departamento>
          <departamento>
              <nombre>COORDINACIÓN DE DESARROLLO DE SISTEMAS</nombre>
              <capital_total>30000.00</capital_total>
              <puestos>
                  <puesto>
                      <nombre>Coordinador De Desarrollo de Sistemas</nombre>
                      <salario>17500.00</salario>
                      <categorias>
                          <categoria>
                              <nombre>Coordinación</nombre>
                          </categoria>
                          <categoria>
                              <nombre>IT</nombre>
                          </categoria>
                          <categoria>
                              <nombre>Desarrollo</nombre>
                          </categoria>
                      </categorias>
                      <requisitos>
                          <requisito>
                              <nombre>CV</nombre>
                              <formatos>
                                  <formato>
                                      <nombre>PDF</nombre>
                                  </formato>
                              </formatos>
                              <tamaño>5</tamaño>
                              <obligatorio>1</obligatorio>
                          </requisito>
                          <requisito>
                              <nombre>Antecedentes Penales</nombre>
                              <formatos>
                                  <formato>
                                      <nombre>PDF</nombre>
                                  </formato>
                              </formatos>
                              <tamaño>5</tamaño>
                              <obligatorio>1</obligatorio>
                          </requisito>
                          <requisito>
                              <nombre>Foto Tamaño Cedula</nombre>
                              <formatos>
                                  <formato>
                                      <nombre>PDF</nombre>
                                  </formato>
                                  <formato>
                                      <nombre>PNG</nombre>
                                  </formato>
                                  <formato>
                                      <nombre>JPG</nombre>
                                  </formato>
                              </formatos>
                              <tamaño>2</tamaño>
                              <obligatorio>1</obligatorio>
                          </requisito>
                          <requisito>
                              <nombre>Colegiado Activo</nombre>
                              <formatos>
                                  <formato>
                                      <nombre>PDF</nombre>
                                  </formato>
                                  <formato>
                                      <nombre>PNG</nombre>
                                  </formato>
                                  <formato>
                                      <nombre>JPG</nombre>
                                  </formato>
                              </formatos>
                              <tamaño>2</tamaño>
                              <obligatorio>0</obligatorio>
                          </requisito>
                          <requisito>
                              <nombre>Declaración Jurada</nombre>
                              <formatos>
                                  <formato>
                                      <nombre>PDF</nombre>
                                  </formato>
                              </formatos>
                              <tamaño>1</tamaño>
                              <obligatorio>1</obligatorio>
                          </requisito>
                      </requisitos>
                  </puesto>
              </puestos>
              <departamentos>
                  <departamento>
                      <nombre>ÁREA DE DESARROLLO</nombre>
                      <capital_total>250000.00</capital_total>
                      <puestos>
                          <puesto>
                              <nombre>Analista Programador Full Stack</nombre>
                              <salario>12800.00</salario>
                              <categorias>
                                  <categoria>
                                      <nombre>Desarrollo</nombre>
                                  </categoria>
                                  <categoria>
                                      <nombre>IT</nombre>
                                  </categoria>
                                  <categoria>
                                      <nombre>Backend</nombre>
                                  </categoria>
                                  <categoria>
                                      <nombre>Frontend</nombre>
                                  </categoria>
                              </categorias>
                              <requisitos>
                                  <requisito>
                                      <nombre>CV</nombre>
                                      <formatos>
                                          <formato>
                                              <nombre>PDF</nombre>
                                          </formato>
                                      </formatos>
                                      <tamaño>5</tamaño>
                                      <obligatorio>1</obligatorio>
                                  </requisito>
                                  <requisito>
                                      <nombre>Antecedentes Penales</nombre>
                                      <formatos>
                                          <formato>
                                              <nombre>PDF</nombre>
                                          </formato>
                                      </formatos>
                                      <tamaño>5</tamaño>
                                      <obligatorio>1</obligatorio>
                                  </requisito>
                                  <requisito>
                                      <nombre>Foto Tamaño Cedula</nombre>
                                      <formatos>
                                          <formato>
                                              <nombre>PDF</nombre>
                                          </formato>
                                          <formato>
                                              <nombre>PNG</nombre>
                                          </formato>
                                          <formato>
                                              <nombre>JPG</nombre>
                                          </formato>
                                      </formatos>
                                      <tamaño>2</tamaño>
                                      <obligatorio>1</obligatorio>
                                  </requisito>
                                  <requisito>
                                      <nombre>Colegiado Activo</nombre>
                                      <formatos>
                                          <formato>
                                              <nombre>PDF</nombre>
                                          </formato>
                                          <formato>
                                              <nombre>PNG</nombre>
                                          </formato>
                                          <formato>
                                              <nombre>JPG</nombre>
                                          </formato>
                                      </formatos>
                                      <tamaño>2</tamaño>
                                      <obligatorio>0</obligatorio>
                                  </requisito>
                                  <requisito>
                                      <nombre>Declaración Jurada</nombre>
                                      <formatos>
                                          <formato>
                                              <nombre>PDF</nombre>
                                          </formato>
                                      </formatos>
                                      <tamaño>1</tamaño>
                                      <obligatorio>1</obligatorio>
                                  </requisito>
                                  <requisito>
                                      <nombre>Titulo o Diploma</nombre>
                                      <formatos>
                                          <formato>
                                              <nombre>PDF</nombre>
                                          </formato>
                                      </formatos>
                                      <tamaño>1</tamaño>
                                      <obligatorio>1</obligatorio>
                                  </requisito>
                                  <requisito>
                                      <nombre>RTU</nombre>
                                      <formatos>
                                          <formato>
                                              <nombre>PDF</nombre>
                                          </formato>
                                      </formatos>
                                      <tamaño>3</tamaño>
                                      <obligatorio>0</obligatorio>
                                  </requisito>
                                  <requisito>
                                      <nombre>Fotocopia DPI</nombre>
                                      <formatos>
                                          <formato>
                                              <nombre>PDF</nombre>
                                          </formato>
                                          <formato>
                                              <nombre>JPG</nombre>
                                          </formato>
                                          <formato>
                                              <nombre>PNG</nombre>
                                          </formato>
                                      </formatos>
                                      <tamaño>10</tamaño>
                                      <obligatorio>1</obligatorio>
                                  </requisito>
                              </requisitos>
                          </puesto>
                          <puesto>
                              <nombre>Analista QA</nombre>
                              <salario>7500.00</salario>
                              <categorias>
                                  <categoria>
                                      <nombre>QA</nombre>
                                  </categoria>
                                  <categoria>
                                      <nombre>IT</nombre>
                                  </categoria>
                                  <categoria>
                                      <nombre>Informática</nombre>
                                  </categoria>
                              </categorias>
                              <requisitos>
                                  <requisito>
                                      <nombre>CV</nombre>
                                      <formatos>
                                          <formato>
                                              <nombre>PDF</nombre>
                                          </formato>
                                      </formatos>
                                      <tamaño>5</tamaño>
                                      <obligatorio>1</obligatorio>
                                  </requisito>
                                  <requisito>
                                      <nombre>Antecedentes Penales</nombre>
                                      <formatos>
                                          <formato>
                                              <nombre>PDF</nombre>
                                          </formato>
                                      </formatos>
                                      <tamaño>5</tamaño>
                                      <obligatorio>1</obligatorio>
                                  </requisito>
                                  <requisito>
                                      <nombre>Foto Tamaño Cedula</nombre>
                                      <formatos>
                                          <formato>
                                              <nombre>PDF</nombre>
                                          </formato>
                                          <formato>
                                              <nombre>PNG</nombre>
                                          </formato>
                                          <formato>
                                              <nombre>JPG</nombre>
                                          </formato>
                                      </formatos>
                                      <tamaño>2</tamaño>
                                      <obligatorio>1</obligatorio>
                                  </requisito>
                                  <requisito>
                                      <nombre>Colegiado Activo</nombre>
                                      <formatos>
                                          <formato>
                                              <nombre>PDF</nombre>
                                          </formato>
                                          <formato>
                                              <nombre>PNG</nombre>
                                          </formato>
                                          <formato>
                                              <nombre>JPG</nombre>
                                          </formato>
                                      </formatos>
                                      <tamaño>2</tamaño>
                                      <obligatorio>0</obligatorio>
                                  </requisito>
                                  <requisito>
                                      <nombre>Declaración Jurada</nombre>
                                      <formatos>
                                          <formato>
                                              <nombre>PDF</nombre>
                                          </formato>
                                      </formatos>
                                      <tamaño>1</tamaño>
                                      <obligatorio>1</obligatorio>
                                  </requisito>
                                  <requisito>
                                      <nombre>Titulo o Diploma</nombre>
                                      <formatos>
                                          <formato>
                                              <nombre>PDF</nombre>
                                          </formato>
                                      </formatos>
                                      <tamaño>1</tamaño>
                                      <obligatorio>1</obligatorio>
                                  </requisito>
                                  <requisito>
                                      <nombre>RTU</nombre>
                                      <formatos>
                                          <formato>
                                              <nombre>PDF</nombre>
                                          </formato>
                                      </formatos>
                                      <tamaño>3</tamaño>
                                      <obligatorio>0</obligatorio>
                                  </requisito>
                                  <requisito>
                                      <nombre>Fotocopia DPI</nombre>
                                      <formatos>
                                          <formato>
                                              <nombre>PDF</nombre>
                                          </formato>
                                          <formato>
                                              <nombre>JPG</nombre>
                                          </formato>
                                          <formato>
                                              <nombre>PNG</nombre>
                                          </formato>
                                      </formatos>
                                      <tamaño>10</tamaño>
                                      <obligatorio>1</obligatorio>
                                  </requisito>
                              </requisitos>
                          </puesto>
                      </puestos>
                  </departamento>
              </departamentos>
          </departamento>
      </departamentos>
  </departamento>
</departamentos>`;

    const xml = new xml2js.Parser();
    let resultJson;
    xml.parseString(data, function (err, result) {
        resultJson = result;
    });
    console.log(resultJson);
    
    aqui(resultJson);





    function aqui(objeto){
        //console.log("********* objetos ********* ")
        //console.log(objeto.departamentos)
        aqui2(objeto.departamentos)
    }

    function aqui2(array){
        console.log("********* arrays ********* ")
        for(let i=0; i<=50; i++){
            if(array.departamento[i]!==undefined){
                //console.log("este11111 ")
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

    function departamentoDatos(objeto, id){
        console.log(">>>>>>>>>> Datos del departamento >>>>>>>>>> ")
        for(let i=0; i<=50; i++){
            if(objeto[i]!==undefined){
                grafo += " departamentos -> " + objeto[i].nombre + " "

                console.log("Nombre: " + objeto[i].nombre)
                console.log("Capital: " + objeto[i].capital_total)

                grafo += objeto[i].nombre + " -> puestos" + id_dep_puesto
                puestos(objeto[i].puestos, id_dep_puesto)
                id_dep_puesto += 1
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

    function dep(array){
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




    function puestos(array,id){
        //console.log(">>>>>>>>>> Datos del puesto >>>>>>>>>> ")
        for(let i=0; i<=50; i++){
            if(array[i]!==undefined){
                puestoDatos(array[i].puesto,id)
            }else{
                console.log("ya no hay puestos")
                break
            }
        }        
    }

    function puestoDatos(objeto,id){
        for(let i=0; i<=50; i++){
            if(objeto[i]!==undefined){

                grafo += " puestos"+id+" -> " + objeto[i].nombre
                
                console.log("Puesto: " + objeto[i].nombre)
                console.log("Puesto salario: " + objeto[i].salario)

                grafo += " puestos"+id+ " -> requisitos"+id_puesto_requisito
                requisitos(objeto[i].requisitos,id_puesto_requisito)
                id_puesto_requisito += 1

                grafo += " puestos"+id + " -> categorias"+id_puesto_categoria
                categorias(objeto[i].categorias,id_puesto_categoria)
                id_puesto_categoria += 1
            }else{
                break
            }
        }
    }

    function requisitos(array,id){
        //console.log(">>>>>>>>>> Datos del requisito >>>>>>>>>> ")
        for(let i=0; i<=50; i++){
            if(array[i]!==undefined){
                requisitoDatos(array[i].requisito,id)
            }else{
                console.log("ya no hay requisitos")
                break
            }
        }        
    }

    function requisitoDatos(objeto,id){
        //console.log(">>>>>>>>>> Tipos del requisito >>>>>>>>>> ")
        for(let i=0; i<=50; i++){
            if(objeto[i]!==undefined){
                grafo += " requisitos"+id+" -> " + objeto[i].nombre + id
                console.log("Requisito nombre: " + objeto[i].nombre)
                console.log("Requisito obligatorio: " + objeto[i].obligatorio)
                console.log("Requisito tamanio: " + objeto[i].tamaño)

                grafo += " requisitos"+id+" -> formatos"+id_requisito_formato
                formatos(objeto[i].formatos,id_requisito_formato)
                id_requisito_formato += 1
            }else{
                break
            }
        }   
    }

    function formatos(array,id){
        //console.log(">>>>>>>>>> Datos del requisito >>>>>>>>>> ")
        for(let i=0; i<=50; i++){
            if(array[i]!==undefined){
                formatoDatos(array[i].formato,id)
            }else{
                console.log("ya no hay formatos para este requisito")
                break
            }
        }        
    }

    function formatoDatos(objeto,id){
        //console.log(">>>>>>>>>> Tipos del formato >>>>>>>>>> ")
        for(let i=0; i<=50; i++){
            if(objeto[i]!==undefined){
                grafo += " formatos"+id+" -> " + objeto[i].nombre + id
                console.log("Formato nombre: " + objeto[i].nombre)
            }else{
                break
            }
        }   
    }

    function categorias(array,id){
        //console.log(">>>>>>>>>> Datos de las categorias >>>>>>>>>> ")
        for(let i=0; i<=50; i++){
            if(array[i]!==undefined){
                categoriaDatos(array[i].categoria,id)
            }else{
                console.log("ya no hay categorias para este puesto")
                break
            }
        }        
    }

    function categoriaDatos(objeto,id){
        //console.log(">>>>>>>>>> Tipos de categorias >>>>>>>>>> ")
        for(let i=0; i<=50; i++){
            if(objeto[i]!==undefined){
                grafo += " categorias"+id+" -> " + objeto[i].nombre + id
                console.log("Categoria nombre: " + objeto[i].nombre)
            }else{
                break
            }
        }   
    }


    grafo += "}"


  return (
    <div>
        <p>Adios mundo</p>
        <p>{grafo}</p>

    </div>
  );
}


export default Pruebita;








function aqui(objeto){
    //console.log("********* objetos ********* ")
    aqui2(objeto.departamentos)
  }
  
  function aqui2(array){
    //console.log("********* arrays ********* ")
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
  
  function departamentoDatos(objeto){
    console.log(">>>>>>>>>> Datos del departamento >>>>>>>>>> ")
    for(let i=0; i<=50; i++){
        if(objeto[i]!==undefined){
  
            console.log("Nombre: " + objeto[i].nombre)
            console.log("Capital: " + objeto[i].capital_total)
            puestos(objeto[i].puestos)
  
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
  
  
  function dep(array){
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
  
  
  function puestos(array){
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
  
  
  function puestoDatos(objeto){
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
  
  
  function requisitos(array){
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
  
  function requisitoDatos(objeto){
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
  
  function formatos(array){
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
  
  function formatoDatos(objeto){
    //console.log(">>>>>>>>>> Tipos del formato >>>>>>>>>> ")
    for(let i=0; i<=50; i++){
        if(objeto[i]!==undefined){
            console.log("Formato nombre: " + objeto[i].nombre)
        }else{
            break
        }
    }   
  }
  
  function categorias(array){
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
  
  function categoriaDatos(objeto){
    //console.log(">>>>>>>>>> Tipos de categorias >>>>>>>>>> ")
    for(let i=0; i<=50; i++){
        if(objeto[i]!==undefined){
            console.log("Categoria nombre: " + objeto[i].nombre)
        }else{
            break
        }
    }   
  }
  