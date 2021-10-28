import React, {useEffect, useState} from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';





const Barra = () => {
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
                    <Navbar bg="primary" variant="dark">
                        <Container>
                            <Nav className="me-auto">
                                <Nav.Link href="/">Principal</Nav.Link>
                                <Nav.Link href="#">Carga masiva</Nav.Link>
                                <Nav.Link href="#">crear usuarios</Nav.Link>
                                <Nav.Link href="#">editar usuarios</Nav.Link>
                                <Nav.Link href="#">eliminar usuarios</Nav.Link>
                                <Nav.Link href='#'>Salir</Nav.Link>
                            </Nav>
                        </Container>
                    </Navbar>
        
                </div>
            )

        }else{
            return (
                <div>
                    <Navbar bg="primary" variant="dark">
                        <Container>
                            <Nav className="me-auto">
                                <Nav.Link href="/">Principal</Nav.Link>
                                <Nav.Link href='/login'>Iniciar sesion</Nav.Link>
                                <Nav.Link href="#">Cerrar sesion</Nav.Link>
                                <Nav.Link href="/aplicar">Postular a trabajo</Nav.Link>
                            </Nav>
                        </Container>
                    </Navbar>
                </div>
            )

        }


    // ES UN USUARIO GUEST    
    } else {
        return (
            <div>
                <Navbar bg="primary" variant="dark">
                    <Container>
                        <Nav className="me-auto">
                            <Nav.Link href="/">Principal</Nav.Link>
                            <Nav.Link href='/login'>Iniciar sesion</Nav.Link>
                            <Nav.Link href="/aplicar">Postular a trabajo</Nav.Link>
                        </Nav>
                    </Container>
                </Navbar>
    
            </div>
        )
    }



}


export default Barra
