import React from "react";
import styles from "./Header.module.css";
import logo from "../../images/logo-1.svg";
import { Link } from "react-router-dom";
import Profile from "./Profile/Profile";
import LoginIcon from "@mui/icons-material/Login";
import { useSelector } from "react-redux";

const Header = () => {
  const token = useSelector((state) => state.user.token);

  return (
    <div className={styles.header}>
      <div className={styles.container}>
        {" "}
        <Link to="/">
          {" "}
          <img src={logo} alt="" />
        </Link>
        <div className={styles.adressWrap}>
          <div className={styles.cityName}>Ессентуки</div>
          <div className={styles.streetName}>ул. Анджиевского, 1</div>
        </div>
        <div className={styles.number}>+7(903)446-50-00</div>
      </div>
      <div className={styles.logoInst}>
        {!token ? (
          <div className={styles.singWrap}>
            <Link className={styles.singUp} to="/signup">
              <LoginIcon />
            </Link>
          </div>
        ) : (
          <Profile />
        )}
      </div>
    </div>
  );
};

export default Header;
