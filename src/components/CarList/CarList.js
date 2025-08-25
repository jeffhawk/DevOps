import React, { useState, useEffect } from 'react';
// import carros from '../../Data/Carros';
import 'bootstrap/dist/css/bootstrap.min.css';
import './CarList.module.css';
import { Link } from 'react-router-dom';

const CarList = ({ carros, onEdit, onDelete }) => {
  useEffect(() => {
    document.title = 'Listar Carros - HotWheels CRUD';
  }, []);
  // const [listaDeCarros, setListaDeCarros] = useState([...carros]);
  const [buscarItem, setbuscarItem] = useState("");

  const buscaCarro = carros.filter(car =>
    car.nome.toLowerCase().includes(buscarItem.toLowerCase()) ||
    car.marca.toLowerCase().includes(buscarItem.toLowerCase()) ||
    car.cor.toLowerCase().includes(buscarItem.toLowerCase()) ||
    car.ano.toString().includes(buscarItem)
  );




  return (
    // <div className="container mt-5">
    //   <h2>Lista de Carros</h2>
    //   <ul>
    //     {listaDeCarros.map(
    //       (car) => (
    //       <li key={car.id}>
    //         <Link >{car.nome} - {car.marca}</Link>
    //         <button >Excluir</button>
    //       </li>
    //     ))}
    //   </ul>
    // </div>

    <div className="container mt-5">
      <h2>Lista de Carros</h2>
      <label>Digite um nome para buscar: </label>
      <input
        type="text"
        placeholder="Buscar..."
        value={buscarItem}
        onChange={(e) => setbuscarItem(e.target.value)}
      />
      <table className="table table-striped">
        <thead>
          <tr>
            <th>ID</th>
            <th>Nome</th>
            <th>Marca</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {buscaCarro.map((car, idx) => (
            <tr key={idx}>
              <td>{car.id}</td>
              <td>{car.nome}</td>
              <td>{car.marca}</td>
              <td>
                <Link to={"/add-carro"}><button className="btn btn-primary btn-sm" onClick={() => onEdit(car)}>Editar</button></Link>
                <button className="btn btn-danger btn-sm ml-2" onClick={() => onDelete(car.id)}>Excluir</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CarList;

