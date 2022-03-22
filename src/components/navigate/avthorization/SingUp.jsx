import React from "react";
import styles from "../Navigate.module.css";

const SingUp = () => {
  return (
    <div>
      <div className={styles.singUp}>

        <input placeholder="Введите никнейм.." type="text" />
        <input placeholder="Введите email.." type="text" />
        <input placeholder="Введите пароль.." type="text" />
        <button> Зарегистрироваться</button>
      </div>
    </div>
  );
};

export default SingUp;
