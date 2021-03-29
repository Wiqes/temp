import { AppBar, Avatar, Box, Toolbar } from '@material-ui/core';

import { useStyles } from '@layout/style';

export const Header = () => {
  const classes = useStyles();

  return (
    <AppBar position="static" color="primary">
      <Toolbar className={classes.toolbar}>
        <Avatar
          className={classes.avatar}
          alt="Cindy Baker"
          src="http://healthysoulmag.com/wp-content/uploads/2019/04/hellomagazine.com_.jpg"
        />
        <Box display="flex" flexDirection="column" justifyContent="flex-start" alignItems="flex-start">
          <div className={classes.userName}>bad.forecast</div>
          <div className={classes.role}>Admin</div>
        </Box>
      </Toolbar>
    </AppBar>
  );
};
