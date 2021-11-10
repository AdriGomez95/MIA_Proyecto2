import React, {useEffect, useRef} from 'react';
import { Form,Row,Col,Button, Accordion,Spinner,Container} from 'react-bootstrap';



const Login = () => {


  //referencias para jalar los datos del usuario
  const nombre = useRef()        //nombre del usuario
  const contrasenia = useRef()    //contrasenia del usuario
  const rol = useRef()    //contrasenia del usuario

  const Logear = async () => {
    let usuario1 = nombre.current.value
    let contrasenia1 = contrasenia.current.value
    let rol1 = rol.current.value
    let usu = {
                usuario: usuario1,
                contrasenia: contrasenia1,
                rol: rol1
            }
    console.log("usuario: " + usuario1)
    console.log("contrasenia: " + contrasenia1)
    console.log("rol: " + rol1)

    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    
    var a = JSON.stringify({
        "usuario": usu
    });

    var requesOptions = {
        method: 'POST',
        headers: myHeaders,
        body: a,
        redirect: 'follow'
    };

    fetch("http://localhost:9000/usuarios/login", requesOptions)
    .then(response => response.text())
    .then(result => console.log(result))
    .catch(error => console.log('error', error));

    alert('espere...')
    window.location='/'

  }

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
                      <Form.Control type="email" placeholder="Usuario" ref={nombre}  />
                    </Col>
                  </Form.Group>
                  <Form.Group as={Row} className="mb-3" controlId="formHorizontalPassword">
                    <Form.Label column sm={2}>
                      Password
                    </Form.Label>
                    <Col sm={10}>
                      <Form.Control type="password" placeholder="Password" ref={contrasenia}  />
                    </Col>
                  </Form.Group>
                  <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
                    <Form.Label column sm={2}>
                      Rol
                    </Form.Label>
                    <Col sm={10}>
                      <Form.Control type="email" placeholder="admin, aplicante, reclutador, coordinador" ref={rol}  />
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
                <Button onClick={Logear} variant="outline-primary" size="lg" >
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