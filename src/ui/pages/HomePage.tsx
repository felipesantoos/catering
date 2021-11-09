import Header from "../components/Header";

import styles from "../styles/pages/HomePage.module.scss";
import Banner from "../components/Banner";
import About from "../components/About";
import Menu from "../components/Menu";
import Contact from "../components/Contact";

function HomePage() {
    return (
        <div className={styles.container}>
            <Header />
            <Banner />
            <About />
            <Menu />
            <Contact />
        </div>
    );
}

export default HomePage;
