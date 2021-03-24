import React from "react";
import { AppBar, Avatar, Box, Toolbar, Typography } from "@material-ui/core";

import { useStyles } from "@components/layout/style";

const Header = () => {
  const classes = useStyles();

  return (
    <AppBar position="static" color="primary">
      <Toolbar>
        <Typography variant="h6" className={classes.title}>
          Bad Forecast
        </Typography>
        <Avatar
          className={classes.avatar}
          alt="Cindy Baker"
          src="http://healthysoulmag.com/wp-content/uploads/2019/04/hellomagazine.com_.jpg"
        />
        <Box
          display="flex"
          flexDirection="column"
          justifyContent="flex-start"
          alignItems="flex-start"
        >
          <div className={classes.userName}>bad.forecast</div>
          <div className={classes.role}>Admin</div>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export { Header };
