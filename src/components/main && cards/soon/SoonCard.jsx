import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Soon.module.css';

const SoonCard = ({film}) => {
    return (
        <Link to={`/filmdiscription/${film._id}`}>
        <div className={styles.soonCard}>
           <div className={styles.backroundImage}>
               <img  className={styles.backroundImage} src={film.img} alt="" />
           </div>
           <div className={styles.soonCardDate}>
               с 24 марта 2022
           </div>
           <div className={styles.soonCardTitle}>
               <h3>{film.name}</h3>
           </div>
        </div>
        
        </Link>
    );
};

export default SoonCard;