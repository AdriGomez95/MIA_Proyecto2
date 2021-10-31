import React from 'react';
import { Form,Button} from 'react-bootstrap';
import Barra from './Barra'




/*


    const rutaArchivo = useRef()
    const cargadoArchivo = useRef()


                <Form.Group className="mb-3" controlId="exampleForm.ControlTextArea1">
                    <Form.Label>Archivo cargado </Form.Label>
                    <Form.Control as="textarea" rows={3} ref={cargadoArchivo}/>

                </Form.Group>

*/



const CargaMasiva = () => {

    

    return (
        <div>
            <Barra/>
            <br/><br/>



            <Form>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Ruta </Form.Label>
                    <Form.Control type="email" />

                </Form.Group>
                <Button  variant="outline-info" size="lg">
                    cargar archivo
                </Button>     
            </Form>




        </div>
    )





}




export default CargaMasiva