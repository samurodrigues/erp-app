import axios from "axios";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import styled from "styled-components";
import clientesPDF from "../../../Reports/Clientes/clientes";

const Tela = styled.div`
  margin-top: 20vh;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export default function Clientes() {
  const [registers, setRegisters] = useState([]);
  const [filter, setFilter] = useState('todos');
  const [busca, setBusca] = useState('');

  const handleChange = (event) => {
    setFilter(event.target.value);
  }

  useEffect(() => {
    axios.get("http://localhost:3001/cadastro")
      .then(response => {
        setRegisters(response.data);
      })
      .catch(error => console.error("Erro ao buscar os dados: ", error))
  }, []);

  const filteredRegisters = filter === 'ativos'
    ? registers.filter(cadastro => cadastro.inativo === 0)
    : filter === 'inativos'
      ? registers.filter(cadastro => cadastro.inativo === 1)
      : registers;

  const filteredClientes = filteredRegisters.filter(cliente => cliente.rzSocial.toUpperCase().startsWith(busca.toUpperCase()));


  return (
    <>
      <Tela>
        <div>
          <div className="p-3 rounded-5 bg-light mb-3 d-flex" id="filter">
            <div className="form-check form-check-inline d-flex align-items-center w-25">
              <input
                type="radio"
                name="filter"
                id="todos-input"
                value="todos"
                checked={filter === 'todos'}
                onChange={handleChange}
              />
              <label htmlFor="todos-input">Todos</label>
            </div>
            <div className="form-check form-check-inline d-flex align-items-center">
              <input
                type="radio"
                name="filter"
                id="ativos-input"
                value="ativos"
                checked={filter === 'ativos'}
                onChange={handleChange}
              />
              <label htmlFor="ativos-input">Ativos</label>
            </div>
            <div className="form-check form-check-inline d-flex align-items-center">
              <input
                type="radio"
                name="filter"
                id="inativos-input"
                value="inativos"
                checked={filter === 'inativos'}
                onChange={handleChange}
              />
              <label htmlFor="inativos-input">Inativos</label>
            </div>
          </div>
        </div>

        <div className="container bg-light p-4 rounded-5 w-75">
          <table className="table table-striped table-hover">
            <thead>
              <tr>
                <th scope="col">Razão Social</th>
              </tr>
            </thead>
            <tbody>
              {filteredClientes.map(cadastro => (
                <tr key={cadastro.idcadastro}>
                  <td><Link className="nav-link uppercase" to={`http://localhost:5173/cadastro/cliente/${cadastro.idcadastro}`}>{cadastro.rzSocial}</Link></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="d-flex mt-3">
          <div className="input-group mb-3 ms-4">
            <span className="input-group-text"><i className="bi bi-search"></i></span>
            <div className="form-floating overflow-hidden">
              <input
                type="text"
                className="form-control"
                id="floatingInputGroup1"
                placeholder="Digite o Cliente/Fornecedor"
                value={busca}
                onChange={(e) => setBusca(e.target.value)}
              />
              <label htmlFor="floatingInputGroup1">Pesquise</label>
            </div>
          </div>

          <button onClick={(e) => clientesPDF(filteredClientes)} className="align-self-center mb-2 h-25 p-2 ms-4 bg-danger rounded-4 border-0"><i className="bi bi-filetype-pdf text-white fs-4"></i></button>
        </div>
      </Tela>
    </>
  )
}
