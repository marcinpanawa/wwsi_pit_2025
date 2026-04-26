import React from 'react';
import withAdditionalProps from '../Components/HOC/withAdditionalProps';
import withData from '../Components/HOC/withData';

const About = (props) => {
    const styles = {
        container: {
            padding: '5rem 2rem',
            maxWidth: '1200px',
            margin: '0 auto',
            textAlign: 'center',
            color: '#000',
            borderRadius: '30px',
            border: '1px solid rgba(100, 255, 218, 0.1)',
            marginTop: '3rem'
        },
        title: {
            fontSize: '3.5rem',
            fontWeight: '800',
            marginBottom: '1.5rem',
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
            <p>{props.fact.fact}</p>
            <h1 style={styles.title}>Our Vision</h1>
            <p style={styles.description}>

                We are building the future of web applications with a focus on visual excellence and seamless user experience. Our mission is to combine power with elegance in every pixel.
            </p>
        </div>
    );
};

export default withData(withAdditionalProps(About));
