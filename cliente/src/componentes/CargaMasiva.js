import React, {useState} from 'react';
import { Form,Button,InputGroup,FormControl} from 'react-bootstrap';
import Barra from './Barra';
import xmljs from 'xml2js';




const CargaMasiva = () => {
    let [texto, setTexto] = useState('')
    const [carga, setCarga] = useState({})
    let fileReader;


    const findFile = (evento) => {
        var lectura = evento.target.files[0];
        fileReader = new FileReader();
        fileReader.readAsText(lectura);
        fileReader.onloadend = readFile;
    }

    const readFile = (e) => {
        const datos = fileReader.result;
        setTexto(datos)
        xmljs.parseString(datos, (err, res) => {
            const json = JSON.stringify(res,null,4);
            const tojson = JSON.parse(json);
            setCarga(tojson);
            texto = tojson;
        });

    }

    const setBase = () => {
        console.log(carga);
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        var raw = JSON.stringify({
            "datosDeCarga": carga
        });

        var requesOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        };

        fetch("http://localhost:9000/cargaMS/CMS", requesOptions)

        setTexto('')
        setCarga({})
    }

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
                
                <Form.Group className="mb-3">
                    <Form.Label>Archivo </Form.Label>
                    <Form.Control type="file" id="file" acept='.xml' onChange={e=>findFile(e)}/>
                </Form.Group>




                <Button  variant="outline-info" size="lg" onClick={setBase}>
                    cargar archivo
                </Button>  

                
                <br/> <br/> <br/>
                <h2>Informacion del archivo convertido a json</h2>
                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">   
                <Form.Control as="textarea" rows={3} placeholder={texto}/> </Form.Group>
            </Form>

      




        </div>
    )





}




export default CargaMasiva