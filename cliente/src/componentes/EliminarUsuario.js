import React, {useRef} from 'react';
import { Form,Row,Col,Button,Container} from 'react-bootstrap';



const EliminarUsuario = () => {



    //referencias para jalar los datos del usuario
    const nombre = useRef()     //nombre del usuario


    //metodo para mandar con el backend
    const EliminarUsuario = async () => {
        let usuario = nombre.current.value
        let emp = {
                    usuario: usuario,
                }
        //console.log("usuario: " + usuario)

        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        
        var a = JSON.stringify({
            "empleado": emp
        });

        var requesOptions = {
            method: 'PUT',
            headers: myHeaders,
            body: a,
            redirect: 'follow'
        };

        fetch("http://localhost:9000/usuarios/eliminar_empleado", requesOptions)
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
                    <Form.Control type="text" placeholder="Normal text" ref={nombre}  />
                    </Col>
                    <Col>
                    </Col>
                </Row>



            </Container>
            <br/><br/>
            <Button  onClick={EliminarUsuario}  variant="outline-danger" size="lg">
                eliminar usuario
            </Button>           
            
</center>
            
        </div>
    )
}

export default EliminarUsuario