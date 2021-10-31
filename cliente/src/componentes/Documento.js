import React from 'react';
import { Form, Button } from 'react-bootstrap';



const Documento = () => {
    return (
        <div>            
            <br/><br/>
            <h1 className="h1">Sube tu documento</h1> 
                        
            <Button  href='/' variant="outline-warning" size="lg">
                enviar documento
            </Button>  
            <br/><br/>
                    




            <Form.Label column lg={2}>
                Nombre del documento
            </Form.Label>                   
            <Form.Control type="text" placeholder="Normal text" />
                   
            <Form.Label column lg={2}>
                Link
            </Form.Label>                    
            <Form.Control type="password" placeholder="Normal text" />
                   
            <Form.Label column lg={2}>
                Formato
            </Form.Label>                    
            <Form.Control type="password" placeholder="Normal text" />
                   


                   
                       

        </div>
    )
}

export default Documento