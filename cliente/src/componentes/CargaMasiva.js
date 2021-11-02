import React from 'react';
import { Form,Button,InputGroup,FormControl} from 'react-bootstrap';
import Barra from './Barra'




const CargaMasiva = () => {



    return (
        <div>
            <Barra/>
            <br/><br/>

            <Form.Label htmlFor="basic-url">Ruta del archivo</Form.Label>
            <InputGroup className="mb-3">
                <InputGroup.Text id="basic-addon3">
                /home/adri/Escritorio
                </InputGroup.Text>
                <FormControl id="basic-url" aria-describedby="basic-addon3" />
            </InputGroup>

            <Form>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Ruta </Form.Label>
                </Form.Group>

                <Button  variant="outline-info" size="lg">
                    cargar archivo
                </Button>  

                
                <br/> <br/> <br/>
                <h2>Informacion del archivo convertido a json</h2>
                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">   
                <Form.Control as="textarea" rows={3} placeholder='hola'/> </Form.Group>
            </Form>

      




        </div>
    )





}




export default CargaMasiva