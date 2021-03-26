import React from 'react';
import { Button as MuiButton } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

export const Button = ({ onClick, color, children, type, variant, width, height }) => {
  const useStyles = makeStyles((theme, buttonWidth = width, buttonHeight = height) => ({
    root: {
      padding: `10px ${theme.spacing(10)}px`,
      fontWeight: 'bold',
      borderRadius: '40px',
      width: buttonWidth,
      height: buttonHeight,
    },
  }));

  const classes = useStyles();

  return (
    <MuiButton className={classes.root} color={color} onClick={onClick} type={type} variant={variant}>
      {children}
    </MuiButton>
  );
};
