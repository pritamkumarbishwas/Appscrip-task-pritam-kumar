import React from 'react';
import styles from './Menu.module.css';

function Menu() {
    return (
        <>
            <nav className={styles.navbar}>
                <ul className={styles.navList}>
                    <li className={styles.navItem}><a href="#shop">Shop</a></li>
                    <li className={styles.navItem}><a href="#skills">Skills</a></li>
                    <li className={styles.navItem}><a href="#stories">Stories</a></li>
                    <li className={styles.navItem}><a href="#about">About</a></li>
                    <li className={styles.navItem}><a href="#contact">Contact Us</a></li>
                </ul>
            </nav>
            <hr />
        </>
    );
}

export default Menu;
