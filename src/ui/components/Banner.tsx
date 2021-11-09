import BurgerImage from "../../assets/images/burger.jpg";

import styles from "../styles/components/Banner.module.scss";

function Banner() {
    return (
        <div className={styles.container}>
            <img src={BurgerImage} alt="Burger photo" />
            <h1>Le Catering</h1>
        </div>
    );
}

export default Banner;
