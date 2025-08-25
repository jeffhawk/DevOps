// src/components/CarFormPage.js
import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './CarForm.module.css';
import { Link } from 'react-router-dom';
import '../../App'


const CarForm = ({ onSubmit, carroParaEditar, onCancel }) => {
  
  const initialFormState = {
    id: null,
    nome: '',
    marca: '',
    cor: '',
    ano: ''
  };

  useEffect(() => {
    document.title = carroParaEditar ? `Editando.. ${carroParaEditar.nome} - HotWheels CRUD` : "Adicionar Carro - HotWheels CRUD";
  }, [carroParaEditar]);

  const [carro, setCarro] = useState(initialFormState);

  useEffect(() => {
    if (carroParaEditar) {
      setCarro(carroParaEditar);
    } else {
      setCarro({
        id: null,
        nome: '',
        marca: '',
        cor: '',
        ano: ''
      });
    }
  }, [carroParaEditar]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCarro({ ...carro, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(carro);
    setCarro(initialFormState);
  };

  return (
    <div className="container mt-5">
      {/* <h2>{carroParaEditar ? 'Editar Carro' : 'Adicionar Carro'}</h2> */}
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <h3>{carroParaEditar ? carroParaEditar.id : ""}</h3>
          <label htmlFor="nome">Nome:</label>
          <input
            type="text"
            className="form-control"
            id="nome"
            name="nome"
            value={carro.nome}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="marca">Marca:</label>
          <input
            type="text"
            className="form-control"
            id="marca"
            name="marca"
            value={carro.marca}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="cor">Cor:</label>
          <input
            type="text"
            className="form-control"
            id="cor"
            name="cor"
            value={carro.cor}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="ano">Ano:</label>
          <input
            type="text"
            className="form-control"
            id="ano"
            name="ano"
            value={carro.ano}
            onChange={handleChange}
            required
          />
        </div>
        {carroParaEditar ? (
          <>
            <button type="submit" className="btn btn-primary">Atualizar</button>
            <Link to={"/carros"}><button type="button" className="btn btn-primary" onClick={onCancel} >Cancelar</button></Link>
          </>
          
        ) :(
          <>
            <button type="submit" className="btn btn-primary">Adicionar</button>
            <Link to={"/"}><button type="button" className="btn btn-primary" onClick={onCancel}>Cancelar</button></Link>
          </>
        )}
        
        {/* {carroParaEditar ? (
          
        ) : (
          
        )} */}
      </form>
    </div>
    
  );
};

export default CarForm;











// import React, { useEffect, useState } from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';

// const CarForm = ({ onAddCar }) => {

//   useEffect(() => {
//     document.title = 'Adicionar - HotWheels CRUD';
//     }, []
//   );

//   const [brand, setBrand] = useState('');
//   const [model, setModel] = useState('');
//   const [year, setYear] = useState('');

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const newCar = { brand, model, year };
//     onAddCar(newCar);
//     setBrand('');
//     setModel('');
//     setYear('');
//   };

  

//   return (
//     <div>
//       <h2>Adicionar Novo Carro</h2>
//       <form onSubmit={handleSubmit}>
//         <label>
//           Marca:
//           <input
//             type="text"
//             value={brand}
//             onChange={(e) => setBrand(e.target.value)}
//           />
//         </label>
//         <label>
//           Modelo:
//           <input
//             type="text"
//             value={model}
//             onChange={(e) => setModel(e.target.value)}
//           />
//         </label>
//         <label>
//           Ano:
//           <input
//             type="text"
//             value={year}
//             onChange={(e) => setYear(e.target.value)}
//           />
//         </label>
//         <button type="submit">Adicionar</button>
//       </form>
//     </div>
//   );
// };

// export default CarForm;
