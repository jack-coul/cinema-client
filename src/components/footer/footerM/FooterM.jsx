import React from 'react';
import styles from './FooterM.module.css';
import Logo from '../../../images/paypal (1).png'
import Logo2  from '../../../images/google-pay.png';
import Logo3 from '../../../images/visa.png';
import Logo4 from '../../../images/maestro.png';
import Logo5 from '../../../images/apple-pay.png'
import Logo6 from '../../../images/insticon.png'
const FooterM = () => {
    return (
        
            <div className={styles.footer_container}>
                <div className={styles.footer_main}>
                    <div className={styles.section1}>
                      <h2 className={styles.footer_title}>Меню</h2>
                      <div className={styles.footer_links}>
                          <div className={styles.link_item}>
                             <a href=''>Афиша</a>
                             <a href=''>Сеансы</a>
                             <a href=''>Новости</a>
                             <a href=''>Контакты</a>
                          </div>
                          <div className={styles.footer_endsection}>
                              <h4>© 2022. Все права защищеныРазработано в Кинопланe</h4>
                          </div>
                      </div>
                      <button className={styles.feedback_btn}>Мне не пришел билет</button>
                    </div>
                    <div className={styles.section2}>
                          <h2>Способы оплаты</h2> 
                          <div className={styles.pay_sec2}>
                          <img src={Logo} alt =''></img>
                          <img src={Logo2} alt =''></img>
                          <img src={Logo3} alt =''></img>
                          <img src={Logo4} alt =''></img>
                          <img src={Logo5} alt =''></img>
                          </div>
                          <div className={styles.footer_social_w}>
                              <h2>Социальные сети</h2>
                              <img src={Logo6} alt=''></img>
                          </div>
                          
                    </div>
                    <div className={styles.section3}>
                       <div className={styles.footer_wrapper}>
                           <h2><span>Грозный</span></h2>
                           <h4>Ул.Трошева 7</h4>
                       </div>
                       <div className={styles.footer_contacts_n}>
                           <h3>Контакты</h3>
                           <a href = '+89060950695'>tel:+89060950695</a>
                       </div>
                       <div className={styles.footer_jobtime}>
                           <h3>Время работы</h3>
                           <h5>Ежедневно с 9:00 до 22:00</h5>
                       </div>
                    </div>
                </div>
            </div>
            
        
    );
}

export default FooterM;
