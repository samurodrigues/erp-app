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

  return (
    <>
      <Tela>
        <div className="d-flex align-items-center">
          <div className="p-3 rounded-5 bg-light mb-3" id="filter">
            <div className="form-check form-check-inline">
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
            <div className="form-check form-check-inline">
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
            <div className="form-check form-check-inline">
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

          <button onClick={(e) => clientesPDF(filteredRegisters)} className="p-1 pt-1 px-3 ms-4 mb-2 bg-danger rounded-4 border-0"><i className="bi bi-filetype-pdf text-white fs-4"></i></button>
        </div>

        <div className="container bg-light p-5 rounded-5">
          <table className="table table-striped table-hover">
            <thead>
              <tr>
                <th scope="col">Razão Social</th>
                <th scope="col">Atividade</th>
              </tr>
            </thead>
            <tbody>
              {filteredRegisters.map(cadastro => (
                <tr>
                  <td><Link className="nav-link uppercase" to={`http://localhost:5173/cadastro/cliente/${cadastro.idcadastro}`}>{cadastro.rzSocial}</Link></td>
                  <td>{cadastro.inativo === 1 ? 'INATIVO' : 'ATIVO'}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Tela>
    </>
  )
}