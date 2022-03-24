import React from "react";
import styles from "../Navigate.module.css";
import style from "./Signin.module.css";
import { useDispatch } from "react-redux";
import { loginUser } from "../../../redux/features/user";
import { useState } from "react";
import { Link } from "react-router-dom";

const SingIn = () => {
  const dispatch = useDispatch();
  const [login, setLogin] = useState();
  const [password, setPassword] = useState();
  const [validLogin, setValidLogin] = useState("");
  const [validPassword, setValidPassword] = useState("");

  const handleValidEmail = (e) => {
    setLogin(e.target.value);
    const emailValid =
      /^((([0-9A-Za-z]{1}[-0-9A-z\.]{1,}[0-9A-Za-z]{1})|([0-9А-Яа-я]{1}[-0-9А-я\.]{1,}[0-9А-Яа-я]{1}))@([-A-Za-z]{1,}\.){1,2}[-A-Za-z]{2,})$/u;
    if (!emailValid.test(String(e.target.value))) {
      setValidLogin("Недопустимый майл");
    } else {
      setValidLogin("");
    }
  };

  const handleValidPassword = (e) => {
    setPassword(e.target.value);
    const re1 = /(?=.*[!@#$%^&*])/; //- строка содержит хотя бы один спецсимвол;
    const re2 = /[0-9a-zA-Z!@#$%^&*]{6,}/; // - не меньше шести символов
    if (!re2.test(e.target.value)) {
      setValidPassword("Пароль должен не меньше шести символов");
    } else if (!re1.test(String(e.target.value))) {
      setValidPassword("Пароль должен содержать хотя бы один спецсимвол");
    } else {
      setValidPassword("");
    }
  };

  const handleLogin = (login, password) => {
    dispatch(loginUser(login, password));
  };

  return (
    <div className={styles.singIn}>
      <div className="login-box">
        <h2>Login</h2>
        <form>
          <div className="user-box">
            <label>Email</label>
            <input
              value={login}
              onChange={(e) => handleValidEmail(e)}
              type="text"
              name=""
              required=""
            />

            <div className={style.validLogins}>{validLogin}</div>
          </div>
          <div className="user-box">
            <label>Password</label>
            <input
              value={password}
              onChange={(e) => handleValidPassword(e)}
              type="password"
              name=""
              required=""
            />

            <div className={style.validLogins}>{validPassword}</div>
          </div>
          <div className="buttons">
            <Link onClick={() => handleLogin(login, password)} to="/">
              <span></span>
              <span></span>
              <span></span>
              <span></span>Sign in
            </Link>
            <Link to="/signup">
              <span></span>
              <span></span>
              <span></span>
              <span></span>Sign up
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SingIn;
