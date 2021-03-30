import { CircularProgress } from '@material-ui/core';
import { useStyles } from './style';

export const Loader = ({ shown }) => {
  const classes = useStyles();

  if (!shown) {
    return null;
  }

  return (
    <div className={classes.backdrop}>
      <CircularProgress color="inherit" />
    </div>
  );
};
