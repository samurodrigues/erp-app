import { useEffect, useState } from "react";
import axios from 'axios';
import styled from "styled-components";

const Cadastro = styled.div`
  height: 100vh;

  display: flex;
  justify-content: center;
  align-items: center;
`;

const Forms = styled.form`
  height: 70vh;
  width: 50vw;
  
  display: flex;
  flex-direction: column;
  justify-content: space-around;

  padding: 1.5rem;
  border-radius: 1em;
  border: 1px solid #cfcfcf;
  
  background-color: #e9e9e9;

  label {
    white-space: nowrap;
  }

  input {
    height: 2.5rem;
    width: 100%;

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

export default function Register() {
  const [cadastro, setCadastro] = useState([]);
  const [rzSocial, setRzSocial] = useState('');
  const [nmFantasia, setNmFantasia] = useState("");
  const [endereco, setEndereco] = useState("");
  const [numero, setNumero] = useState("");
  const [bairro, setBairro] = useState("");
  const [compEndereco, setCompEndereco] = useState('');
  const [estado, setEstado] = useState("");
  const [cidade, setCidade] = useState("");
  const [CEP, setCEP] = useState("");
  const [fones, setFones] = useState("");
  const [email, setEmail] = useState('');
  const [RG, setRG] = useState('');
  const [CNPJ, setCNPJ] = useState("");
  const [inativo, setInativo] = useState(false);
  const [setor, setSetor] = useState("");
  const [inscEstadual, setInscEstadual] = useState('');

  useEffect(() => {
    axios.get("http://localhost:3001/cadastro")
      .then(response => {
        setCadastro(response.data);
      })
      .catch(error => {
        console.error("Erro ao buscar os dados: ", error);
      });
  }, []);

  const handleCheckboxChange = () => {
    setInativo(!inativo);
    console.log(inativo);
  }

  const handleSubmit = (event) => {
    event.preventDefault();

    const novoCadastro = {
      rzSocial: rzSocial, 
      nmFantasia: nmFantasia,
      endereco: endereco,
      numero: numero,
      bairro: bairro,
      compEndereco: compEndereco,
      estado: estado,
      cidade: cidade,
      cep: CEP,
      fones: fones,
      email: email,
      rg: RG,
      cnpj: CNPJ,
      inativo: inativo,
      setor: setor,
      inscEstadual: inscEstadual
    };

    axios.post("http://localhost:3001/cadastro", novoCadastro)
      .then(response => {
        console.log("Produto adicionado com sucesso: ",
        setCadastro([...cadastro, response.data]));
        setRzSocial('');
        setNmFantasia('');
        setEndereco('');
        setNumero('');
        setBairro('');
        setCompEndereco('');
        setEstado('');
        setCidade('');
        setCEP('');
        setFones('');
        setEmail('');
        setRG('');
        setCNPJ('');
        setInativo(false);
        setSetor('');
        setInscEstadual('');
      })
      .catch(error => {
        console.error('Erro ao adicionar o produto: ', error);
      });
  }

  return (
    <Cadastro>
      <Forms onSubmit={handleSubmit}>

        <div className="input-2">
          <div>
            <label htmlFor="rzSocial">Razão Social</label>
            <input type="text" value={rzSocial} onChange={(e) => setRzSocial(e.target.value)} />
          </div>
          <div>
            <label htmlFor="nmFantasia">Nome Fantasia (Apelido)</label>
            <input type="text" value={nmFantasia} onChange={(e) => setNmFantasia(e.target.value)} />
          </div>
        </div>
        <div className="input-1">
          <div>
            <label htmlFor="endereco">Endereço</label>
            <input type="text" value={endereco} onChange={(e) => setEndereco(e.target.value)} />
          </div>
          <div>
            <label htmlFor="numero">Número</label>
            <input type="text" value={numero} onChange={(e) => setNumero(e.target.value)} />
          </div>
        </div>
        <div className="input-4">
          <div>
            <label htmlFor="bairro">Bairro</label>
            <input type="text" value={bairro} onChange={(e) => setBairro(e.target.value)}/>
          </div>
          <div>
            <label htmlFor="compEndereco">Complemento do Endereço</label>
            <input type="text" value={compEndereco} onChange={(e) => setCompEndereco(e.target.value)}/>
          </div>
        </div>
        <div className="input-3">
          <div>
            <label htmlFor="estado">Estado</label>
            <input type="text" value={estado} onChange={(e) => setEstado(e.target.value)} />
          </div>
          <div>
            <label htmlFor="cidade">Cidade</label>
            <input type="text" value={cidade} onChange={(e) => setCidade(e.target.value)}/>
          </div>
          <div>
            <label htmlFor="CEP">CEP</label>
            <input type="text" value={CEP} onChange={(e) => setCEP(e.target.value)}/>
          </div>
        </div>
        <div className="input-2">
          <div>
            <label htmlFor="fones">Telefones</label>
            <input type="text" value={fones} onChange={(e) => setFones(e.target.value)}/>
          </div>
          <div>
            <label htmlFor="email">E-mail</label>
            <input type="text" value={email} onChange={(e) => setEmail(e.target.value)}/>
          </div>
        </div>
        <div className="input-2">
          <div>
            <label htmlFor="RG">RG</label>
            <input type="text" value={RG} onChange={(e) => setRG(e.target.value)} />
          </div>
          <div>
            <label htmlFor="CNPJ">CPF / CNPJ</label>
            <input type="text" value={CNPJ} onChange={(e) => setCNPJ(e.target.value)}/>
          </div>
        </div>
        <div className="input-3">
          <div className="checkbox">
            <input type="checkbox" checked={inativo} onChange={handleCheckboxChange} />
            <label htmlFor="inativo">Inativo</label>
          </div>
          <div>
            <label htmlFor="setor">Setor/Profissão</label>
            <input type="text" value={setor} onChange={(e) => setSetor(e.target.value)}/>
          </div>
          <div>
            <label htmlFor="inscEstadual">Inscrição Estadual</label>
            <input type="text" value={inscEstadual} onChange={(e) => setInscEstadual(e.target.value)}/>
          </div>
        </div>
      
        <button type="submit">Adicionar</button>
        
      </Forms>
    </Cadastro>
  )
}