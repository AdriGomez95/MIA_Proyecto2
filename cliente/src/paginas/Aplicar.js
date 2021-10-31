import React from 'react';
import { Row, Col, Container} from 'react-bootstrap';

import Barra from '../componentes/Barra'
import FiltraPlazas from '../componentes/FiltraPlazas'
import FormularioDoc from '../componentes/FormularioDoc'
import Documento from '../componentes/Documento'



const Aplicar = () => {
    return (
        <div>
            <Barra/>
            <FiltraPlazas/>

            <Container>
                <Row>
                    <Col>
                        <FormularioDoc/>
                    </Col>
                    <Col>
                        <Documento/>
                    </Col>
                </Row>
            </Container>




            <br/><br/><br/><br/><br/><br/>
        </div>
    )
}


export default Aplicar