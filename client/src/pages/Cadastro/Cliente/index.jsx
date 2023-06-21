import styled from "styled-components";
import axios from "axios";
import { useEffect, useState } from "react";

const StyledClient = styled.div`
  height: 100vh;

  display: flex;
  justify-content: center;
  align-items: center;

  .ficha {
    background-color: gray;

    height: 45em;
    width: 2rem;
  }
`;

const Forms = styled.div`
  height: 70vh;
  width: 50vw;
  
  display: flex;
  flex-direction: column;
  justify-content: space-around;

  padding: 1.5rem;
  border-radius: 1em;
  border: 1px solid #cfcfcf;
  
  background-color: #e9e9e9;

  p {
    white-space: nowrap;
  }

  .cliente-info {
    display: block;
    padding: .5rem;
    width: 100%;
    background-color: white;

    border-radius: 10px;
    border: 1px solid #cfcfcf;
  }

  .input-1 {
    display: grid;
    grid-template-columns: 2fr 1fr;
    gap: 10px;
  }

  .input-2 {
    display: grid;
    grid-template-columns: 3fr 2fr;
    gap: 10px;
  }

  .input-3 {
    display: grid;
    grid-template-columns: 1fr 2fr 2fr;
    gap: 10px;
  }

  .input-4 {
    display: grid;
    grid-template-columns: 1fr 2fr;
    gap: 10px;
  }

  .checkbox {
    display: flex;
    align-items: center;
    width: 4.3rem;


    input {
      height: 1em;
    }
  }

  button {
    height: 3.5rem;
    border-radius: 10px;
    border: 1px solid #cfcfcf;
    background-color: #6dad73;
    
    color: #FFFFFF;
    font-weight: bold;

    &:hover {
      background-color: #609966;
    }
  }
`;

export default function Cliente() {
    const [cliente, setCliente] = useState([]);

    useEffect(() => {
        //keeping id URL
        const urlAtual = window.location.href;
        const filterId = urlAtual.split("/");
        const id = filterId[filterId.length - 1];

        //Request Axios
        axios.get(`http://localhost:3001/cadastro/${id}`)
            .then(response => {
                setCliente(response.data);
            })
            .catch(error => console.error("Erro ao buscar os dados: ", error))
    }, []);

    console.log(cliente)
    return (
        <StyledClient>
            <Forms>
                <div className="input-2">
                    <div>
                        <p>Razão Social</p>
                        <span className="cliente-info">{cliente.rzSocial}</span>
                    </div>
                    <div>
                        <p>Nome Fantasia (Apelido)</p>
                        <span className="cliente-info">{cliente.nmFantasia}</span>
                    </div>
                </div>
                <div className="input-1">
                    <div>
                        <p>Endereço</p>
                        <span className="cliente-info">{cliente.endereco}</span>
                    </div>
                    <div>
                        <p>Número</p>
                        <span className="cliente-info">{cliente.numero}</span>
                    </div>
                </div>
                <div className="input-4">
                    <div>
                        <p>Bairro</p>
                        <span className="cliente-info">{cliente.numero}</span>
                    </div>
                    <div>
                        <p>Complemento do Endereço</p>
                        <span className="cliente-info">{cliente.compEndereco}</span>
                    </div>
                </div>
                <div className="input-3">
                    <div>
                        <p>Estado</p>
                        <span className="cliente-info">{cliente.estado}</span>
                    </div>
                    <div>
                        <p>Cidade</p>
                        <span className="cliente-info">{cliente.cidade}</span>
                    </div>
                    <div>
                        <p>CEP</p>
                        <span className="cliente-info">{cliente.cep}</span>
                    </div>
                </div>
                <div className="input-2">
                    <div>
                        <p>Telefones</p>
                        <span className="cliente-info">{cliente.fones}</span>
                    </div>
                    <div>
                        <p>E-mail</p>
                        <span className="cliente-info">{cliente.email}</span>
                    </div>
                </div>
                <div className="input-2">
                    <div>
                        <p>RG</p>
                        <span className="cliente-info">{cliente.rg}</span>
                    </div>
                    <div>
                        <p>CPF / CNPJ</p>
                        <span className="cliente-info">{cliente.cnpj}</span>
                    </div>
                </div>
                <div className="input-3">
                    <div className="activity">
                        <p>Inativo</p>
                    </div>
                    <div>
                        <p>Setor/Profissão</p>
                        <span className="cliente-info">{cliente.setor}</span>
                    </div>
                    <div>
                        <p>Inscrição Estadual</p>
                        <span className="cliente-info">{cliente.inscEstadual}</span>
                    </div>
                </div>
            </Forms>
        </StyledClient>
    )
}