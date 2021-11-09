import React, {useState,useEffect} from 'react';
import { MDBDataTableV5 } from 'mdbreact';
import { Button } from 'react-bootstrap';


const VerUsuarios = () => {
    const [datatable, setDatatable] = useState({});

    

    useEffect(() => {
        const columns = [
            {
            label: 'Usuario',
            field: 'usuario',
            width: 150,
            attributes: {
                'aria-controls': 'DataTable',
                'aria-label': 'Usuario',
            },
            },
            {
            label: 'Password',
            field: 'password',
            width: 200,
            },
            {
            label: 'Fecha inicio',
            field: 'fecha_inicio',
            sort: 'disabled',
            width: 100,
            },
            {
            label: 'Fecha fin',
            field: 'fecha_fin',
            sort: 'disabled',
            width: 150,
            },
            {
            label: 'Estado',
            field: 'estado',
            sort: 'disabled',
            width: 150,
            },
            {
            label: 'Rol',
            field: 'rol',
            width: 270,
            },
            {
            label: 'Departamento',
            field: 'departamento',
            sort: 'disabled',
            width: 100,
            }
        ]
        
        var formdata = new FormData();
        var requestOptions = {
            method: 'GET',
            data: formdata,
            redirect: 'follow'
        };

        fetch("http://localhost:9000/usuarios/listado_empleados", requestOptions)
        .then(response => response.json())
        .then(result => setDatatable({columns:columns,rows:result}))
        .catch(error => console.log('error', error));

    },[])


    return (

        <div>

            {/* ENCABEZADO Y RATON */}
            <br/><br/>
            <br/><br/>
            <h4>Usuarios en la base de datos</h4> 
            <Button  href='/' variant="outline-warning" size="lg">
                cargar de nuevo
            </Button>              
            <br/><br/>
            <MDBDataTableV5 hover entriesOptions={[5, 20, 25]} entries={5} pagesAmount={4} data={datatable} searchTop searchBottom={false} />;
    

        </div>
    )
}

export default VerUsuarios