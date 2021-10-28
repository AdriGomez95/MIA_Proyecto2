import React from 'react';
import './Carrusel.css';
import Img1 from '../imagenes/img1.jpeg'
import Img2 from '../imagenes/img2.jpg'
import Img3 from '../imagenes/img3.jpeg'
import Img4 from '../imagenes/img4.jpg'
import Img5 from '../imagenes/img5.jpg'
import Img6 from '../imagenes/img6.jpg'



const Carrusel = props => {
    return (
        <div>
            {/* carrusel de imagenes */}
            <div className="carrusel">
                <div class="contenedor">
                        <div class="vaicontenedor">
                            <figure><img src={Img1} alt=""/></figure>
                            <figure><img src={Img2} alt=""/></figure>
                            <figure><img src={Img3} alt=""/></figure>
                            <figure><img src={Img4} alt=""/></figure>
                            <figure><img src={Img5} alt=""/></figure>
                            <figure><img src={Img6} alt=""/></figure>
                    </div>
                </div>
            </div>
  
        </div>
    )
}



export default Carrusel
