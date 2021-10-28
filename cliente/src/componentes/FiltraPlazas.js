import React from 'react';



const FiltraPlazas = props => {
    return (
        <div>
            <br/><br/>
            <h1 className="h1">Postulate a una plaza</h1>                    
            <br/><br/>


            <div class="table-responsive" id="mydatatable-container">
                <table class="records_list table table-striped table-bordered table-hover" id="mydatatable">
                    <thead>
                        <tr>
                            <th>Plaza</th>
                            <th>Departamento</th>
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
                            <td>plaza 1</td>
                            <td>departamento 1</td>
                        </tr>
                        <tr>
                            <td>plaza 2</td>
                            <td>departamento 2</td>
                        </tr>
                        <tr>
                            <td>plaza 3</td>
                            <td>departamento 3</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            

        </div>
    )
}



export default FiltraPlazas