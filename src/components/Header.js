import React from 'react';
import styles from './Header.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faHeart, faShoppingBag, faUser } from '@fortawesome/free-solid-svg-icons';
import Image from 'next/image';

const Header = () => {
    return (
        <header className={styles.header}>
            <div className={styles.logoContainer}>
                <Image src="/image/Logo.png" alt="logo" width={30} height={30} className={styles.logoImage} />
            </div>
            <h1 className={styles.logoText}>Logo</h1>
            <nav className={styles.nav}>
                <ul className={styles.navIcons}>
                    <li><a href='#'><Image src="/image/search-normal.png" alt="Google Pay" width={20} height={20} /></a></li>
                    <li><a href='#'><Image src="/image/heart.png" alt="Google Pay" width={20} height={20} /></a></li>
                    <li><a href='#'><Image src="/image/shopping-bag.png" alt="Google Pay" width={20} height={20} /></a></li>
                    <li className={styles.user}><a href='#'><Image src="/image/profile.png" alt="Google Pay" width={20} height={20} /></a></li>
                    <li className={styles.eng}>ENG  <span>v</span> </li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
