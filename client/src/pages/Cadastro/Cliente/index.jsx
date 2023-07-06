import styled from "styled-components";
import axios from "axios";
import { useEffect, useState } from "react";

const Tela = styled.div`
  height: 100vh;

  display: flex;
  justify-content: center;
  align-items: center;
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

    return (
        <Tela>
            <div className="container rounded-5">
                <div className="row justify-content-center align-items-center">
                    <div className="col-md-6 bg-body-tertiary">
                        <div className="mt-5 p-5">
                            <div className="form-group">
                                <div className="row">
                                    <div className="col">
                                        <label htmlFor="rzSocial">Razão Social</label>
                                        <div className="bg-white p-2 border rounded-2 uppercase">{cliente.rzSocial}</div>
                                    </div>
                                    <div className="col">
                                        <label htmlFor="nmFantasia">Nome Fantasia</label>
                                        <div className="bg-white p-2 border rounded-2 uppercase">{cliente.nmFantasia}</div>
                                    </div>
                                </div>
                            </div>
                            <div className="form-group">
                                <div className="row">
                                    <div className="col">
                                        <label htmlFor="endereco">Endereço</label>
                                        <div className="bg-white p-2 border rounded-2 uppercase">{cliente.endereco}</div>
                                    </div>
                                    <div className="col">
                                        <label htmlFor="numero">Número</label>
                                        <div className="bg-white p-2 border rounded-2 uppercase">{cliente.numero}</div>
                                    </div>
                                </div>
                            </div>
                            <div className="form-group">
                                <div className="row">
                                    <div className="col">
                                        <label htmlFor="bairro">Bairro</label>
                                        <div className="bg-white p-2 border rounded-2 uppercase">{cliente.bairro}</div>
                                    </div>
                                    <div className="col">
                                        <label htmlFor="compEndereco">Comp. Endereço</label>
                                        <div className="bg-white p-2 border rounded-2 uppercase">{cliente.compEndereco}</div>
                                    </div>
                                </div>
                            </div>
                            <div className="form-group">
                                <div className="row">
                                    <div className="col">
                                        <label htmlFor="estado">Estado</label>
                                        <div className="bg-white p-2 border rounded-2 uppercase">{cliente.estado}</div>
                                    </div>
                                    <div className="col">
                                        <label htmlFor="cidade">Cidade</label>
                                        <div className="bg-white p-2 border rounded-2 uppercase">{cliente.cidade}</div>
                                    </div>
                                    <div className="col">
                                        <label htmlFor="CEP">CEP</label>
                                        <div className="bg-white p-2 border rounded-2 uppercase">{cliente.cep}</div>
                                    </div>
                                </div>
                            </div>
                            <div className="form-group">
                                <div className="row">
                                    <div className="col">
                                        <label htmlFor="fones">Telefones</label>
                                        <div className="bg-white p-2 border rounded-2 uppercase">{cliente.fones}</div>
                                    </div>
                                    <div className="col">
                                        <label htmlFor="email">E-mail</label>
                                        <div className="bg-white p-2 border rounded-2 uppercase">{cliente.email}</div>
                                    </div>
                                </div>
                            </div>
                            <div className="form-group">
                                <div className="row">
                                    <div className="col">
                                        <label htmlFor="RG">RG</label>
                                        <div className="bg-white p-2 border rounded-2 uppercase">{cliente.rg}</div>
                                    </div>
                                    <div className="col">
                                        <label htmlFor="CNPJ">CPF / CNPJ</label>
                                        <div className="bg-white p-2 border rounded-2 uppercase">{cliente.cnpj}</div>
                                    </div>
                                </div>
                            </div>
                            <div className="form-group">
                                <div className="row">
                                    <div className="col d-flex align-items-center justify-content-center">
                                        <div className="form-check w-100">
                                            <label>Atividade:</label>
                                            {
                                                cliente.inativo === 0 ? (
                                                    <div className="p-2 text-light text-center rounded-2 bg-success">ATIVO</div>
                                                ) : (
                                                    <div className="p-2 text-light text-center rounded-2 bg-danger">INATIVO</div>
                                                )
                                            }
                                        </div>
                                    </div>
                                    <div className="col">
                                        <label htmlFor="setor">Setor/Profissão</label>
                                        <div className="bg-white p-2 border rounded-2 uppercase">{cliente.setor}</div>
                                    </div>
                                    <div className="col">
                                        <label htmlFor="inscEstadual">Insc. Estadual</label>
                                        <div className="bg-white p-2 border rounded-2 uppercase">{cliente.inscEstadual}</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </Tela>
    )
}