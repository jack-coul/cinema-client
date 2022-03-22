import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { registerUser } from "../../../redux/features/user";
import styles from "../Navigate.module.css";

const SingUp = () => {
  const dispatch = useDispatch();
  const [login, setLogin] = useState();
  const [password, setPassword] = useState();
  const [name, setName] = useState();

  const handleRegister = (name, login, password) => {
    dispatch(registerUser(name, login, password));
  };

  return (
    <div>
      <div className={styles.singUp}>
        <input
          placeholder="Введите никнейм.."
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          placeholder="Введите email.."
          type="text"
          value={login}
          onChange={(e) => setLogin(e.target.value)}
        />
        <input
          placeholder="Введите пароль.."
          type="text"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button onClick={() => handleRegister(name, login, password)}>
          {" "}
          Зарегистрироваться
        </button>
      </div>
    </div>
  );
};

export default SingUp;
