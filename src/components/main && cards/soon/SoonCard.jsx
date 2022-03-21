import React from 'react';
import styles from './Soon.module.css';

const SoonCard = () => {
    return (
        <div className={styles.soonCard}>
           <div className={styles.backroundImage}></div>
           <div className={styles.soonCardDate}>
               с 24 марта 2022
           </div>
           <div className={styles.soonCardTitle}>
               <h3>Зверопой 2</h3>
           </div>
        </div>
    );
};

export default SoonCard;