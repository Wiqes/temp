import { Link } from 'react-router-dom';
import { computed } from 'mobx';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

import * as paths from '@routes/paths';
import * as routes from '@routes/routes';
import { authState } from '@store/authState';
import { Icon } from '@ui/Icon/Icon';

import { useStyles } from '@layout/style';

export const Sidebar = () => {
  const classes = useStyles();

  const sideRoutes = [paths.headcount, paths.plan, paths.employees, paths.positions, paths.teams, paths.systemUsers];

  const items = Object.values(routes)
    .filter(({ path, authenticated }) => sideRoutes.includes(path) && authenticated === true)
    .reduce((prev, curr) => {
      const hasPermission = computed(() => authState.hasPermission(curr.permission)).get();
      if (hasPermission) {
        prev.push(
          <ListItem key={curr.title} component={Link} to={curr.path} button divider>
            <div className={classes.listItem}>
              <Icon iconName={curr.icon} />
              <ListItemText className={classes.listItemText} primary={curr.title} />
            </div>
          </ListItem>,
        );
      }
      return prev;
    }, []);

  return (
    <>
      <div className={classes.title}>Bad Forecast</div>
      <List component="nav" className={classes.sidebar} aria-label="mailbox folders">
        {items}
      </List>
    </>
  );
};
