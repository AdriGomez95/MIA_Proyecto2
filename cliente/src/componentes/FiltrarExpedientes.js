import React, {useState,useEffect} from 'react';
import { MDBDataTableV5 } from 'mdbreact';
import { Button } from 'react-bootstrap';



const FiltrarExpedientes = () => {

    const [datatable, setDatatable] = useState({});

    

    useEffect(() => {
        const columns = [
            {
            label: 'Nombres',
            field: 'nombre',
            width: 150,
            attributes: {
                'aria-controls': 'DataTable',
                'aria-label': 'Nombres',
            },
            },
            {
            label: 'Apellidos',
            field: 'apellido',
            width: 200,
            },
            {
            label: 'Password',
            field: 'pass',
            width: 200,
            },
            {
            label: 'DPI',
            field: 'dpi',
            width: 200,
            },
            {
            label: 'Correo',
            field: 'correo',
            width: 200,
            },
            {
            label: 'Direccion',
            field: 'direccion',
            width: 200,
            },
            {
            label: 'Telefono',
            field: 'telefono',
            width: 200,
            },
            {
            label: 'Aceptar expediente',
            field: 'aceptar',
            width: 200,
            },
            {
            label: 'Rechazar expediente',
            field: 'rechazar',
            width: 200,
            }
        ]
        
        var formdata = new FormData();
        var requestOptions = {
            method: 'GET',
            data: formdata,
            redirect: 'follow'
        };

        fetch("http://localhost:9000/usuarios/expedientes", requestOptions)
        .then(response => response.json())
        .then(result => {
                    var filas = result.map((e)=>{
                        if(e.estado !== ''){
                            return{...e,aceptar:<Button variant="warning" onClick={()=>{aceptado(e)}}>
                                Aceptar
                            </Button>,rechazar:<Button variant="danger" onClick={()=>{rechazado(e)}}>
                                Rechazar
                            </Button>}
                        }else{
                            return false
                        }

                        
                })
            setDatatable({columns:columns,rows:filas})
        })
        .catch(error => console.log('error', error));

    },[])

    const aceptado = (datatable) => {

        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        let aplic = {
            usuario: datatable.nombre,
            apellido: datatable.apellido,
            contrasenia: datatable.pass,
            dpi: datatable.dpi,
            correo: datatable.correo,
            direccion: datatable.direccion,
            telefono: datatable.telefono
        }
        console.log(aplic)
        var a = JSON.stringify({
            "aplic": aplic
        });

        var requesOptions = {
            method: 'POST',
            headers: myHeaders,
            body: a,
            redirect: 'follow'
        };

        fetch("http://localhost:9000/usuarios/mensaje_aceptaExpediente", requesOptions)
        .then(response => response.text())
        .then(result => console.log(result))
        .catch(error => console.log('error', error));

        alert(' mensaje enviado :)');
    }





    const rechazado = (datatable) => {

        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        let aplic = {
            usuario: datatable.nombre,
            apellido: datatable.apellido,
            contrasenia: datatable.pass,
            dpi: datatable.dpi,
            correo: datatable.correo,
            direccion: datatable.direccion,
            telefono: datatable.telefono
        }
        console.log(aplic)
        var a = JSON.stringify({
            "aplic": aplic
        });

        var requesOptions = {
            method: 'POST',
            headers: myHeaders,
            body: a,
            redirect: 'follow'
        };

        fetch("http://localhost:9000/usuarios/mensaje_rechazaExpediente", requesOptions)
        .then(response => response.text())
        .then(result => console.log(result))
        .catch(error => console.log('error', error));

        alert(' mensaje enviado :)');
    }



    return (
        <div>
            <br/><br/>
            <center>
                <h1 className="h1">Listado de expedientes</h1>                    
            </center>
            <br/><br/>

          
            <br/><br/>
            <MDBDataTableV5 hover entriesOptions={[5, 20, 25]} entries={5} pagesAmount={4} data={datatable} searchTop searchBottom={false} />;
    

            

        </div>
    )
}


export default FiltrarExpedientes