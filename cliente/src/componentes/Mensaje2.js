import React, {useEffect, useState, useRef}  from 'react';
import socketIOClient from "socket.io-client";
import { Form,Row,Col,Button,Container} from 'react-bootstrap';
import { MDBDataTableV5 } from 'mdbreact';


const ENDPOINT = "http://localhost:9000/routes/usuarios";
const socket = socketIOClient(ENDPOINT, {transports:['websocket']});


const Mensaje2 = () => {
    
    const mandar = () => {
        socket.emit("probando")

    }









    let [texto, setTexto] = useState('')

    //referencias para jalar los datos del usuario
    const nombre = useRef()     //nombre del usuario
    const aplicante = useRef()     //nombre del usuario
    const mensaje = useRef()       //password del usuario

    //metodo para mandar con el backend
    const CrearMSJ = async () => {
        let usuario = nombre.current.value
        let aplicante1 = aplicante.current.value
        let mensaje1 = mensaje.current.value
        let emp = {
                    usuario: usuario,
                    aplicante: aplicante1,
                    mensaje: mensaje1
                }

        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        
        var a = JSON.stringify({
            "mensaje": emp
        });

        var requesOptions = {
            method: 'POST',
            headers: myHeaders,
            body: a,
            redirect: 'follow'
        };

        fetch("http://localhost:9000/usuarios/crear_mensaje2", requesOptions)
        .then(response => response.text())
        .then(result => console.log(result))
        .catch(error => console.log('error', error));

    }


    const [datatable, setDatatable] = useState({});

    

    useEffect(() => {
        const columns = [
            {
            label: 'Mensaje ',
            field: 'texto',
            width: 150,
            attributes: {
                'aria-controls': 'DataTable',
                'aria-label': 'Nombre del puesto',
            },
            },
            {
            label: 'Fecha',
            field: 'fecha',
            width: 200,
            }
        ]
        
        var formdata = new FormData();
        var requestOptions = {
            method: 'GET',
            data: formdata,
            redirect: 'follow'
        };

        fetch("http://localhost:9000/usuarios/mensajines2", requestOptions)
        .then(response => response.json())
        .then(result => setDatatable({columns:columns,rows:result}))
        .catch(error => console.log('error', error));

    },[])



    return (
        <div>
        <br/><br/>
        <h1 className="h1">Componente mensaje</h1> 
            <br/><br/>
            <Container>
                <Row>
                    <Form.Label column lg={2}>
                    Usuario
                    </Form.Label>
                    <Col>
                    <Form.Control type="text" placeholder="Normal text"  ref={nombre} />
                    </Col>
                    <Col>
                        <Button onClick={CrearMSJ}>
                            enviar mensaje
                        </Button>
                    </Col>
                    {/* 
                    <Col>
                        <Button onClick={refresh}>
                            refresh
                        </Button>
                    </Col>
                    */}
                </Row>
                <Row>
                    <Form.Label column lg={2}>
                    Aplicante
                    </Form.Label>
                    <Col>
                    <Form.Control type="text" placeholder="Normal text"  ref={aplicante} />
                    </Col>
                    <Col>
                    </Col>
                </Row>
                <Row>
                    <Col><br/> <br/></Col>                   
                </Row>
                <Row>
                    <Form.Label column lg={2}>
                    Escribe tu mensaje
                    </Form.Label>
                    <Col>
                    <Form.Control type="text" placeholder="Normal text"  ref={mensaje} />
                    </Col>
                    {/*
                    <Col>
                        <Button  onClick={mandar}>
                            socket
                        </Button>
                    </Col>
                      */}
                </Row>
            </Container>
            <br/><br/>        

          
            <br/><br/>
            <MDBDataTableV5 hover entriesOptions={[5, 20, 25]} entries={5} pagesAmount={4} data={datatable} searchTop searchBottom={false} />;
    
        </div>
    )
}



export default Mensaje2