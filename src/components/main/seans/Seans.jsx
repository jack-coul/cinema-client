import React, { useState } from 'react';
import styles from './Seans.module.css';
import { fakeDatabase } from './fakeDatabase';


function Seans(props) {
    const [seanses, setSeanses] = useState(fakeDatabase)
    return (
        <div className={styles.seans}>
            <div className={styles.timing}>
                <button className={styles.today}>Сегодня</button>
                <button className={styles.tomorrow}>Завтра</button>
                <button className={styles.aftertomorrow}>Среда 23 мар</button>
            </div>
            <div className={styles.seansMap}>
                    {seanses.map((seans, index) =>{
                        return (
                            <div className={styles.seansList}>
                                <div className={styles.fortimeButton}>
                                    <button className={styles.timeButton}>13:00</button>
                                </div>
                                <div className={styles.info}>
                                    <div className={styles.name}>{seans.name}</div>
                                    <div className={styles.genre}>
                                        <span>{seans.age}+</span>
                                        <span>{seans.genre}</span>
                                    </div>
                                    <div className={styles.options}>
                                        <span>{seans.screen}</span>
                                        <span>•</span>
                                        <span>{seans.price}</span>
                                        <span>•</span>
                                        <span>{seans.hall}</span>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                
            </div>
        </div>
    );
}

export default Seans;