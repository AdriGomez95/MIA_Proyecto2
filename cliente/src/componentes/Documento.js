import React, {useEffect, useRef, useState} from 'react';
import { Form, Button } from 'react-bootstrap';



const Documento = () => {
    const [puestos, setPuestos] = useState([])


    useEffect(() => {
        var formdata = new FormData();
        var requestOptions = {
            method: 'GET',
            data: formdata,
            redirect: 'follow'
        };

        fetch("http://localhost:9000/ListadoPuestos/puestitoscalif", requestOptions)
        .then(response => response.json())
        .then(result => setPuestos(result))
        .catch(error => console.log('error', error));

    },[])




    //referencias para jalar los datos del usuario
    const puesto = useRef()      
    const documentoname = useRef()    
    const nombre = useRef()     
    const link = useRef()      
    const formato = useRef()      

    //metodo para mandar con el backend
    const NuevoDocumento = async () => {
        let puesto1 = puesto.current.value
        let documentoname1 = documentoname.current.value
        let nombre1 = nombre.current.value
        let link1 = link.current.value
        let formato1 = formato.current.value


        let doc = {
                    puesto: puesto1,
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
            method: 'POST',
            headers: myHeaders,
            body: a,
            redirect: 'follow'
        };

        fetch("http://localhost:9000/Documentos/crear_documento", requesOptions)
        .then(response => response.text())
        .then(result => console.log(result))
        .catch(error => console.log('error', error));

        actualizarDatos();

    }
    const actualizarDatos = async () => {
        
        let nombre2 = nombre.current.value

        let doc = {
                    nombre: nombre2
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

        fetch("http://localhost:9000/Documentos/actualizaDatos", requesOptions)
        .then(response => response.text())
        .then(result => console.log(result))
        .catch(error => console.log('error', error));

    }




    return (
        <div>            
            <br/><br/>
            <h1 className="h1">Sube tu documento</h1> 
                        
            <Button  onClick={NuevoDocumento}  variant="outline-warning" size="lg">
                enviar documento
            </Button>  
            <br/><br/>
            <Button  onClick={actualizarDatos}  variant="outline-warning" size="lg">
                actualizar
            </Button>  
            <br/><br/>
                    



            
            <Form.Label column lg={2}>
                Puesto
            </Form.Label>
            <Form.Group controlId="formGridState">
                        <Form.Select defaultValue="Choose..." ref={puesto}>
                            {
                                puestos.map((option,index) => {
                                    return (<option key={index} value={option}>{option}</option>)
                                })
                            }
                </Form.Select>
            </Form.Group>

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
            <Form.Control type="password" placeholder="Normal text"ref={link}  />
                   
            <Form.Label column lg={2}>
                Formato
            </Form.Label>                    
            <Form.Control type="password" placeholder="Normal text" ref={formato} />
                   


                   
                       

        </div>
    )
}

export default Documento