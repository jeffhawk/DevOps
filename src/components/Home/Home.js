import React, { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import estilos from './Home.module.css';
import { Link } from 'react-router-dom';


const Home = () => {
  useEffect(() => {
    document.title = 'Home - HotWheels CRUD';
  }, []);

  return (
    <main>
      <div className={estilos.container} >
        <h1 className={estilos.title}>HotWheels CRUD</h1>
        <h2 className={estilos.description}>Bem-vindo ao sistema de gerenciamento de carros HotWheels!</h2>
        <p className="lead">Gerencie sua coleção de carrinhos HotWheels de forma fácil e prática.</p>
        <hr className="my-4" />
        <p>Utilize o menu para navegar pelas funcionalidades da aplicação.</p>
        <Link className="btn btn-primary btn-lg" to="/carros" role="button">Ver Lista de Carros</Link>
        
      </div>
    </main>
    
  );
};

export default Home;
