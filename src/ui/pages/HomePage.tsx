import Header from "../components/Header";
import BurgerImage from "../../asserts/images/burger.jpg";

import styles from "../styles/pages/HomePage.module.scss";

function HomePage() {
    return (
        <div className={styles.container}>
            <Header />
            <img src={BurgerImage} alt="" />
        </div>
    );
}

export default HomePage;
