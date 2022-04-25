import React from "react";
import { Link } from "react-router-dom";
import { 
    BsTwitter,
    BsYoutube,
} from "react-icons/bs";
import { AiFillInstagram } from "react-icons/ai";
import { SiDiscord } from "react-icons/si";
import styles from "./styles.module.css";

export const navItems = {
    home: "home",
    team: "team",
    about: "about"
}

const itemsList = ["home", "about", "team"];

const itemToLabel = {
    home: "Home",
    about: "About",
    team: "Team",
}

const itemsToPath = {
    home: "/",
    about: "/about",
    team: "/team"
}

const Navbar = ({
    activeItem = navItems.home
}) => {

    const renderLinks = () => {
        return itemsList.map((item) => {
            return (
                <Link
                    to={itemsToPath[item]}
                    className={styles.link}
                    key={item}
                >
                    {itemToLabel[item]}
                </Link>
            )
        });
    }

    return (
        <nav className={styles.navbar}>
            <div className={styles.left}>
                <h1 className={styles.LOGO}>LOGO</h1>
                <div className={styles.links}>
                    {renderLinks()}
                </div>
            </div>
            <div className={styles.right}>
                <Link to="/">
                    <SiDiscord size={25} className={styles.icon}/>
                </Link>
                <Link to="/">
                    <AiFillInstagram size={25} className={styles.icon}/>
                </Link>
                <Link to="/">
                    <BsYoutube size={25} className={styles.icon}/>
                </Link>
                <Link to="/">
                    <BsTwitter size={25} className={styles.icon}/>
                </Link>
            </div>
        </nav>
    );
}

export default Navbar;