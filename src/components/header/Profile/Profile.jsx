import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Button from "@mui/material/Button";
import Avatar from "@mui/material/Avatar";
import styles from "../../navigate/Navigate.module.css";
import LogoutIcon from "@mui/icons-material/Logout";
import cssc from "./Profile.module.css";
import cinemaImg from "../../../images/6.png";
import cinemaImg3D from "../../../images/5.png";
import { Link } from "react-router-dom";
import { getUserBusy } from "../../../redux/features/busy";
import { getUser } from "../../../redux/features/user";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "#131e7f;;",
  border: "2px solid #000",
  boxShadow: 24,
  borderRadius: 2,
  pt: 2,
  px: 2,
  pb: 2,
};

const Profile = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUser());
    dispatch(getUserBusy());
  }, [dispatch]);
  const { tickets, loadingTickets } = useSelector((state) => state.busy);
  const { login, userName, loadUser } = useSelector((state) => state.user);
  const AllListFilms = tickets.map((ticket) => ticket.seans.film.name);
  const unique = (filmsList) => {
    let result = [];

    for (let film of filmsList) {
      if (!result.includes(film)) {
        result.push(film);
      }
    }

    return result;
  };
  const films = unique(AllListFilms);

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
    dispatch(getUserBusy());
  };
  const handleClose = () => {
    setOpen(false);
  };

  const handleExit = () => {
    dispatch({ type: "Exit" });
  };

  return (
    <div>
      <Avatar onClick={handleOpen} src="" />
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="parent-modal-title"
        aria-describedby="parent-modal-description"
      >
        <Box sx={{ ...style, width: 450, height: 250 }} className={cssc.www}>
          <div className={cssc.wrapProfile}>
            <div className={cssc.imgWrap}>
              <img
                src="https://cdn-icons-png.flaticon.com/512/236/236831.png"
                alt=""
              />
            </div>
            <div className={cssc.infoWrap}>
              <div className={cssc.imgBox1}>
                <img src={cinemaImg} alt="" />
              </div>
              <div className={cssc.imgBox2}>
                <img src={cinemaImg3D} alt="" />
              </div>

              <div className={cssc.userName}>
                <span>user:</span> {loadUser ? "loading..." : userName}
              </div>
              <div className={cssc.userEmail}>
                <span>email:</span>
                {loadUser ? "loading..." : login}
              </div>
            </div>
          </div>
          <div className={cssc.ticketsWrap}>
            <div>ваши билеты:</div>
            <div className={cssc.tickets}>
              {films.map((film, i) => (
                <div>
                  {loadingTickets ? (
                    "loading..."
                  ) : (
                    <ChildModal
                      film={film}
                      key={i}
                      tickets={tickets.filter(
                        (ticket) => ticket.seans.film.name === film
                      )}
                    />
                  )}
                </div>
              ))}
            </div>
          </div>

          <div className={cssc.singWrap}>
            <Link
              onClick={() => handleExit()}
              className={styles.singUp}
              to="/signin"
            >
              <LogoutIcon />
            </Link>
          </div>
        </Box>
      </Modal>
    </div>
  );
};

const ChildModal = ({ film, tickets }) => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const places = tickets.map((ticket) => {
    if (ticket.seans.film.name === film) {
      return ticket.place;
    }
  });
  const startSeans = tickets.find((ticket) => ticket.seans.film.name === film);

  return (
    <React.Fragment>
      <Button className={cssc.films} onClick={handleOpen}>
        {film}
      </Button>
      <Modal
        hideBackdrop
        open={open}
        onClose={handleClose}
        aria-labelledby="child-modal-title"
        aria-describedby="child-modal-description"
      >
        <Box className={cssc.litleModal} sx={{ ...style, width: 300 }}>
          <h2 id="child-modal-title">
            <span>Фильм: </span>
            {film}
          </h2>
          <p id="child-modal-description">
            <span>Количество билетов: </span> {tickets.length}
          </p>
          <p>
            Места: <span>{places.join(", ")}</span>
          </p>
          <p>
            Начало сеанса: <span>{startSeans.seans.time}</span>
          </p>
          <Button className={cssc.closeWindow} onClick={handleClose}>
            Close Child Modal
          </Button>
        </Box>
      </Modal>
    </React.Fragment>
  );
};

export default Profile;
