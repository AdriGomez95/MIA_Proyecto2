import React from 'react';
import Barra from '../componentes/Barra'
import FiltraPlazas from '../componentes/FiltraPlazas'
import FormularioDoc from '../componentes/FormularioDoc'


/*
import React from 'react';
import Barra from '../componentes/Barra'
import Trabajos from '../componentes/Trabajos'
const Aplicar = () => {
    return (
        <div>
        <Barra/>
        <Trabajos/>
        
        </div>
    )
}
*/
const Aplicar = () => {
    return (
        <div>
        <Barra/>
        <FiltraPlazas/>
        <FormularioDoc/>
        
        </div>
    )
}


export default Aplicar