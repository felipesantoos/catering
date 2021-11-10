import styles from "../styles/components/Header.module.scss";

function Header() {
    return (
        <header className={styles.container}>
            <h4><a href="#">Gourmet au Catering</a></h4>
            <div>
                <ul>
                    <li><a href="#about">About</a></li>
                    <li><a href="#menu">Menu</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
            </div>
        </header>
    );
}

export default Header;
