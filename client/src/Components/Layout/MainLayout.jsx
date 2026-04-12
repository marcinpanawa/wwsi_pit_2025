import Header from "./Header";
import Footer from "./Footer";
import CookiePolicy from "./cookiePolicy";
import WCAG from "./WCAG";


const MainLayout = ({ children }) => {


    return (
        <div>
            <WCAG />
            <Header />
            <main>
                {children}
            </main>
            <Footer />
            <CookiePolicy />
        </div>
    );
};

export default MainLayout;
