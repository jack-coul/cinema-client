import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { registerUser } from "../../../redux/features/user";
import styles from "../Navigate.module.css";

const SingUp = () => {
  const dispatch = useDispatch();
  const [login, setLogin] = useState();
  const [password, setPassword] = useState();
  const [name, setName] = useState();
  const [validLogin, setValidLogin]= useState("")
  const [validPassword, setValidPassword]=useState("")


  const handleValidEmail = (e)=>{
    setLogin(e.target.value)
    const emailValid = /^((([0-9A-Za-z]{1}[-0-9A-z\.]{1,}[0-9A-Za-z]{1})|([0-9А-Яа-я]{1}[-0-9А-я\.]{1,}[0-9А-Яа-я]{1}))@([-A-Za-z]{1,}\.){1,2}[-A-Za-z]{2,})$/u
    if(!emailValid.test(String(e.target.value))){
      setValidLogin("Недопустимый майл")
    }
    else{
      setValidLogin("")
    }
    
  }

  const handleValidPassword = (e)=>{
    setPassword(e.target.value)
    const re1 = /(?=.*[!@#$%^&*])/ //- строка содержит хотя бы один спецсимвол;
    const re2 = /[0-9a-zA-Z!@#$%^&*]{6,}/ // - не меньше шести символов
    if(!re2.test(e.target.value)){
     setValidPassword("Пароль должен не меньше шести символов")
   }
     else if(!re1.test(String(e.target.value))){
      setValidPassword("Пароль должен содержать хотя бы один спецсимвол")
    }
    else{
      setValidPassword("")
    }
  }





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
          onChange={(e) => handleValidEmail(e)}
        />
        <span>{validLogin}</span>
        <input
          placeholder="Введите пароль.."
          type="text"
          value={password}
          onChange={(e) => handleValidPassword(e)}
        />
        <span>{validPassword}</span>
        <button onClick={() => handleRegister(name, login, password)}>
          {" "}
          Зарегистрироваться
        </button>
      </div>
    </div>
  );
};

export default SingUp;
