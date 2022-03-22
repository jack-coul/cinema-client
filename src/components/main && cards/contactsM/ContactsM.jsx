import React from "react";
import Logo from "./inst.png";
import styles from "./Contacts.module.css";
const Contacts = () => {
  return (
    <div>
      <div className={styles.menu_contacts}>
        <div className={styles.item_info_contacts}>
          <h2>Дружба</h2>
          <h3>Контакты</h3>
          <div className={styles.info_contacts}>
            <span>+7(903)446-50-00</span>
          </div>
          <h3>Социальные сети</h3>
          <div className={styles.item_info_socials}>
            <img src={Logo} alt="" />

            <span>instagram</span>
          </div>
        </div>
        <div className={styles.item_info_contacts1}>
          <h3>Адрес</h3>
          <span>Грозный,</span>
          <span> ул.Трошева 7</span>
        </div>
        <div className={styles.item_info_contacts2}>
          <h3>Режим работы</h3>
          <span>Ежедневно с 09:00 до 00:00</span>
        </div>
      </div>
    </div>
  );
};

export default Contacts;
