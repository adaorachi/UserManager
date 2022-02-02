import React from 'react';
import { Button, CircularProgress } from '@mui/material';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
  buttonText: {
    textTransform: 'none !important',
  },
});

export default function AppButton({
  variant = 'contained',
  size = 'small',
  label,
  color = 'success',
  handleClick,
  disabled,
  ...rest
}) {
  const classes = useStyles();

  return (
    <Button
      classes={{ root: classes.buttonText }}
      variant={variant}
      color={color}
      onClick={handleClick}
      size={size}
      {...rest}
    >
      {disabled ? <CircularProgress color="inherit" size={22} /> : <>{label}</>}
    </Button>
  );
}
