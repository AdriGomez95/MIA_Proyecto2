import React from 'react';
import { Form,Row,Col,Button,Container} from 'react-bootstrap';



const EliminarUsuario = () => {

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



            </Container>
            <br/><br/>
            <Button  href='/' variant="outline-danger" size="lg">
                eliminar usuario
            </Button>           
            
</center>
            
        </div>
    )
}

export default EliminarUsuario