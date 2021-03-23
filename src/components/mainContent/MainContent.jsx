import React from 'react';
import { AppBar, Avatar, Toolbar, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    borderTop: '1px solid #DCDCDC',
    borderRadius: '5px',
  },
  title: {
    flexGrow: 1,
    marginLeft: theme.spacing(16),
    fontWeight: 'bold',
  },
}));

const MainContent = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static" color="default">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            Bad Forecast
          </Typography>
          <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
        </Toolbar>
      </AppBar>
    </div>
  );
};

export { MainContent };
