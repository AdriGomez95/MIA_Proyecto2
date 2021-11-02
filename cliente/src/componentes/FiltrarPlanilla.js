import React, {useState,useEffect} from 'react';
import { MDBDataTableV5 } from 'mdbreact';
import { Button } from 'react-bootstrap';



const FiltrarPlanilla = () => {
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
            label: 'Puesto',
            field: 'puesto',
            width: 200,
            },
            {
            label: 'Salario',
            field: 'salario',
            width: 200,
            },
            {
            label: 'Estado',
            field: 'estado',
            width: 200,
            },
            {
            label: 'Aceptar',
            field: 'aceptar',
            width: 200,
            },
            {
            label: 'Rechazar',
            field: 'rechazar',
            width: 200,
            },
            {
            label: 'Despedir',
            field: 'despedir',
            width: 200,
            }
        ]
        
        var formdata = new FormData();
        var requestOptions = {
            method: 'GET',
            data: formdata,
            redirect: 'follow'
        };

        fetch("http://localhost:9000/aplicantes", requestOptions)
        .then(response => response.json())
        .then(result => {
                    var filas = result.map((e)=>{
                        if(e.estado !== ''){
                            return{...e,aceptar:<Button variant="success" onClick={()=>{contratado(e)}}>
                                Aceptar
                            </Button>,rechazar:<Button variant="warning" onClick={()=>{rechazado(e)}}>
                                Rechazar
                            </Button>,despedir:<Button variant="danger" onClick={()=>{rechazado(e)}}>
                                Despedir
                            </Button>}
                        }else{
                            return false
                        }

                        
                })
            setDatatable({columns:columns,rows:filas})
        })
        .catch(error => console.log('error', error));

    },[])

    const contratado = (datatable) => {
        alert(datatable.nombre + ' ahora esta contratado!');
    }
    const rechazado = (datatable) => {
        alert(datatable.nombre + ' ha sido rechazado!');
    }



    return (
        <div>
            <br/><br/>
            <center>
                <h1 className="h1">Listado de planilla</h1>                    
            </center>
            <br/><br/>

          
            <br/><br/>
            <MDBDataTableV5 hover entriesOptions={[5, 20, 25]} entries={5} pagesAmount={4} data={datatable} searchTop searchBottom={false} />;
    

            

        </div>
    )
}



export default FiltrarPlanilla