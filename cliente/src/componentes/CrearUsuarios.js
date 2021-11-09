import React, {useEffect, useRef, useState} from 'react';
import { Form,Row,Col,Button,Container} from 'react-bootstrap';



const CrearUsuarios = () => {
    const [departamento, setDepartamento] = useState([])


    useEffect(() => {
        var formdata = new FormData();
        var requestOptions = {
            method: 'GET',
            data: formdata,
            redirect: 'follow'
        };

        fetch("http://localhost:9000/Departamentos/departamentos", requestOptions)
        .then(response => response.json())
        .then(result => setDepartamento(result))
        .catch(error => console.log('error', error));

    },[])




    //referencias para jalar los datos del usuario
    const nombre = useRef()     //nombre del usuario
    const pass = useRef()       //password del usuario
    const rol1 = useRef()        //rol del usuario
    const de1 = useRef()       //departamento del usuario

    //metodo para mandar con el backend
    const NuevoUsuario = async () => {
        let usuario = nombre.current.value
        let contrasenia = pass.current.value
        let rol = rol1.current.value
        let de2 = de1.current.value
        let emp = {
                    usuario: usuario,
                    contrasenia: contrasenia,
                    rol: rol,
                    departamento: de2
                }
        //console.log("usuario: " + usuario)
        //console.log("password: " + contrasenia)
        //console.log("rol: " + rol)
        //console.log("departamento: " + de2)
        //console.log(emp)

        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        
        var a = JSON.stringify({
            "empleado": emp
        });

        var requesOptions = {
            method: 'POST',
            headers: myHeaders,
            body: a,
            redirect: 'follow'
        };

        fetch("http://localhost:9000/usuarios/crear_empleado", requesOptions)
        .then(response => response.text())
        .then(result => console.log(result))
        .catch(error => console.log('error', error));

    }




    return (
        <div>
            <center>
            <br/><br/>
            <Container>



                <Row>
                    <Form.Label column lg={2}>
                    Usuario
                    </Form.Label>
                    <Col>
                    <Form.Control type="text" placeholder="Normal text" ref={nombre} />
                    </Col>
                    <Col>
                    </Col>
                </Row>
                <Row>
                    <Form.Label column lg={2}>
                    Password
                    </Form.Label>
                    <Col>
                    <Form.Control type="password" placeholder="Password" ref={pass}/>
                    </Col>
                    <Col>
                    </Col>
                </Row>
                <Row>
                    <Form.Label column lg={2}>
                    Rol
                    </Form.Label>
                    <Col>
                    <Form.Group controlId="formGridState">
                        <Form.Select defaultValue="Choose..." ref={rol1}>
                            <option>...</option>
                            <option value='administrador'>Administrador</option>
                            <option value='coordinador'>Coordinador de departamento</option>
                            <option value='revisor'>Revisor de expediente</option>
                            
                        </Form.Select>
                    </Form.Group>
                    </Col>
                    <Col>
                    </Col>
                </Row>
                <Row>
                    <Form.Label column lg={2}>
                    Departamento
                    </Form.Label>
                    <Col>
                    <Form.Group controlId="formGridState">
                        <Form.Select defaultValue="Choose..." ref={de1}>
                            {
                                departamento.map((option,index) => {
                                    return (<option key={index} value={option}>{option}</option>)
                                })
                            }
                        </Form.Select>
                    </Form.Group>
                    </Col>
                    <Col>
                    </Col>
                </Row>



            </Container>
            <br/><br/>
            <Button  onClick={NuevoUsuario} variant="outline-warning" size="lg">
                crear usuario
            </Button>           
            
            </center>            
        </div>
    )
}

export default CrearUsuarios