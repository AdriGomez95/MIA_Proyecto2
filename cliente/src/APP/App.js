

import './App.css';
import Img1 from '../imagenes/img1.jpeg'
import Img2 from '../imagenes/img2.jpg'
import Img3 from '../imagenes/img3.jpeg'
import Img4 from '../imagenes/img4.jpg'
import Img5 from '../imagenes/img5.jpg'
import Img6 from '../imagenes/img6.jpg'


import Pag1 from '../paginas/pag1'





export default function App() {


	const analizar = (tipo) => {
    switch(tipo){
      case 'a':
		    alert('Inicio');
        break;
      case 'b':
		    alert('Login');
        break;
      case 'c':
		    alert('Logout');
        break;
    }
  };



  return(
    <div className = "contenedorgeneral">

      {/* navbar */}
      <div className="navbar">

        <div className="dropdown">
					<button className="dropbtn">
            ¡Bienvenido!
						<i className="fa fa-caret-down" />
					</button>

					<div className="dropdown-content">
						<a onClick={() => analizar('a')}>Inicio</a>
						<a onClick={() => analizar('b')}>Iniciar sesion</a>
						<a onClick={() => analizar('c')}>Salir</a>
					</div>
				</div>
					
      </div>







      {/* carrusel de imagenes */}
      <div className="carrusel">
        <div class="contenedor">
              <div class="vaicontenedor">
                  <figure><img src={Img1}/></figure>
                  <figure><img src={Img2}/></figure>
                  <figure><img src={Img3}/></figure>
                  <figure><img src={Img4}/></figure>
                  <figure><img src={Img5}/></figure>
                  <figure><img src={Img6}/></figure>
          </div>
        </div>
      </div>









      {/* cuerpo */}
      <div className="cuerpo">
        <h1>aqui el cuerpo</h1>
      </div>

      {/* footer */}
      <div className="footer">
        <br></br>
        <p className="p">@autor: Adriana Gómez / @GitHub: AdriGomez95</p>
      </div>

    </div>
    
  );
}

