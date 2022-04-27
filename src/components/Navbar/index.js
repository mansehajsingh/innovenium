import React from "react";
import { Link } from "react-router-dom";
import { 
    BsTwitter,
    BsYoutube,
} from "react-icons/bs";
import { AiFillInstagram } from "react-icons/ai";
import { SiDiscord } from "react-icons/si";
import { GiHamburgerMenu } from "react-icons/gi";
import { useDisclosure } from "@chakra-ui/react";
import Navdrawer from "./Navdrawer";
import useWindow from "../../hooks/useWindow";
import styles from "./styles.module.css";

export const navItems = {
    home: "home",
    team: "team",
    about: "about",
    speaker: "speaker",
}

export const itemsList = ["home", "about", "team", "speaker"];

export const itemToLabel = {
    home: "Home",
    about: "About",
    team: "Team",
    speaker: "Speakers"
}

export const itemsToPath = {
    home: "/",
    about: "/about",
    team: "/team",
    speaker: "/speakers",
}

const Navbar = ({
    activeItem = navItems.home
}) => {

    const { isOpen, onOpen, onClose } = useDisclosure();
    const { width: windowWidth, height: windowHeight } = useWindow();

    const renderLinks = () => {
        return itemsList.map((item) => {
            return (
                <Link
                    to={itemsToPath[item]}
                    className={item === activeItem ? styles.active_link : styles.link}
                    key={item}
                >
                    {itemToLabel[item]}
                </Link>
            )
        });
    }

    return (
        <>
        <nav className={styles.navbar}>
            <div className={styles.left}>
                <h1 className={styles.LOGO}>LOGO</h1>
                <div className={styles.links}>
                    {windowWidth > 768 && renderLinks()}
                </div>
            </div>
            <div className={styles.right}>
                {windowWidth > 768 ? (
                    <>
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
                    </>
                ) : (
                    <button 
                        className={styles.menu_btn}
                        onClick={onOpen}
                    >
                        <GiHamburgerMenu 
                            className={styles.ham_icon}
                            size={20}
                        />
                    </button>
                )}
            </div>
        </nav>
        <Navdrawer isOpen={isOpen} onClose={onClose}/>
        </>
    );
}

export default Navbar;