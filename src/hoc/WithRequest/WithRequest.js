import useHttpErrorHandler from '@hooks/httpErrorHandler';
import { Loader } from '@ui/Loader/Loader';
import { Notification } from '@ui/Notification/Notification';
import { useStyles } from './style';

export const WithRequest = ({ axios, children }) => {
  const classes = useStyles();

  const [error, clearError] = useHttpErrorHandler(axios.instance);

  return (
    <div className={classes.wrapper}>
      <Notification config={error} clear={clearError} />
      <Loader shown={error} />
      {children}
    </div>
  );
};
