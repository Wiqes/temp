import React from "react";
import { AppBar, Avatar, Box, Toolbar, Typography } from "@material-ui/core";
import ListItemText from "@material-ui/core/ListItemText";
import ListItem from "@material-ui/core/ListItem";
import Divider from "@material-ui/core/Divider";
import List from "@material-ui/core/List";
import Grid from "@material-ui/core/Grid";

import { useStyles } from "@components/mainContent/style";

const MainContent = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
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

      <Grid container spacing={3}>
        <Grid item xs={1}></Grid>
        <Grid item xs={3}>
          <List
            component="nav"
            className={classes.list}
            aria-label="mailbox folders"
          >
            <ListItem button>
              <ListItemText primary="Headcount" />
            </ListItem>
            <Divider />
            <ListItem button divider>
              <ListItemText primary="Plan" />
            </ListItem>
            <ListItem button>
              <ListItemText primary="Employees" />
            </ListItem>
            <Divider light />
            <ListItem button>
              <ListItemText primary="Positions" />
            </ListItem>
            <Divider light />
            <ListItem button>
              <ListItemText primary="Teams" />
            </ListItem>
            <Divider light />
            <ListItem button>
              <ListItemText primary="System Users" />
            </ListItem>
          </List>
        </Grid>
        <Grid item xs={8}></Grid>
      </Grid>
    </div>
  );
};

export { MainContent };
