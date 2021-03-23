import React from 'react';
import { Button as MuiButton } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const Button = ({ onClick, color, children, type, variant, width }) => {
  const useStyles = makeStyles((theme, buttonWidth = width) => ({
    root: {
      padding: `10px ${theme.spacing(10)}px`,
      fontWeight: 'bold',
      fontSize: '13px',
      borderRadius: '40px',
      width: buttonWidth,
    },
  }));

  const classes = useStyles();

  return (
    <MuiButton className={classes.root} color={color} onClick={onClick} type={type} variant={variant}>
      {children}
    </MuiButton>
  );
};

export { Button };
