import React from 'react';
import { Link, } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
// import './NaviBar.module.css';
import estilos from "./NaviBar.module.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faInfoCircle, faCar, faAdd } from '@fortawesome/free-solid-svg-icons';


const NavBar = () => {

  return (
    <nav>
      <Link className={estilos.logo} to={"/"}>
          HotWheels
      </Link>
      <div>
        <ul>
          <li className="nav-item">
            <Link className="nav-link" to="/" >
              <FontAwesomeIcon icon={faHome} /> Home
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/about" >
              <FontAwesomeIcon icon={faInfoCircle} /> Sobre
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/carros" >
              <FontAwesomeIcon icon={faCar} /> Carros
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/add-carro" >
              <FontAwesomeIcon icon={faAdd}/>  Adicionar Carro
            </Link>
          </li>
        </ul>
      </div>

      {/* <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">Sobre</Link>
        </li>
        <li>
          <Link to="/carros">Carros</Link>
        </li>
        <li>
          <Link to="/add-car">Adicionar Carro</Link>
        </li>
        <li>
          <Link to="/carros/:id">Detalhes do Carro</Link>
        </li>
      </ul>
    </nav> */}
    </nav>




      
  );
 
};

export default NavBar;
