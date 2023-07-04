import { useEffect, useState } from "react";
import axios from 'axios';
import styled from "styled-components";

const Cadastro = styled.div`
  height: 100vh;

  display: flex;
  justify-content: center;
  align-items: center;
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
      <div className="container bg-body-tertiary rounded-5">
        <div className="row justify-content-center align-items-center">
          <div className="col-md-6">
            <form className="mt-5" onSubmit={handleSubmit}>
              <div className="form-group">
                <div className="row">
                  <div className="col">
                    <label htmlFor="rzSocial">Razão Social</label>
                    <input 
                      className="form-control" 
                      type="text" 
                      id="rzSocial" 
                      name="rzSocial"
                      value={rzSocial}  
                      onChange={(e) => setRzSocial(e.target.value)}
                    />
                  </div>
                  <div className="col">
                    <label htmlFor="nmFantasia">Nome Fantasia</label>
                    <input 
                      className="form-control" 
                      type="text" 
                      id="nmFantasia" 
                      name="nmFantasia"
                      value={nmFantasia}  
                      onChange={(e) => setNmFantasia(e.target.value)}
                    />
                  </div>
                </div>
              </div>
              <div className="form-group">
                <div className="row">
                  <div className="col">
                    <label htmlFor="endereco">Endereço</label>
                    <input 
                      className="form-control" 
                      type="text" 
                      id="endereco" 
                      name="endereco"
                      value={endereco}  
                      onChange={(e) => setEndereco(e.target.value)}
                    />
                  </div>
                  <div className="col">
                    <label htmlFor="numero">Número</label>
                    <input 
                      className="form-control" 
                      type="text" 
                      id="numero" 
                      name="numero" 
                      value={numero}  
                      onChange={(e) => setNumero(e.target.value)}
                     />
                  </div>
                </div>
              </div>
              <div className="form-group">
                <div className="row">
                  <div className="col">
                    <label htmlFor="bairro">Bairro</label>
                    <input 
                      className="form-control" 
                      type="text" 
                      id="bairro" 
                      name="bairro" 
                      value={bairro}  
                      onChange={(e) => setBairro(e.target.value)}
                    />
                  </div>
                  <div className="col">
                    <label htmlFor="compEndereco">Comp. Endereço</label>
                    <input 
                      className="form-control" 
                      type="text" 
                      id="compEndereco" 
                      name="compEndereco" 
                      value={compEndereco}  
                      onChange={(e) => setCompEndereco(e.target.value)}
                    />
                  </div>
                </div>
              </div>
              <div className="form-group">
                <div className="row">
                  <div className="col">
                    <label htmlFor="estado">Estado</label>
                    <input 
                      className="form-control" 
                      type="text" 
                      id="estado" 
                      name="estado" 
                      value={estado}  
                      onChange={(e) => setEstado(e.target.value)}
                    />
                  </div>
                  <div className="col">
                    <label htmlFor="cidade">Cidade</label>
                    <input 
                      className="form-control" 
                      type="text" 
                      id="cidade" 
                      name="cidade" 
                      value={cidade}  
                      onChange={(e) => setCidade(e.target.value)}
                    />
                  </div>
                  <div className="col">
                    <label htmlFor="CEP">CEP</label>
                    <input 
                      className="form-control" 
                      type="text" 
                      id="CEP" 
                      name="CEP" 
                      value={CEP}  
                      onChange={(e) => setCEP(e.target.value)}
                    />
                  </div>
                </div>
              </div>
              <div className="form-group">
                <div className="row">
                  <div className="col">
                    <label htmlFor="fones">Telefones</label>
                    <input 
                      className="form-control" 
                      type="text" 
                      id="fones" 
                      name="fones" 
                      value={fones}  
                      onChange={(e) => setFones(e.target.value)}
                    />
                  </div>
                  <div className="col">
                    <label htmlFor="email">E-mail</label>
                    <input 
                      className="form-control" 
                      type="text" 
                      id="email" 
                      name="email" 
                      value={email}  
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                </div>
              </div>
              <div className="form-group">
                <div className="row">
                  <div className="col">
                    <label htmlFor="RG">RG</label>
                    <input 
                      className="form-control" 
                      type="text" 
                      id="RG" 
                      name="RG" 
                      value={RG}  
                      onChange={(e) => setRG(e.target.value)}
                    />
                  </div>
                  <div className="col">
                    <label htmlFor="CNPJ">CPF / CNPJ</label>
                    <input 
                      className="form-control" 
                      type="text" 
                      id="CNPJ" 
                      name="CNPJ" 
                      value={CNPJ}  
                      onChange={(e) => setCNPJ(e.target.value)}
                    />
                  </div>
                </div>
              </div>
              <div className="form-group">
                <div className="row">
                  <div className="col d-flex align-items-center justify-content-center">
                    <div className="form-check">
                      <input 
                       className="form-check-input" 
                        type="checkbox" 
                        id="inativo" 
                        name="inativo" 
                        checked={inativo} 
                        onChange={handleCheckboxChange} 
                      />
                        <label className="form-check-label" htmlFor="inativo">Inativo</label>
                    </div>
                  </div>
                  <div className="col">
                    <label htmlFor="setor">Setor/Profissão</label>
                    <input 
                      className="form-control" 
                      type="text" 
                      id="setor" 
                      name="setor" 
                      value={setor}  
                      onChange={(e) => setSetor(e.target.value)}
                      />
                  </div>
                  <div className="col">
                    <label htmlFor="inscEstadual">Insc. Estadual</label>
                    <input 
                      className="form-control" 
                      type="text" 
                      id="inscEstadual" 
                      name="inscEstadual"
                      value={inscEstadual}  
                      onChange={(e) => setInscEstadual(e.target.value)}
                    />
                  </div>
                </div>
              </div>
              <div className="form-group">
                <button 
                  className="btn btn-primary btn-block w-100 my-4" 
                  type="submit">
                    Adicionar
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </Cadastro>
  )
}