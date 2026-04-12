import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    // TODO: Implement actual user authentication and data fetching
    const locals = {};
    const user = {};

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
                        <li class="nav-item">
                            <Link className="nav-link" to="/" >Home</Link>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="/deals">Deals</a>
                        </li>
                        <li class="nav-item">
                            <Link className="nav-link" to="/about" >About</Link>
                        </li>
                        <li class="nav-item">
                            <Link className="nav-link" to="/contact" >Contact</Link>
                        </li>
                    </ul>
                    <ul className="navbar-nav">
                        {locals.user ? (
                            <>
                                <li className="nav-item">
                                    <span className="nav-link">Welcome, {user.name}</span>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="/auth/logout">Logout</a>
                                </li>
                            </>
                        ) : (
                            <>
                                <li className="nav-item">
                                    <a className="nav-link" href="/auth/login">Login</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="/auth/register">Register</a>
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

