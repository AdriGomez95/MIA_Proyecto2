import React from 'react';
import { Row, Col, Container} from 'react-bootstrap';

import Barra from '../componentes/Barra'
import AplicanteDocs from '../componentes/AplicanteDocs'

import DocumentoModificar from '../componentes/DocumentoModificar'



const AplicanteEditarDocs = () => {
    return (
        <div>
            <Barra/>
            <AplicanteDocs/>

<Container>
    <Row>
        <Col>
            <DocumentoModificar/>
        </Col>
    </Row>
</Container>




            <br/><br/><br/><br/><br/><br/>
        </div>
    )
}


export default AplicanteEditarDocs