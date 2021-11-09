import React, {useEffect, useState, useRef}  from 'react';
import { Form,Row,Col,Button,Container} from 'react-bootstrap';



const CalificacionPuesto = () => {
    const [puesto, setPuestos] = useState([])


    useEffect(() => {
        var formdata = new FormData();
        var requestOptions = {
            method: 'GET',
            data: formdata,
            redirect: 'follow'
        };

        fetch("http://localhost:9000/ListadoPuestos/puestitoscalif", requestOptions)
        .then(response => response.json())
        .then(result => setPuestos(result))
        .catch(error => console.log('error', error));

    },[])



    //referencias para jalar los datos del usuario
    const puest = useRef()     //nombre del usuario
    const calif = useRef()       //password del usuario

    //metodo para mandar con el backend
    const NuevaCalif = async () => {
        let puesto = puest.current.value
        let calificacion = calif.current.value
        let emp = {
                    puesto: puesto,
                    calificacion: calificacion,
                }

        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        
        var a = JSON.stringify({
            "puestito": emp
        });

        var requesOptions = {
            method: 'POST',
            headers: myHeaders,
            body: a,
            redirect: 'follow'
        };

        fetch("http://localhost:9000/ListadoPuestos/cp_cp", requesOptions)
        .then(response => response.text())
        .then(result => console.log(result))
        .catch(error => console.log('error', error));

    }







    return (
        <div>
            <center>
            <br/><br/>
            <Container>


            <br/><br/>
            <h1 className="h1">Califica un puesto</h1>                    
            <br/><br/>

                <Row>
                    <Form.Label column lg={2}>
                    calificacion en numero
                    </Form.Label>
                    <Col>
                    <Form.Control type="text" placeholder="Normal text" ref={calif} />
                    </Col>
                    <Col>
                    </Col>
                </Row>
                <Row>
                    <Form.Label column lg={2}>
                    puesto
                    </Form.Label>
                    <Col>
                    <Form.Group controlId="formGridState">
                        <Form.Select defaultValue="Choose..." ref={puest} >
                            {
                                puesto.map((option,index) => {
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
            <Button  onClick={NuevaCalif}  variant="outline-info" size="lg">
                Calificar
            </Button>           
            
</center>
            
        </div>
    )
}



export default CalificacionPuesto