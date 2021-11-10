import Tacos from "../../assets/images/tacos.jpg";

import styles from "../styles/components/Menu.module.scss";
import MenuItem from "./MenuItem";

function Menu() {
    return (
        <div className={styles.container} id="menu">
            <div>
                <h1>Our Menu</h1>
                <MenuItem
                    title="Bread Basket"
                    describe="Assortment of fresh baked fruit breads and muffins 5.50"
                />
                <MenuItem
                    title="Honey Almond Granola with Fruits"
                    describe="Natural cereal of honey toasted oats, raisins, almonds and dates 7.00"
                />
                <MenuItem
                    title="Belgian Waffle"
                    describe="Vanilla flavored batter with malted flour 7.50"
                />
                <MenuItem
                    title="Scrambled eggs"
                    describe="Scrambled eggs, roasted red pepper and garlic, with green onions 7.50"
                />
                <MenuItem
                    title="Blueberry Pancakes"
                    describe="With syrup, butter and lots of berries 8.50"
                />
            </div>
            <img src={Tacos} alt="Plate with tacos" />
        </div>
    );
}

export default Menu;
