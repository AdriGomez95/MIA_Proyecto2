import React from 'react';

import Inicio from '../paginas/Inicio'
import Login from '../paginas/Login'

import Aplicar from '../paginas/Aplicar'



import {
    BrowserRouter as Router,
    Switch,
    Route,
    //Link
  } from "react-router-dom";
  

const Rutas = props => {
    return (
        <Router>
            <Switch>
                <Route exact path='/' component={()=> <Inicio/>}>
                </Route>
                <Route exact path='/login' component={()=> <Login/>}>
                </Route>
                <Route exact path='/aplicar' component={()=> <Aplicar/>}>
                </Route>
            </Switch>
        </Router>
    )
}




export default Rutas