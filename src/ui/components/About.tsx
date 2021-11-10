import Food from "../../assets/images/food.jpg";

import styles from "../styles/components/About.module.scss";

function About() {
    return (
        <div className={styles.container} id="about">
            <img 
                src={Food} 
                alt="Many kinds of foods: rice, chicken, lemon etc."
            />
            <div>
                <h1>About Catering</h1>
                <span>Tradition since 1889</span>
                <p>
                    The Catering was founded in blabla by Mr. Smith in lorem 
                    ipsum dolor sit amet, consectetur adipiscing elit consectetur
                    adipiscing elit, sed do eiusmod tempor incididunt ut labore 
                    et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud 
                    exercitation ullamco laboris nisi ut aliquip ex ea commodo 
                    consequat. Duis aute iruredolor in reprehenderit in voluptate 
                    velit esse cillum dolore eu fugiat nulla pariatur. We only 
                    use <span>seasonal</span> ingredients.
                </p>
                <p className={styles.grey}>
                    Excepteur sint occaecat cupidatat non proident, sunt in 
                    culpa qui officia deserunt mollit anim id est laborum 
                    consectetur adipiscing elit, sed do eiusmod temporincididunt 
                    ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
                    quis nostrud exercitation ullamco laboris nisi ut aliquip ex 
                    ea commodo consequat.
                </p>
            </div>
        </div>
    );
}

export default About;
