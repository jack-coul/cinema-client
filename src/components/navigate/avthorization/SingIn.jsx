import React from "react";
import styles from "../Navigate.module.css";

const SingIn = () => {
  return (
    <div className={styles.singIn}>
      <input placeholder="Введите email.." type="text" />
      <input placeholder="Введите пароль.." type="text" />
      <button> Авторизоваться</button>
    </div>
  );
};

export default SingIn;
