import React from 'react';
import { Button} from 'react-bootstrap';




const VerUsuarios = props => {
    return (
        <div>

            {/* ENCABEZADO Y RATON */}
            <br/><br/>
            <br/><br/>
            <h4>Usuarios en la base de datos</h4> 
            <Button  href='/' variant="outline-primary" size="lg">
                cargar de nuevo
            </Button>              
            <br/><br/>



            {/* AQUI VA LA TABLA DE DATOS */}
            <div class="table-responsive" id="mydatatable-container">
                <table class="records_list table table-striped table-bordered table-hover" id="mydatatable">
                    <thead>
                        <tr>
                            <th>Nombre</th>
                            <th>Apellidos</th>
                        </tr>
                    </thead>
                    <tfoot>
                        <tr>
                            <th>Filter..</th>
                            <th>Filter..</th>
                        </tr>
                    </tfoot>
                    <tbody>
                        <tr>
                            <td>nombre 1</td>
                            <td>apellido 1</td>
                        </tr>
                        <tr>
                            <td>nombre 2</td>
                            <td>apellido 2</td>
                        </tr>
                        <tr>
                            <td>nombre 3</td>
                            <td>apellido 3</td>
                        </tr>
                    </tbody>
                </table>
            </div>


        </div>
    )
}

export default VerUsuarios