import React from 'react';

import Inicio from '../paginas/Inicio'
import Login from '../paginas/Login'
import Aplicar from '../paginas/Aplicar'

import AdminCreaUsuario from '../paginas/AdminCreaUsuario'
import AdminEditaUsuario from '../paginas/AdminEditaUsuario'
import AdminEliminaUsuario from '../paginas/AdminEliminaUsuario'                                       
import CoordinadorPlanilla from '../paginas/CoordinadorPlanilla'
                                       
import PagMensaje from '../paginas/PagMensaje'
import RevisarDocumentos from '../paginas/RevisarDocumentos'
import RevisarAplicantes from '../paginas/RevisarAplicantes'
                                         

import CargaMasiva from '../componentes/CargaMasiva'


import CalificarPuesto from '../paginas/CalificarPuesto'
import EnviaCorreo from '../componentes/EnviaCorreo'

import {
    BrowserRouter as Router,
    Switch,
    Route,
    //Link
  } from "react-router-dom";
  

const Rutas = () => {
    return (
        <Router>
            <Switch>
                <Route exact path='/' component={()=> <Inicio/>}>
                </Route>
                <Route exact path='/carga_masiva' component={()=> <CargaMasiva/>}>
                </Route>
                <Route exact path='/login' component={()=> <Login/>}>
                </Route>
                <Route exact path='/aplicar' component={()=> <Aplicar/>}>
                </Route>
                <Route exact path='/crear_usuario' component={()=> <AdminCreaUsuario/>}>
                </Route>
                <Route exact path='/editar_usuario' component={()=> <AdminEditaUsuario/>}>
                </Route>
                <Route exact path='/eliminar_usuario' component={()=> <AdminEliminaUsuario/>}>
                </Route>
                <Route exact path='/administrar_planilla' component={()=> <CoordinadorPlanilla/>}>
                </Route>
                <Route exact path='/mensaje' component={()=> <PagMensaje/>}>
                </Route>
                <Route exact path='/revisar_documentos' component={()=> <RevisarDocumentos/>}>
                </Route>
                <Route exact path='/revisar_aplicantes' component={()=> <RevisarAplicantes/>}>
                </Route>
                <Route exact path='/calificar_puesto' component={()=> <CalificarPuesto/>}>
                </Route>
                <Route exact path='/envia_correo' component={()=> <EnviaCorreo/>}>
                </Route>
            </Switch>
        </Router>
    )
}


  




export default Rutas