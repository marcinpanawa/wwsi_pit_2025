import React from 'react';
import withData from '../Components/HOC/withData';

const Contact = (props) => {
    const styles = {
        container: {
            padding: '5rem 2rem',
            maxWidth: '800px',
            margin: '3rem auto',
            background: 'rgba(17, 34, 64, 0.7)',
            backdropFilter: 'blur(12px)',
            borderRadius: '24px',
            border: '1px solid rgba(100, 255, 218, 0.1)',
            boxShadow: '0 30px 60px rgba(0, 0, 0, 0.5)',
            color: '#ccd6f6'
        },
        header: {
            textAlign: 'center',
            marginBottom: '4rem'
        },
        title: {
            fontSize: '3rem',
            color: '#64ffda',
            fontWeight: '800',
            marginBottom: '1rem'
        },
        form: {
            display: 'flex',
            flexDirection: 'column',
            gap: '2rem'
        },
        input: {
            padding: '16px 20px',
            borderRadius: '12px',
            border: '1px solid rgba(100, 255, 218, 0.1)',
            background: '#0a192f',
            color: '#fff',
            fontSize: '1rem',
            transition: 'all 0.3s ease',
            outline: 'none'
        },
        button: {
            padding: '16px 32px',
            borderRadius: '12px',
            border: 'none',
            background: '#64ffda',
            color: '#0a192f',
            fontSize: '1.1rem',
            fontWeight: '800',
            cursor: 'pointer',
            transition: 'all 0.3s ease',
            textTransform: 'uppercase',
            letterSpacing: '1px'
        }
    };

    return (
        <div style={styles.container}>
            <div style={styles.header}>
                <h1 style={styles.title}>Connect With Us</h1>
                <p>Have a question or want to work together?</p>
            </div>
            <form style={styles.form} onClick={(e) => e.preventDefault()}>
                <input type="text" placeholder="Your Name" style={styles.input} />
                <input type="email" placeholder="Email Address" style={styles.input} />
                <textarea rows="5" placeholder="Your Message" style={styles.input}></textarea>
                <button type="submit" style={styles.button}>Send Inquiry</button>
            </form>
        </div>
    );
};

export default withData(Contact);
