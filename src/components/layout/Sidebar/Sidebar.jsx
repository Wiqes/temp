import React from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import { useHistory } from "react-router-dom";

import { Icon } from "@ui/Icon/Icon";
import ListItemText from "@material-ui/core/ListItemText";

import { useStyles } from "@components/layout/style";

const Sidebar = () => {
  const classes = useStyles();
  const history = useHistory();

  const moveToEmployees = () => {
    history.push("/pages/employees");
  };
  const moveToHeadcount = () => {
    history.push("/pages/headcount");
  };
  const moveToPlan = () => {
    history.push("/pages/plan");
  };
  const moveToPositions = () => {
    history.push("/pages/Positions");
  };
  const moveToSystemUsers = () => {
    history.push("/pages/system-users");
  };
  const moveToTeams = () => {
    history.push("/pages/teams");
  };

  return (
    <List component="nav" className={classes.list} aria-label="mailbox folders">
      <ListItem button divider onClick={moveToHeadcount}>
        <Icon iconName="Explore" />
        <ListItemText className={classes.listItemText} primary="Headcount" />
      </ListItem>
      <ListItem button divider onClick={moveToPlan}>
        <Icon iconName="Assignment" />
        <ListItemText className={classes.listItemText} primary="Plan" />
      </ListItem>
      <ListItem button divider onClick={moveToEmployees}>
        <Icon iconName="User" />
        <ListItemText className={classes.listItemText} primary="Employees" />
      </ListItem>
      <ListItem button divider onClick={moveToPositions}>
        <Icon iconName="BlackTie" />
        <ListItemText className={classes.listItemText} primary="Positions" />
      </ListItem>
      <ListItem button divider onClick={moveToTeams}>
        <Icon iconName="Group" />
        <ListItemText className={classes.listItemText} primary="Teams" />
      </ListItem>
      <ListItem button onClick={moveToSystemUsers}>
        <Icon iconName="UserCircle" />
        <ListItemText className={classes.listItemText} primary="System Users" />
      </ListItem>
    </List>
  );
};

export { Sidebar };
