import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import { getDepartamentos } from '../../services/departamentos';

const ListaDepartamentos = () => {

    const [departamentos, setDepartamentos] = useState()

    async function loadDepartametos() {
        setDepartamentos(await getDepartamentos())
    }

    useEffect(() => {
        loadDepartametos()
    }, [])
    console.log(departamentos);

    return (
        <>
            <div className="d-flex justify-content-between align-items-center mt-3">
                <h3>Departamentos</h3>
                {!departamentos && 
                <div className="spinner-border text-warning" role="status">
                    <span class="visually-hidden">Loading...</span>
                </div>
                }
                <Link to='/departamentos/new' className="btn bi-plus btn-secondary"> Novo</Link>
            </div>



            <table className='table table-striped'>
                <thead>
                    <tr>
                        <th>Nome</th>
                        <th>Sigla</th>
                        <th className="text-center">Ações</th>
                    </tr>
                </thead>

                <tbody>
                    {departamentos && departamentos.map(d => {
                        return (
                            <tr key={d.id_departamento}>
                                <td>{d.nome}</td>
                                <td>{d.sigla}</td>
                                <td>
                                    <div className="d-flex justify-content-evenly">
                                        <button className='btn btn-outline-warning'>
                                            <i className="bi bi-pencil-fill" /> Editar
                                        </button>
                                        <button className='btn btn-outline-danger'>
                                            <i className="bi bi-trash3-fill" />Excluir
                                        </button>
                                    </div>
                                </td>
                            </tr>
                        )
                    })}
                </tbody>

            </table>
        </>
    )
}

export default ListaDepartamentos;