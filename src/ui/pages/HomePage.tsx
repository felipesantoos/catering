import Header from "../components/Header";

import styles from "../styles/pages/HomePage.module.scss";
import Banner from "../components/Banner";
import About from "../components/About";

function HomePage() {
    return (
        <div className={styles.container}>
            <Header />
            <Banner />
            <About />
        </div>
    );
}

export default HomePage;
