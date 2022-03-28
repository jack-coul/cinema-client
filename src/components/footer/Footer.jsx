import React from "react";
import styles from "./Footer.module.css";
import FooterM from "./footerM/FooterM";

const Footer = () => {
  return (
    <>
      <div className={styles.footer}>
        <div className={styles.footerLogo}>
          <img
            src="/static/media/logo-1.fe839b6eb63b8e453d184d9633de985c.svg"
            alt=""
          />
        </div>
        <div className={styles.info}>
          Контакты: <span>+7963-708-76-35</span>
        </div>
      </div>
      <FooterM />
    </>
  );
};

export default Footer;
