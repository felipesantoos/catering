import styles from "../styles/components/MenuItem.module.scss";

interface MenuItemProps {
    title: string;
    describe: string;
}

function MenuItem({ title, describe }: MenuItemProps) {
    return (
        <div className={styles.container}>
            <h3>{title}</h3>
            <p>{describe}</p>
        </div>
    );
}

export default MenuItem;
