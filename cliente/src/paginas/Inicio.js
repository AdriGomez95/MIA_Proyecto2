//import React, {useEffect, useState}  from 'react';
import React, {useEffect, useState}  from 'react';
import Carrusel from '../componentes/Carrusel'
import Barra from '../componentes/Barra'
import FiltraPlazas from '../componentes/FiltraPlazas'
import VerUsuarios from '../componentes/VerUsuarios'



const Inicio = () => {
    const [usuario_logueado, setUsuario_logueado] = useState(undefined)


    useEffect(() => {
        var formdata = new FormData();
        var requestOptions = {
            method: 'GET',
            headers: formdata,
            redirect: 'follow'
        };

        fetch("http://localhost:9000/usuario_logueado", requestOptions)
        .then(response => response.json())
        .then(result => setUsuario_logueado(result))
        .catch(error => console.log('error', error));

    },[])




    if(usuario_logueado !== undefined)
    {
        if(usuario_logueado.rol === "admin"){
            return (
                <div>
                    <Barra/>
                    <br/><br/><br/>
                    <center><h1>Bienvenido admin</h1></center>
                    <VerUsuarios/>
                </div>
            )
        }else{
            return (
                <div>
                    <Barra/>
                    <Carrusel/>
                    <FiltraPlazas/>
                </div>
            )

        }
    }else{
        return (
            <div>
                <Barra/>
                <Carrusel/>
                <FiltraPlazas/>
            </div>
        )
        
    }
}


export default Inicio