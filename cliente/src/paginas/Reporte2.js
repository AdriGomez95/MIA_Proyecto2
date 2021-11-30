
import Barra from '../componentes/Barra'
import React, {useState,useEffect} from 'react';
import { MDBDataTableV5 } from 'mdbreact';


const Reporte2 = () => {
    const [datatable, setDatatable] = useState({});

    

    useEffect(() => {
        const columns = [
            {
            label: 'Nombre del departamento',
            field: 'departamento',
            width: 150,
            attributes: {
                'aria-controls': 'DataTable',
                'aria-label': 'Nombre del puesto',
            },
            },
            {
            label: 'Nombre del puesto',
            field: 'puesto',
            width: 200,
            },
            {
            label: 'Estado de su planilla',
            field: 'estado',
            width: 200,
            },
            {
            label: 'Nombre del aplicante',
            field: 'aplicante',
            width: 200,
            }
        ]
        
        var formdata = new FormData();
        var requestOptions = {
            method: 'GET',
            data: formdata,
            redirect: 'follow'
        };

        fetch("http://localhost:9000/ListadoPuestos/listado_puestosreporte2", requestOptions)
        .then(response => response.json())
        .then(result => setDatatable({columns:columns,rows:result}))
        .catch(error => console.log('error', error));

    },[])
    return (
        <div>
        <Barra/>
            <br/><br/>
            <h1 className="h1">Reporte de planilla de todos los departamentos y 1 en especifico </h1>                    
            <br/><br/>

          
            <br/><br/>
            <MDBDataTableV5 hover entriesOptions={[5, 20, 25]} entries={5} pagesAmount={4} data={datatable} searchTop searchBottom={false} />;
    
        
        </div>
    )
}


export default Reporte2