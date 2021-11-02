import React, {useEffect, useState}  from 'react';
import Carrusel from '../componentes/Carrusel'
import Barra from '../componentes/Barra'
import FiltraPlazas from '../componentes/FiltraPlazas'
import VerUsuarios from '../componentes/VerUsuarios.js'



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
        // ES EL ADMINISTRADOR   
        if(usuario_logueado.rol === "admin"){
            return (
                <div>
                    <Barra/>
                    <br/><br/><br/>
                    <center><h1>Bienvenido admin</h1></center>
                    <VerUsuarios/>
                </div>
            )

        // ES APLICANTE   
        }else if ( usuario_logueado.rol === "aplicante" ){
            return (
                <div>
                    <Barra/>
                    <Carrusel/>
                    <FiltraPlazas/>
                </div>
            )

        
        // ES RECLUTADOR O REVISOR DE EXPEDIENTES   
        }else  if ( usuario_logueado.rol === "reclutador" ){
            return (
                <div>
                    <Barra/>
                    <br/><br/>
                    <center>
                        <h1>¡Bienvenido reclutador/revisor!</h1>
                    </center>
                </div>
            )

        


        // ES COORDINADOR  
        }else  if ( usuario_logueado.rol === "coordinador" ){
            return (
                <div>
                    <Barra/>
                    <br/><br/>
                    <center>
                        <h1>¡Bienvenido coordinador!</h1>
                    </center>
                </div>
            )

        }





    // ES UN USUARIO GUEST Y NO ESTA LOGUEADO  
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