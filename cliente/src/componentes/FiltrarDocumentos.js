import React, {useState,useEffect} from 'react';
import { MDBDataTableV5 } from 'mdbreact';
import { Button } from 'react-bootstrap';



const FiltrarDocumentos = () => {
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
            label: 'Estado',
            field: 'estado',
            width: 200,
            },
            {
            label: 'Motivo de rechazo',
            field: 'motivo',
            width: 200,
            },
            {
            label: 'Conteo de rechazos',
            field: 'rechazos',
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
            label: 'Descargar',
            field: 'descargar',
            width: 200,
            }
        ]
        
        var formdata = new FormData();
        var requestOptions = {
            method: 'GET',
            data: formdata,
            redirect: 'follow'
        };

        fetch("http://localhost:9000/documentos", requestOptions)
        .then(response => response.json())
        .then(result => {
                    var filas = result.map((e)=>{
                        if(e.estado !== ''){
                            return{...e,aceptar:<Button variant="warning" onClick={()=>{contratado(e)}}>
                                Aceptar
                            </Button>,rechazar:<Button variant="danger" onClick={()=>{rechazado(e)}}>
                                Rechazar
                            </Button>,descargar:<Button variant="success" onClick={()=>{descargar(e)}}>
                                Descargar
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
        alert('El documento ' + datatable.nombre + ' ha sido aceptado');
    }
    const rechazado = (datatable) => {
        alert('El documento ' + datatable.nombre + ' ha sido rechazado');
    }
    const descargar = (datatable) => {
        alert('Se ha descargado con exito el documento ' + datatable.nombre );
    }



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



export default FiltrarDocumentos