import axios from "axios";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import './style.css';
import { useEffect, useState } from "react";
import styled from "styled-components";

const Tela = styled.div`

  margin-top: 20vh;

  display: flex;
  justify-content: center;
  align-items: center;
`;

const Filter = styled.div`
  position: fixed;
  top: 10vh;
  left: 6vw;

  input {
    margin-left: 10px;
  }
`;

const Lista = styled.div`
  width: 50vw;
  background-color: #e9e9e9;
  padding: 10px;
  border-radius: 10px;

  display: flex;
  flex-direction: column;
  flex-wrap: wrap;

  .column {
    display: grid;
    grid-template-columns: 2fr 1fr;
    background-color: #609966;
    justify-content: space-between;
    border-radius: 10px 10px 0px 0px;
    color: white;
  }

  .registerList {
    
    
    div {
      display: grid;
      grid-template-columns: 2fr 1fr;
      border: 1px solid #cfcfcf;
      background-color: white;

      .content {
        text-transform: uppercase;
        overflow: hidden;
      } 
    }
  }
`

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
        <Filter>
          <input
            type="radio"
            name="filter"
            id="todos-input"
            value="todos"
            checked={filter === 'todos'}
            onChange={handleChange}
          />
          <label htmlFor="todos-input">Todos</label>

          <input
            type="radio"
            name="filter"
            id="ativos-input"
            value="ativos"
            checked={filter === 'ativos'}
            onChange={handleChange}
          />
          <label htmlFor="ativos-input">Ativos</label>

          <input
            type="radio"
            name="filter"
            id="inativos-input"
            value="inativos"
            checked={filter === 'inativos'}
            onChange={handleChange}
          />
          <label htmlFor="inativos-input">Inativos</label>
        </Filter>
        <Lista>
          <ul className="column">
            <li><span>Razão Social:</span></li>
            <li><span>Atividade:</span></li>
          </ul>
          <ul className="registerList">
            {filteredRegisters.map(cadastro => (
              <div>
                <li className="content"><Link to={`http://localhost:5173/cadastro/cliente/${cadastro.idcadastro}`}>{cadastro.rzSocial}</Link></li>
                
                <li className="activity">{
                cadastro.inativo === 1 ? 'INATIVO' : 'ATIVO'
                
                }</li>
              </div>
            ))}
          </ul>
        </Lista>
      </Tela>
    </>
  )
}