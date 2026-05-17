import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AppStoreContext } from '../../Contexts/AppStoreContext';

const Header = () => {
    const { user, logout } = useContext(AppStoreContext);
    const navigate = useNavigate();

    const handleLogout = (e) => {
        e.preventDefault();
        logout();
        navigate('/login');
    };


    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light mb-4">
            <div className="container-fluid">
                <a className="navbar-brand" href="/">Projekt</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                    aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link" to="/" >Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/deals">Deals</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/about" >About</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/contact" >Contact</Link>
                        </li>
                        {user && (
                            <li className="nav-item">
                                <Link className="nav-link" to="/private" >Private</Link>
                            </li>
                        )}
                    </ul>
                    <ul className="navbar-nav">
                        {user ? (
                            <>
                                <li className="nav-item">
                                    <span className="nav-link">Welcome, {user.name}</span>
                                </li>
                                <li className="nav-item">
                                    <button className="nav-link btn btn-link" onClick={handleLogout}>Logout</button>
                                </li>
                            </>
                        ) : (
                            <>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/login">Login</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/register">Register</Link>
                                </li>
                            </>
                        )}
                    </ul>
                </div>
            </div>
        </nav>

    );
};

export default Header;

