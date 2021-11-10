import Header from "../components/Header";

import styles from "../styles/pages/HomePage.module.scss";
import Banner from "../components/Banner";
import About from "../components/About";
import Menu from "../components/Menu";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

function HomePage() {
    return (
        <div className={styles.container}>
            <Header />
            <Banner />
            <About />
            <Menu />
            <Contact />
            <Footer />
        </div>
    );
}

export default HomePage;
