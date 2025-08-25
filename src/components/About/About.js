import React, { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import estilos from './About.module.css'

function About() {

    useEffect(() => {
        document.title = 'Sobre - HotWheels CRUD';
    }, []);
      
    
    return (
        <div className={estilos.container}>
            <h1 className={estilos.title}>HotWheels CRUD</h1>
            <p className={estilos.description}>Este sistema permite cadastrar, visualizar, editar e excluir carros da coleção HotWheels.</p>
            <p className={estilos.description}> Realizando todas as funções CRUD</p>
        </div>
        
    );
}

export default About;


