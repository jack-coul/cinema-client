import React from "react";
import styles from "../Navigate.module.css";
import { useDispatch } from "react-redux";
import { loginUser } from "../../../redux/features/user";
import { useState } from "react";


const SingIn = () => {
  const dispatch = useDispatch()
  const [login, setLogin]= useState()
  const [password, setPassword]= useState()

  const handleLogin = (login,password)=>{
    dispatch(loginUser(login,password))
  }
  const handleLogin = (login, password)=>{
    dispatch(loginUser(login,password))
  }
  return (
    <div className={styles.singIn}>
      <input placeholder="Введите email.." type="text"  value={login} onChange = {(e)=> setLogin(e.target.value)}/>
      <input placeholder="Введите пароль.." type="text" value={password} onChange ={(e)=> setPassword(e.target.value)}/>
      <button onClick={()=> handleLogin(login,password)}> Авторизоваться</button>
    </div>
  );
};

export default SingIn;
