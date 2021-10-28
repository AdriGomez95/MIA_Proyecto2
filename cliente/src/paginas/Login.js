import React from 'react';

import { Form,Row,Col,Button, Accordion,Spinner,Container} from 'react-bootstrap';


const Login = () => {
    return (
        <div class="p-5 mb-2 bg-info text-dark">
          <Container>





            <Row>
              <Spinner animation="grow" variant="warning" />
              <h1>Bienvenido a nuesta APP! Ingresa tus datos</h1>
              <br/><br/>
            </Row>



            <Row>
              <Col>
                <br/><br/>
                <Form>
                  <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
                    <Form.Label column sm={2}>
                      Usuario
                    </Form.Label>
                    <Col sm={10}>
                      <Form.Control type="email" placeholder="Usuario" />
                    </Col>
                  </Form.Group>
                  <Form.Group as={Row} className="mb-3" controlId="formHorizontalPassword">
                    <Form.Label column sm={2}>
                      Password
                    </Form.Label>
                    <Col sm={10}>
                      <Form.Control type="password" placeholder="Password" />
                    </Col>
                  </Form.Group>
                </Form>
                <br/><br/>
              </Col>




              <Col>
                <Accordion defaultActiveKey="0">
                  <Accordion.Item eventKey="0">
                    <Accordion.Header>Términos y condiciones</Accordion.Header>
                    <Accordion.Body>
                      Para poder ingresar, primero tienes que aplicar a una plaza para que uno de nuestros empleados pueda aceptar tu solicitud y poder brindarte tus credenciales.
                    </Accordion.Body>
                  </Accordion.Item>
                </Accordion>
              </Col>                    
            </Row>





            <Row>
              <div className="d-grid gap-2">
                <Button variant="outline-primary" size="lg">
                  iniciar
                </Button>
                <Button variant="outline-secondary" size="lg" href='/'>
                  volver
                </Button>
              </div>
              <br/><br/>
            </Row>





          </Container>
        </div>
    )
}


export default Login