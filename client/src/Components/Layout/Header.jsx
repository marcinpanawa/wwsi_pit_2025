import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    const styles = {
        header: {
            background: 'rgba(10, 25, 47, 0.9)',
            backdropFilter: 'blur(20px)',
            padding: '1.5rem 2rem',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            position: 'sticky',
            top: 0,
            zIndex: 1000,
            borderBottom: '1px solid rgba(100, 255, 218, 0.1)',
            boxShadow: '0 10px 30px rgba(2, 12, 27, 0.7)'
        },
        logo: {
            fontSize: '1.75rem',
            fontWeight: '900',
            color: '#64ffda',
            textDecoration: 'none',
            letterSpacing: '2px',
            textTransform: 'uppercase'
        },
        nav: {
            display: 'flex',
            gap: '2.5rem'
        },
        link: {
            color: '#ccd6f6',
            textDecoration: 'none',
            fontSize: '0.9rem',
            fontWeight: '600',
            transition: 'all 0.3s ease',
            textTransform: 'uppercase',
            letterSpacing: '1px'
        }
    };

    return (
        <header style={styles.header}>
            <Link to="/" style={styles.logo}>ANTIGRAVITY</Link>
            <nav style={styles.nav}>
                <Link to="/" style={styles.link}>Home</Link>
                <Link to="/about" style={styles.link}>About</Link>
                <Link to="/contact" style={styles.link}>Contact</Link>
            </nav>
        </header>
    );
};

export default Header;