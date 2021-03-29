import Grid from '@material-ui/core/Grid';

import { useStyles } from './style';
import { Sidebar } from './Sidebar/Sidebar';
import { Header } from './Header/Header';

export const Layout = ({ children }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container>
        <Grid item xs={2}>
          <Sidebar />
        </Grid>
        <Grid item xs={10} className={classes.rightContainer}>
          <Header />
          <div className={classes.content}>{children}</div>
        </Grid>
      </Grid>
    </div>
  );
};
