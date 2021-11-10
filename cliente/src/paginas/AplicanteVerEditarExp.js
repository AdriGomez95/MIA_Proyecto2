import React from 'react';
import { Row, Col, Container} from 'react-bootstrap';

import Barra from '../componentes/Barra'
import AplicanteExpediente from '../componentes/AplicanteExpediente'
import AplicanteExpForm from '../componentes/AplicanteExpForm'



const AplicanteVerEditarExp = () => {
    return (
        <div>
            <Barra/>
            <AplicanteExpediente/>

            <Container>
                <Row>
            
            <AplicanteExpForm/>
                </Row>
            </Container>




            <br/><br/><br/><br/><br/><br/>
        </div>
    )
}


export default AplicanteVerEditarExp