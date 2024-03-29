import React from 'react';

import Inicio from '../paginas/Inicio'
import Login from '../paginas/Login'
import Aplicar from '../paginas/Aplicar'

import AdminCreaUsuario from '../paginas/AdminCreaUsuario'
import AdminEditaUsuario from '../paginas/AdminEditaUsuario'
import AdminEliminaUsuario from '../paginas/AdminEliminaUsuario'                                       
import CoordinadorPlanilla from '../paginas/CoordinadorPlanilla'
                                       
import PagMensaje from '../paginas/PagMensaje'
import PagMensaje2 from '../paginas/PagMensaje2'
import RevisarDocumentos from '../paginas/RevisarDocumentos'
import RevisarAplicantes from '../paginas/RevisarAplicantes'
                                         

import CargaMasiva from '../componentes/CargaMasiva'


import CalificarPuesto from '../paginas/CalificarPuesto'
import RevisarExpedientes from '../paginas/RevisarExpedientes'

import AplicanteVerEditarExp from '../paginas/AplicanteVerEditarExp'
import AplicanteEditarDocs from '../paginas/AplicanteEditarDocs'
import Reporte2 from '../paginas/Reporte2'
import Reporte1 from '../paginas/Reporte1'
import Reporte5 from '../paginas/Reporte5'
import Reporte4 from '../paginas/Reporte4'

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
                <Route exact path='/mensaje2' component={()=> <PagMensaje2/>}>
                </Route>
                <Route exact path='/revisar_documentos' component={()=> <RevisarDocumentos/>}>
                </Route>
                <Route exact path='/revisar_aplicantes' component={()=> <RevisarAplicantes/>}>
                </Route>
                <Route exact path='/calificar_puesto' component={()=> <CalificarPuesto/>}>
                </Route>
                <Route exact path='/filtra_expedientes' component={()=> <RevisarExpedientes/>}>
                </Route>
                <Route exact path='/ver_expe' component={()=> <AplicanteVerEditarExp/>}>
                </Route>
                <Route exact path='/ver_docs' component={()=> <AplicanteEditarDocs/>}>
                </Route>
                <Route exact path='/reporte2' component={()=> <Reporte2/>}>
                </Route>
                <Route exact path='/reporte1' component={()=> <Reporte1/>}>
                </Route>
                <Route exact path='/reporte5' component={()=> <Reporte5/>}>
                </Route>
                <Route exact path='/reporte4' component={()=> <Reporte4/>}>
                </Route>
            </Switch>
        </Router>
    )
}


  




export default Rutas