import styles from "../styles/components/Header.module.scss";

function Header() {
    return (
        <header className={styles.container}>
            <h4>Gourmet au Catering</h4>
            <div>
                <ul>
                    <li>About</li>
                    <li>Menu</li>
                    <li>Contact</li>
                </ul>
            </div>
        </header>
    );
}

export default Header;
