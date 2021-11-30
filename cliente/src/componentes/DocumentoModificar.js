import React, {useEffect, useRef, useState} from 'react';
import { Form, Button } from 'react-bootstrap';



const DocumentoModificar = () => {



    //referencias para jalar los datos del usuario
    const puesto = useRef()      
    const documentoname = useRef()    
    const nombre = useRef()     
    const link = useRef()      
    const formato = useRef()      

    const actualizarDatos = async () => {
        let documentoname1 = documentoname.current.value
        let nombre1 = nombre.current.value
        let link1 = link.current.value
        let formato1 = formato.current.value

        let doc = {
            documentoname: documentoname1,
            nombre: nombre1,
            link: link1,
            formato: formato1
        }

        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        
        var a = JSON.stringify({
            "doc": doc
        });

        var requesOptions = {
            method: 'PUT',
            headers: myHeaders,
            body: a,
            redirect: 'follow'
        };

        fetch("http://localhost:9000/Documentos/actualizaDatos_Aplicante", requesOptions)
        .then(response => response.text())
        .then(result => console.log(result))
        .catch(error => console.log('error', error));

    }




    return (
        <div>            
            <br/><br/>
            <h1 className="h1">Modifica tu documento</h1> 
                         
            <Button  onClick={actualizarDatos}  variant="outline-warning" size="lg">
                actualizar
            </Button>  
            <br/><br/>
                    




            <Form.Label column lg={2}>
                Nombre del documento
            </Form.Label>                   
            <Form.Control type="text" placeholder="Normal text" ref={documentoname}  />

            <Form.Label column lg={2}>
                Nombre de usuario
            </Form.Label>                   
            <Form.Control type="text" placeholder="Normal text"ref={nombre}  />
                   
            <Form.Label column lg={2}>
                Link
            </Form.Label>                    
            <Form.Control type="text" placeholder="Normal text"ref={link}  />
                   
            <Form.Label column lg={2}>
                Formato
            </Form.Label>                    
            <Form.Control type="text" placeholder="Normal text" ref={formato} />
                   


                   
                       

        </div>
    )
}

export default DocumentoModificar