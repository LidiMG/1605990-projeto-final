import React from 'react';
import { Link } from 'react-router-dom';

const Menu = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-warning">
            <div className="container-fluid">
                <Link to='/' className="navbar-brand">
                    <i className="bi bi-server"/> CRUD</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarText">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link to='/departamentos' className='nav-link active'>Departamentos</Link>
                        </li>
                    </ul>
                    <span className="navbar-text">
                        Projeto Final
                    </span>
                </div>
            </div>
        </nav>
    )
}

export default Menu;