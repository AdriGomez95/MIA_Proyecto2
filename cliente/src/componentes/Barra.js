import React, {useEffect, useState} from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';





const Barra = () => {
    const [usuario_logueado, setUsuario_logueado] = useState(undefined)


    useEffect(() => {
        var formdata = new FormData();
        var requestOptions = {
            method: 'GET',
            data: formdata,
            redirect: 'follow'
        };

        fetch("http://localhost:9000/usuarios/usuario_logueado", requestOptions)
        .then(response => response.json())
        .then(result => setUsuario_logueado(result))
        .catch(error => console.log('error', error));

    },[])


    const sale = () =>{
        var formdata = new FormData();
        var requestOptions = {
            method: 'GET',
            data: formdata,
            redirect: 'follow'
        };

        fetch("http://localhost:9000/usuarios/limpiar_logueo", requestOptions)
        .then(response => response.json())
        .then(result => setUsuario_logueado(result))
        .catch(error => console.log('error', error));


    }





    if(usuario_logueado !== undefined)
    {

        // ES EL ADMINISTRADOR   
        if ( usuario_logueado.rol === "admin" ){
            return (
                <div>
                    <Navbar bg="primary" variant="dark">
                        <Container>
                            <Nav className="me-auto">
                                <h1>admin</h1>
                                <Nav.Link href="/">principal</Nav.Link>
                                <Nav.Link href="/carga_masiva">carga masiva</Nav.Link>
                                <Nav.Link href="/crear_usuario">crear usuarios</Nav.Link>
                                <Nav.Link href="/editar_usuario">editar usuarios</Nav.Link>
                                <Nav.Link href="/eliminar_usuario">eliminar usuarios</Nav.Link>
                                <Nav.Link href="/mensaje">mensajes</Nav.Link>
                                <Nav.Link onClick={sale} href="/">cerrar sesion</Nav.Link>
                            </Nav>
                        </Container>
                    </Navbar>
        
                </div>
            )



        // ES APLICANTE   
        }else if ( usuario_logueado.rol === "aplicante" ){
            return (
                <div>
                    <Navbar bg="primary" variant="dark">
                        <Container>
                            <Nav className="me-auto">
                                <h1>aplicante</h1>
                                <Nav.Link href="/">principal</Nav.Link>
                                <Nav.Link href="/aplicar">postular a trabajo</Nav.Link>
                                <Nav.Link href="/calificar_puesto">calificar puesto</Nav.Link>
                                <Nav.Link href="/mensaje">mensajeria</Nav.Link>
                                <Nav.Link href="/" onClick={sale}>cerrar sesion</Nav.Link>
                            </Nav>
                        </Container>
                    </Navbar>
                </div>
            )

        


        // ES RECLUTADOR O REVISOR DE EXPEDIENTES   
        }else if ( usuario_logueado.rol === "reclutador" ){
            return (
                <div>
                    <Navbar bg="primary" variant="dark">
                        <Container>
                            <Nav className="me-auto">
                                <h1>revisior expedientes</h1>
                                <Nav.Link href="/">principal</Nav.Link>
                                <Nav.Link href="/revisar_aplicantes">aceptar/rechazar aplicantes</Nav.Link>
                                <Nav.Link href="/revisar_documentos">aceptar/rechazar documentos</Nav.Link>
                                <Nav.Link href="/mensaje">Mensajeria</Nav.Link>
                                <Nav.Link href="/" onClick={sale}>cerrar sesion</Nav.Link>
                            </Nav>
                        </Container>
                    </Navbar>
                </div>
            )

        

        


        // ES COORDINADOR
        }else if ( usuario_logueado.rol === "coordinador" ){
            return (
                <div>
                    <Navbar bg="primary" variant="dark">
                        <Container>
                            <Nav className="me-auto">
                                <h1>coordinador</h1>
                                <Nav.Link href="/">principal</Nav.Link>
                                <Nav.Link href="/administrar_planilla">administrar planilla</Nav.Link>
                                <Nav.Link href="/mensaje">Mensajeria</Nav.Link>
                                <Nav.Link href="/" onClick={sale}>cerrar sesion</Nav.Link>
                            </Nav>
                        </Container>
                    </Navbar>
                </div>
            )

        

        


        //ERROR  
        }else{
            return (
                <div>
                    <Navbar bg="primary" variant="dark">
                        <Container>
                            <Nav className="me-auto">
                                <h1>guest default</h1>
                                <Nav.Link href="/">principal</Nav.Link>
                                <Nav.Link href='/login'>iniciar sesion</Nav.Link>
                                <Nav.Link href="/aplicar">postular a trabajo</Nav.Link>
                                <Nav.Link href='/calificar_puesto'>calificar puesto</Nav.Link>
                            </Nav>
                        </Container>
                    </Navbar>
        
                </div>
            )

        }







    // ES UN USUARIO GUEST Y NO ESTA LOGUEADO  
    } else {
        return (
            <div>
                <Navbar bg="primary" variant="dark">
                    <Container>
                        <Nav className="me-auto">
                            <h1>guest</h1>
                            <Nav.Link href="/">principal</Nav.Link>
                            <Nav.Link href='/login'>iniciar sesion</Nav.Link>
                            <Nav.Link href="/aplicar">postular a trabajo</Nav.Link>
                            <Nav.Link href='/calificar_puesto'>calificar puesto</Nav.Link>
                        </Nav>
                    </Container>
                </Navbar>
    
            </div>
        )
    }



}


export default Barra
