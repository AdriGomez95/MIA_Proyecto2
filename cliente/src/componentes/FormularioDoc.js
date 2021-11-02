import React from 'react';
import { Form, Button } from 'react-bootstrap';




const FormularioDoc = () => {


    return (
        <div>            
            <br/><br/>
            <h1 className="h1">Llena el formulario</h1> 
                        
            <Button  href='/' variant="outline-warning" size="lg">
                enviar formulario
            </Button>  
            <br/><br/>
                    




            <Form.Label column lg={2}>
                Nombre del puesto
            </Form.Label>                   
            <Form.Control type="text" placeholder="Normal text" />

            <Form.Label column lg={2}>
                DPI
            </Form.Label>                   
            <Form.Control type="text" placeholder="Normal text" />
                   
            <Form.Label column lg={2}>
                Password
            </Form.Label>                    
            <Form.Control type="password" placeholder="Password" />
                   
            <Form.Label column lg={2}>
                Nombres
            </Form.Label>                   
            <Form.Control type="text" placeholder="Normal text" />
                   
            <Form.Label column lg={2}>
                Apellidos
            </Form.Label>                   
            <Form.Control type="text" placeholder="Normal text" />
                   
            <Form.Label column lg={2}>
                Correo
            </Form.Label>                   
            <Form.Control type="text" placeholder="Normal text" />
                   
            <Form.Label column lg={2}>
                Direccion
            </Form.Label>                   
            <Form.Control type="text" placeholder="Normal text" />
                   
            <Form.Label column lg={2}>
                Telefono
            </Form.Label>                   
            <Form.Control type="text" placeholder="Normal text" />
                   








        </div>
    )
}

export default FormularioDoc