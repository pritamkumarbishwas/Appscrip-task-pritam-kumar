'use client';
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart as faHeartRegular } from '@fortawesome/free-regular-svg-icons'; 
import { faHeart as faHeartSolid } from '@fortawesome/free-solid-svg-icons'; 
import styles from './Products.module.css';

function Card({ id, name, image }) {
    const [isFavorite, setIsFavorite] = useState(false);

    const handleHeartClick = () => {
        setIsFavorite(prevState => !prevState);
    };

    return (
        <div key={id} className={styles.productItem}>
            {id === 1 && <div className={styles.new}>NEW PRODUCT</div>}
            <div className={styles.activityCard}>
                <img src={image} alt={name} />
                <div className={styles.cardText}>
                    <div className={styles.productName}>
                        <p style={{ margin: "0px" }}>{name}</p>
                    </div>
                    <div className={styles.productDesc}>
                        <p>{name}</p>
                        <div style={{ width: '10%', margin: "5px" }}>
                            <FontAwesomeIcon
                                icon={isFavorite ? faHeartSolid : faHeartRegular} // Switch icon based on state
                                className={`${styles.favirout} ${isFavorite ? styles.solid : ''}`}
                                onClick={handleHeartClick}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Card;
