import React from 'react';
import Card from './Card';
import styles from './Cards.module.css'
import CardTomorrow from './CardTomorrow';

const Cards = () => {
    return (
        <div className={styles.cards}>
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <CardTomorrow />
            <CardTomorrow />
            <CardTomorrow />
            <CardTomorrow />
        </div>
    );
};

export default Cards;