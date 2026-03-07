import Header from "./Header";
import Footer from "./Footer";

const MainLayout = ({ children }) => {
    const layoutStyle = {
        background: '#0a192f',
        minHeight: '100vh',
        color: '#ccd6f6',
        fontFamily: "'Inter', 'San Francisco', 'SF Pro Text', -apple-system, system-ui, sans-serif",
        display: 'flex',
        flexDirection: 'column'
    };

    const mainStyle = {
        flex: 1,
        width: '100%',
        maxWidth: '1400px',
        margin: '0 auto'
    };

    return (
        <div style={layoutStyle}>
            <Header />
            <main style={mainStyle}>
                {children}
            </main>
            <Footer />
        </div>
    );
};

export default MainLayout;
