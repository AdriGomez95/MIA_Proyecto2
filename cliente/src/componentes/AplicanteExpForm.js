import React, {useState, useEffect, useRef}  from 'react';
import { Form, Button } from 'react-bootstrap';




const AplicanteExpForm = () => {
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
    const puesto = useRef()     //puesto del usuario
    const dpi = useRef()        //dpi del usuario
    const nombres = useRef()    //nombres del usuario
    const apellidos = useRef()  //apellidos del usuario
    const correo = useRef()     //correo del usuario
    const telefono = useRef()   //telefono del usuario
    const direccion = useRef()  //direccion del usuario

    const NuevoUsuario2 = async () => {
        let puesto1 = puesto.current.value
        let dpi1 = dpi.current.value
        let nombres1 = nombres.current.value
        let apellidos1 = apellidos.current.value
        let correo1 = correo.current.value
        let telefono1 = telefono.current.value
        let direccion1 = direccion.current.value


        let apli = {
                    puesto: puesto1,
                    dpi: dpi1,
                    nombre: nombres1,
                    apellido: apellidos1,
                    correo: correo1,
                    direccion: direccion1,
                    telefono: telefono1
                }
        /*
        console.log("dpi: " + dpi1)
        console.log("nombre: " + nombres1)
        console.log("apellido: " + apellidos1)
        console.log("correo: " + correo1)
        console.log("direccion: " + direccion1)
        console.log("telefono: " + telefono1)
        */

        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        
        var a = JSON.stringify({
            "aplicante": apli
        });

        var requesOptions = {
            method: 'POST',
            headers: myHeaders,
            body: a,
            redirect: 'follow'
        };

        fetch("http://localhost:9000/usuarios/crear_aplicante", requesOptions)
        .then(response => response.text())
        .then(result => console.log(result))
        .catch(error => console.log('error', error));
    }


    return (
        <div>            
            <br/><br/>
            <h1 className="h1">Modifica tu expediente</h1> 
                        
            <Button  onClick={NuevoUsuario2} variant="outline-warning" size="lg">
                modificar expediente
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
                DPI
            </Form.Label>                   
            <Form.Control type="text" placeholder="Normal text" ref={dpi} />
                                      
            <Form.Label column lg={2}>
                Nombres
            </Form.Label>                   
            <Form.Control type="text" placeholder="Normal text" ref={nombres}  />
                   
            <Form.Label column lg={2}>
                Apellidos
            </Form.Label>                   
            <Form.Control type="text" placeholder="Normal text" ref={apellidos}  />
                   
            <Form.Label column lg={2}>
                Correo
            </Form.Label>                   
            <Form.Control type="text" placeholder="Normal text" ref={correo}  />
                   
            <Form.Label column lg={2}>
                Direccion
            </Form.Label>                   
            <Form.Control type="text" placeholder="Normal text" ref={direccion}  />
                   
            <Form.Label column lg={2}>
                Telefono
            </Form.Label>                   
            <Form.Control type="text" placeholder="Normal text" ref={telefono}  />
                   








        </div>
    )
}

export default AplicanteExpForm