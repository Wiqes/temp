import React from 'react';
import {AppBar, Avatar, Box, Toolbar, Typography} from '@material-ui/core';
import ListItemText from "@material-ui/core/ListItemText";
import ListItem from "@material-ui/core/ListItem";
import Divider from "@material-ui/core/Divider";
import List from "@material-ui/core/List";

import {useStyles} from "@components/mainContent/style";

const MainContent = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static" color="default">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            Bad Forecast
          </Typography>
          <Avatar alt="Cindy Baker" src="http://healthysoulmag.com/wp-content/uploads/2019/04/hellomagazine.com_.jpg" />
          <Box display="flex" flexDirection="column" justifyContent="center" alignItems="center">
            <div>dddddd</div>
            <div>dddd</div></Box>
        </Toolbar>
      </AppBar>
      <List component="nav" className={classes.root} aria-label="mailbox folders">
        <ListItem button>
          <ListItemText primary="Inbox" />
        </ListItem>
        <Divider />
        <ListItem button divider>
          <ListItemText primary="Drafts" />
        </ListItem>
        <ListItem button>
          <ListItemText primary="Trash" />
        </ListItem>
        <Divider light />
        <ListItem button>
          <ListItemText primary="Spam" />
        </ListItem>
      </List>
    </div>
  );
};

export { MainContent };
