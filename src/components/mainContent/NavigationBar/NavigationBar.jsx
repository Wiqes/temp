import React from 'react';
import Grid from '@material-ui/core/Grid';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import { Icon } from '@ui/Icon/Icon';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import { useStyles } from '@components/mainContent/style';

const NavigationBar = () => {
  const classes = useStyles();

  return (
    <Grid container spacing={3}>
      <Grid item xs={1} />
      <Grid item xs={3}>
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
      </Grid>
      <Grid item xs={8} />
    </Grid>
  );
};

export { NavigationBar };
