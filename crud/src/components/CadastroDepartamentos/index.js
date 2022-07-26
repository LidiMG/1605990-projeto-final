import React, { useEffect, useState } from "react";

const CadastroDepartamentos = () => {
const [nome, setNome] = useState('')
const [sigla, setSigla] = useState('')

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
                        <label for="nome">Nome</label>
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
                        <label for="sigla">Sigla</label>
                    </div>
                </div>
            </div>

            <div className="row">
                <div className="col">
                    <button 
                        className="btn btn-primary mt-3"
                        onClick={() => {
                            alert('Clicou!')
                        }}>
                        <i class="bi bi-save" /> Salvar</button>
                </div>
            </div>
        </>
    )
}

export default CadastroDepartamentos;