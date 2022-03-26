import React, { useState } from "react";
import styles from "./Seans.module.css";
import style from "./Cinema.module.css";
import img from "../../../images/28fea504eb8034a8c957405dd134e2e5.png";
import Place from "./Place";
import { useDispatch, useSelector } from "react-redux";
import { addPlace, getSeans } from "../../../redux/features/seans";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import ReservedPlace from "./ReservedPlace";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";

const Sean = ({ time, hall, name, genre, seanID, sean }) => {
  const [block, setBlock] = useState(false);
  const seans = useSelector((state) => state.seans.seans);
  const dispatch = useDispatch();
  const placeArr = [];
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };

  if (hall._id === sean.hall._id) {
    for (let i = 0; i < hall.placesCount; i++) {
      placeArr.push(i + 1);
    }
  }

  const token = useSelector((state) => state.user.token);
  const places = useSelector((state) => state.seans.places);
  const [count, setCount] = useState(placeArr.length);

  const [openCinemaPlace, setOpenCinemaPlace] = useState(false);
  useEffect(() => {
    dispatch(getSeans(seanID));
  }, [dispatch, seanID]);

  const hundleShowCinemaPlaces = () => {
    setOpenCinemaPlace(true);
  };

  const hundleCloseWindow = () => {
    setOpenCinemaPlace(false);
    setCount(placeArr.length);
    dispatch({ type: "clearPlaces" });
  };
  const handleAddPlace = (id) => {
    if (token) {
      dispatch(addPlace(id));
      dispatch({ type: "clearPlaces" });
    }
  };
  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Text in a modal
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
          </Typography>
        </Box>
      </Modal>
      <div className={styles.seansMap} onClick={handleOpen}>
        <div onClick={hundleShowCinemaPlaces} className={styles.seansList}>
          <div className={styles.fortimeButton}>
            <button className={styles.timeButton}>{time}</button>
          </div>
          <div className={styles.info}>
            <div className={styles.name}>{name}</div>
            <div className={styles.genre}>
              <span>+6</span>
              <span>{genre}</span>
            </div>
            <div className={styles.options}>
              <span>2D</span>
              <span>•</span>
              <span>20$</span>
              <span>•</span>
              <span>{hall.status}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sean;
