import React from 'react';
import Barra from '../componentes/Barra'

import { Form,Row,Col,Button,Container} from 'react-bootstrap';



const CalificarPuesto = () => {
    return (
        <div>
        <Barra/>
        <center>
        <br/><br/>


        <Container>
            <Row>
                <Form.Label column lg={2}>
                Nombre del puesto
                </Form.Label>
                <Col>
                <Form.Control type="text" placeholder="Normal text" />
                </Col>
                <Col>
                </Col>
            </Row>
            <Row>
                <Form.Label column lg={2}>
                Calificacion
                </Form.Label>
                <Col>
                <Form.Control type="text" placeholder="Normal text" />
                </Col>
                <Col>
                </Col>
            </Row>
            <Row>
                <Form.Label column lg={2}>
                Nombre usuario
                </Form.Label>
                <Col>
                <Form.Control type="text" placeholder="Normal text" />
                </Col>
                <Col>
                </Col>
            </Row>



        </Container>

        <br/><br/>
        <Button  href='/' variant="outline-warning" size="lg">
        calificar puesto
        </Button>           

        </center>           
        </div>
    )
}


export default CalificarPuesto