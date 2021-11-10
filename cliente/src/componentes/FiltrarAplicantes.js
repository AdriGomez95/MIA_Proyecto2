import React, {useState,useEffect} from 'react';
import { MDBDataTableV5 } from 'mdbreact';
import { Button } from 'react-bootstrap';



const FiltrarAplicantes = () => {
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
            }
        ]
        
        var formdata = new FormData();
        var requestOptions = {
            method: 'GET',
            data: formdata,
            redirect: 'follow'
        };

        fetch("http://localhost:9000/usuarios/aplicantes", requestOptions)
        .then(response => response.json())
        .then(result => {
                    var filas = result.map((e)=>{
                        if(e.estado !== ''){
                            return{...e,aceptar:<Button variant="warning" onClick={()=>{contratado(e)}}>
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

    const contratado = (datatable) => {

        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        
        var a = JSON.stringify({
            "aplic": datatable
        });

        var requesOptions = {
            method: 'PUT',
            headers: myHeaders,
            body: a,
            redirect: 'follow'
        };

        fetch("http://localhost:9000/usuarios/modificar_planillaAplicante", requesOptions)
        .then(response => response.text())
        .then(result => console.log(result))
        .catch(error => console.log('error', error));

        alert(datatable.nombre + ' ahora esta contratado!');
    }




    const rechazado = (datatable) => {

        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        
        var a = JSON.stringify({
            "aplic": datatable
        });

        var requesOptions = {
            method: 'PUT',
            headers: myHeaders,
            body: a,
            redirect: 'follow'
        };

        fetch("http://localhost:9000/usuarios/modificar_planillaAplicante2", requesOptions)
        .then(response => response.text())
        .then(result => console.log(result))
        .catch(error => console.log('error', error));

        alert(datatable.nombre + ' ha sido rechazado!');
    }



    return (
        <div>
            <br/><br/>
            <center>
                <h1 className="h1">Listado de aplicantes</h1>                    
            </center>
            <br/><br/>

          
            <br/><br/>
            <MDBDataTableV5 hover entriesOptions={[5, 20, 25]} entries={5} pagesAmount={4} data={datatable} searchTop searchBottom={false} />;
    

            

        </div>
    )
}



export default FiltrarAplicantes