import React, {useEffect, useState} from 'react';
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

        fetch("http://localhost:9000/departamentos", requestOptions)
        .then(response => response.json())
        .then(result => setDepartamento(result))
        .catch(error => console.log('error', error));

    },[])









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
                    <Form.Control type="text" placeholder="Normal text" />
                    </Col>
                    <Col>
                    </Col>
                </Row>
                <Row>
                    <Form.Label column lg={2}>
                    Password
                    </Form.Label>
                    <Col>
                    <Form.Control type="password" placeholder="Password" />
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
                        <Form.Select defaultValue="Choose...">
                            <option>...</option>
                            <option>Coordinador de departamento</option>
                            <option>Revisor de expediente</option>
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
                        <Form.Select defaultValue="Choose...">
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
            <Button  href='/' variant="outline-warning" size="lg">
                crear usuario
            </Button>           
            
            </center>            
        </div>
    )
}

export default CrearUsuarios