import * as React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Button from "@mui/material/Button";
import Avatar from "@mui/material/Avatar";
import styles from "../../navigate/Navigate.module.css";
import LogoutIcon from "@mui/icons-material/Logout";
import cssc from "./Profile.module.css"

import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  borderRadius: 5,
  pt: 2,
  px: 2,
  pb: 2,
   
};

const ChildModal = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <React.Fragment>
      <Button className={cssc.openChildModal} onClick={handleOpen}>Open Child Modal</Button>
      <Modal
        hideBackdrop
        open={open}
        onClose={handleClose}
        aria-labelledby="child-modal-title"
        aria-describedby="child-modal-description"
      >
        <Box className={cssc.litleModal} sx={{ ...style, width: 300 }}>
          <h2 id="child-modal-title">Text in a child modal</h2>
          <p id="child-modal-description">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          </p>
          <Button className={cssc.closeWindow} onClick={handleClose}>Close Child Modal</Button>
        </Box>
      </Modal>
    </React.Fragment>
  );
};

const Profile = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const dispatch = useDispatch();
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
        <Box sx={{ ...style, width: 500, height: 300, }} className={cssc.www}>
          <div className={cssc.wrapProfile}>
            <div className={cssc.imgWrap}>
              <img src="https://cdn-icons-png.flaticon.com/512/1538/1538462.png" alt="" />
            </div>
            <div className={cssc.infoWrap}>
              <div className={cssc.userName}><span>user:</span> Ibra</div>
              <div className={cssc.userEmail}><span>email:</span>ibra@gmail.com</div>
            </div>
          </div>
          <ChildModal />
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

export default Profile;
