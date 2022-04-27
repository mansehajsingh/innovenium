import React from "react";
import { Link } from "react-router-dom";
import {
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
} from '@chakra-ui/react';
import { 
    BsTwitter,
    BsYoutube,
} from "react-icons/bs";
import { AiFillInstagram } from "react-icons/ai";
import { SiDiscord } from "react-icons/si";
import MobileStoreButton from 'react-mobile-store-button';
import {
    navItems,
    itemsList,
    itemToLabel,
    itemsToPath,
} from "../../Navbar";
import styles from "./styles.module.css";

const Navdrawer = ({
    isOpen,
    onClose,
}) => {

    const renderLinks = () => {
        return itemsList.map((item) => {
            return (
                <Link
                    to={itemsToPath[item]}
                    className={styles.dr_link}
                    key={item}
                >
                    {itemToLabel[item]}
                </Link>
            );
        })
    }

    const renderSocials = () => {
        const size = 20;
        return (
            <>
                <Link to="/">
                    <SiDiscord 
                        className={styles.social_icon}
                        size={size}
                    />
                </Link>
                <Link to="/">
                    <AiFillInstagram
                        className={styles.social_icon}
                        size={size}
                    />
                </Link>
                <Link to="/">
                    <BsYoutube
                        className={styles.social_icon}
                        size={size}
                    />
                </Link>
                <Link to="/">
                    <BsTwitter
                        className={styles.social_icon}
                        size={size}
                    />
                </Link>
            </>
        )
    }

    return (
        <Drawer 
            isOpen={isOpen} 
            onClose={onClose}
            placement="right"
        >
            <DrawerOverlay />
            <DrawerContent bgColor={"#242526"}>
                <DrawerCloseButton _focus={{boxShadow: "none"}} color="#FFF"/>
                <DrawerHeader>
                </DrawerHeader>
                <DrawerBody>
                    <div className={styles.dr_links}>
                        {renderLinks()}
                    </div>
                    <div
                        className={styles.download}
                    >
                        <MobileStoreButton
                            width={150}
                            store="ios"
                            url={""}
                            linkProps={{ title: 'iOS Store Button' }}
                        />
                    </div>
                </DrawerBody>
                <DrawerFooter>
                    <div className={styles.socials}>
                        {renderSocials()}
                    </div>
                </DrawerFooter>
            </DrawerContent>
        </Drawer>
    );
}

export default Navdrawer;