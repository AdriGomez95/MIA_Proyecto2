import React, {useState,useEffect} from 'react';
import { MDBDataTableV5 } from 'mdbreact';
import { Button } from 'react-bootstrap';



const AplicanteDocs = () => {
    const [datatable, setDatatable] = useState({});

    

    useEffect(() => {
        const columns = [
            {
            label: 'Nombre documento',
            field: 'nombre',
            width: 150,
            attributes: {
                'aria-controls': 'DataTable',
                'aria-label': 'Nombres',
            },
            },
            {
            label: 'Nombre aplicante',
            field: 'aplicante',
            width: 200,
            },
            {
            label: 'Estado',
            field: 'estado',
            width: 200,
            },
            {
            label: 'Conteo de rechazos',
            field: 'rechazos',
            width: 200,
            },
            {
            label: 'Formato',
            field: 'formato',
            width: 200,
            },
            {
            label: 'Link',
            field: 'link',
            width: 200,
            }
        ]
        
        var formdata = new FormData();
        var requestOptions = {
            method: 'GET',
            data: formdata,
            redirect: 'follow'
        };

        fetch("http://localhost:9000/Documentos/filtra_docsAplicante", requestOptions)
        .then(response => response.json())
        .then(result => setDatatable({columns:columns,rows:result}))        
        .catch(error => console.log('error', error));

    },[])


    return (
        <div>
            <br/><br/>
            <center>
                <h1 className="h1">Listado de documentos</h1>                    
            </center>
            <br/><br/>

          
            <br/><br/>
            <MDBDataTableV5 hover entriesOptions={[5, 20, 25]} entries={5} pagesAmount={4} data={datatable} searchTop searchBottom={false} />;
    

            

        </div>
    )
}



export default AplicanteDocs