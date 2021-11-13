import { createRef, useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";

import styles from "../styles/components/Header.module.scss";

function Header() {
    const [isMenuShowed, setIsMenuShowed] = useState(false);
    const menuRef = createRef<HTMLDivElement>();
    const headerRef = createRef<HTMLElement>();

    function showMenu() {
        if (menuRef.current) {
            if (isMenuShowed) {
                menuRef.current.style.display = "none";
                setIsMenuShowed(false);
            } else {
                menuRef.current.style.display = "flex";
                setIsMenuShowed(true);
            }
        }
    }

    const mql = window.matchMedia("(max-width: 670px)");

    function setHeader(event: any) {
        if (event.matches) {
            if (headerRef.current && menuRef.current) {
                headerRef.current.style.flexDirection = "column";
                menuRef.current.style.display = "none";
                setIsMenuShowed(false);
            }
        } else {
            if (headerRef.current && menuRef.current) {
                headerRef.current.style.flexDirection = "row";
                menuRef.current.style.display = "flex";
                setIsMenuShowed(true);
            }
        }
    }

    mql.addEventListener("change", setHeader);

    return (
        <header ref={headerRef} className={styles.container}>
            <div>
                <h4><a href="#banner">Gourmet au Catering</a></h4>
                <GiHamburgerMenu onClick={showMenu} />
            </div>
            <div ref={menuRef}>
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
