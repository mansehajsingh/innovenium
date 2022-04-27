import React from "react";
import Navbar, { navItems } from "../../components/Navbar";
import styles from "./styles.module.css";

const HomePage = ({}) => {
    return (
        <>
            <title>Innovenium</title>
            <Navbar activeItem={navItems.home}/>
            <div className={styles.filler_div}>

            </div>
        </>
    );
}

export default HomePage;