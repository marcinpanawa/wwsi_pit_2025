import React from 'react';

const LoadingSpinner = ({ isFullScreen = false }) => {
    // Style dla trybu pełnoekranowego
    const fullScreenStyles = {
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(255, 255, 255, 0.7)', // Lekkie przyciemnienie tła
        zIndex: 9999 // Aby był nad innymi elementami
    };

    // Style dla spinnera wewnątrz kontenera (inline)
    const inlineStyles = {
        display: 'flex',
        justifyContent: 'center',
        padding: '2rem'
    };

    return (
        <div style={isFullScreen ? fullScreenStyles : inlineStyles}>
            <div className="spinner-border text-primary" role="status">
                <span className="visually-hidden">Ładowanie...</span>
            </div>
        </div>
    );
};

export default LoadingSpinner;