import React from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import { Icon } from "@ui/Icon/Icon";
import ListItemText from "@material-ui/core/ListItemText";
import Divider from "@material-ui/core/Divider";

import { useStyles } from "@components/layout/style";

const Sidebar = () => {
  const classes = useStyles();

  return (
    <List component="nav" className={classes.list} aria-label="mailbox folders">
      <ListItem button>
        <Icon iconName="Explore" />
        <ListItemText className={classes.listItemText} primary="Headcount" />
      </ListItem>
      <Divider />
      <ListItem button divider>
        <Icon iconName="Assignment" />
        <ListItemText className={classes.listItemText} primary="Plan" />
      </ListItem>
      <ListItem button>
        <Icon iconName="User" />
        <ListItemText className={classes.listItemText} primary="Employees" />
      </ListItem>
      <Divider light />
      <ListItem button>
        <Icon iconName="BlackTie" />
        <ListItemText className={classes.listItemText} primary="Positions" />
      </ListItem>
      <Divider light />
      <ListItem button>
        <Icon iconName="Group" />
        <ListItemText className={classes.listItemText} primary="Teams" />
      </ListItem>
      <Divider light />
      <ListItem button>
        <Icon iconName="UserCircle" />
        <ListItemText className={classes.listItemText} primary="System Users" />
      </ListItem>
    </List>
  );
};

export { Sidebar };
