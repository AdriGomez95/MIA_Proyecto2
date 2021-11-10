import React, {useState,useEffect} from 'react';
import { MDBDataTableV5 } from 'mdbreact';



const AplicanteExpediente = () => {

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
        .then(result => setDatatable({columns:columns,rows:result}))
        .catch(error => console.log('error', error));

    },[])




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


export default AplicanteExpediente