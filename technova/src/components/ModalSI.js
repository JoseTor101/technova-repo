import React, { Fragment, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import FormSingIn from './Form_SignIn';


const useStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

export default function TransitionsModal(props) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Fragment>
      <button
        className="button_header"
        type="button"
        id="loginButton"
        onClick={handleOpen}
      > 
        <span className="a_items_header">
          Iniciar sesión
        </span>
      </button>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{ 
          timeout: 1000,
        }}
      >
        <Fade in={open}>
          <div className={classes.paper}>
            <FormSingIn userPhotoState={props.userPhotoState}/>
          </div>
        </Fade>
      </Modal>
    </Fragment>
  );
}
