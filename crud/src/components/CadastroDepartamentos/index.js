import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { insertDepartamento } from "../../services/departamentos";

const CadastroDepartamentos = () => {
    const [nome, setNome] = useState('')
    const [sigla, setSigla] = useState('')
    const [showErro, setShowErro] = useState('d-none')
    const [erro, setErro] = useState('')

    const navigate = useNavigate()

    return (
        <>
            <h3 className="mt-3 mb-3">Cadastro de Departamento</h3>

            <div className="row">
                <div className="col-sm-6 col-md-10 col-12">
                    <div className="form-floating">
                        <input
                            type="text"
                            className="form-control"
                            id="nome"
                            placeholder="Nome"
                            value={nome}
                            onChange={e => {
                                setNome(e.target.value)
                            }}
                        />
                        <label htmlFor="nome">Nome</label>
                    </div>
                </div>
                <div className="col-sm-6 col-md-2 col-12">
                    <div className="form-floating">
                        <input
                            type="text"
                            className="form-control"
                            id="sigla"
                            placeholder="Sigla"
                            value={sigla}
                            onChange={e => {
                                setSigla(e.target.value)
                            }}
                        />
                        <label htmlFor="sigla">Sigla</label>
                    </div>
                </div>
            </div>

            <div className="row">
                <div className="col">
                    <button
                        className="btn btn-primary mt-3"
                        onClick={() => {
                            setShowErro('d-none');
                            if (nome == '') {
                                setShowErro('d-block');
                                setErro('Preencha o nome!');
                                return;
                            }
                            if (sigla == '') {
                                setShowErro('d-block');
                                setErro('Preencha a sigla!');
                                return;
                            }
                            insertDepartamento({
                                nome,
                                sigla
                            });

                            navigate('/departamentos');
                        }}>
                        <i className="bi bi-save" /> Salvar</button>
                </div>
            </div>
            <div className={`alert alert-danger mt-3 ${showErro}`}>
                {erro}
            </div>
        </>
    )
}

export default CadastroDepartamentos;