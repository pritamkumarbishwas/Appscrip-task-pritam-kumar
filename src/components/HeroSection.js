import React from 'react';
import styles from './HeroSection.module.css';

function HeroSection() {
    return (
        <div className={styles.heroSection}>
            <h6 className={styles.title}>DISCOVER OUR PRODUCTS</h6>

            <div className={styles.subtitle}>
                Lorem ipsum dolor sit amet consectetur. Amet est posuere rhoncus scelerisque.
                Dolor integer scelerisque nibh amet mi ut elementum dolor.
            </div>
        </div>
    );
}

export default HeroSection;
