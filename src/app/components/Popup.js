import React, { useEffect } from 'react';
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  Slide,
} from '@mui/material';
import { Button } from './';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function PopupMessage({
  handleClick,
  message,
  buttonLabel,
  isSubmitting,
  open,
  setOpen,
}) {
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
            {message}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button color="inherit" handleClick={handleClose} label="Cancel" />
          <Button
            color="error"
            handleClick={handleClick}
            label={buttonLabel}
            disabled={isSubmitting}
          />
        </DialogActions>
      </Dialog>
    </div>
  );
}
