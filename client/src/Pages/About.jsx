import React from 'react';

const About = () => {
    const styles = {
        container: {
            padding: '5rem 2rem',
            maxWidth: '1200px',
            margin: '0 auto',
            textAlign: 'center',
            background: 'linear-gradient(135deg, #0a192f 0%, #112240 100%)',
            color: '#fff',
            borderRadius: '30px',
            border: '1px solid rgba(100, 255, 218, 0.1)',
            boxShadow: '0 20px 40px rgba(0,0,0,0.4)',
            marginTop: '3rem'
        },
        title: {
            fontSize: '3.5rem',
            fontWeight: '800',
            marginBottom: '1.5rem',
            background: 'linear-gradient(90deg, #64ffda 0%, #4facfe 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            letterSpacing: '-1px'
        },
        description: {
            fontSize: '1.25rem',
            lineHeight: '1.8',
            color: '#8892b0',
            maxWidth: '800px',
            margin: '0 auto'
        }
    };

    return (
        <div style={styles.container}>
            <h1 style={styles.title}>Our Vision</h1>
            <p style={styles.description}>
                We are building the future of web applications with a focus on visual excellence and seamless user experience. Our mission is to combine power with elegance in every pixel.
            </p>
        </div>
    );
};

export default About;
