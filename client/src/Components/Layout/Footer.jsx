import React from 'react';

const Footer = () => {
    const styles = {
        footer: {
            padding: '4rem 2rem',
            textAlign: 'center',
            background: '#020c1b',
            color: '#8892b0',
            borderTop: '1px solid rgba(255, 255, 255, 0.05)',
            marginTop: '5rem'
        },
        text: {
            fontSize: '0.9rem',
            letterSpacing: '1px',
            opacity: 0.8
        },
        socials: {
            display: 'flex',
            justifyContent: 'center',
            gap: '2rem',
            marginBottom: '2rem'
        },
        socialLink: {
            color: '#64ffda',
            textDecoration: 'none',
            fontSize: '1.2rem',
            transition: 'transform 0.3s ease'
        }
    };

    return (
        <footer style={styles.footer}>
            <div style={styles.socials}>
                <span style={styles.socialLink}>GitHub</span>
                <span style={styles.socialLink}>LinkedIn</span>
                <span style={styles.socialLink}>Twitter</span>
            </div>
            <p style={styles.text}>&copy; 2026 ANTIGRAVITY. Built for visual excellence.</p>
        </footer>
    );
};

export default Footer;