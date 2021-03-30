import { IconButton, Snackbar, Slide } from '@material-ui/core';
import Alert from '@material-ui/lab/Alert';
import CloseIcon from '@material-ui/icons/Close';

function SlideTransition(props) {
  return <Slide {...props} direction="left" />;
}

export const Notification = ({ config, clear }) => {
  if (!config) {
    return null;
  }

  const closeBtn = (
    <IconButton aria-label="close" color="inherit" size="small" onClick={clear}>
      <CloseIcon fontSize="inherit" />
    </IconButton>
  );
  return (
    <Snackbar
      open
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      autoHideDuration={config.duration || 1500}
      onClose={clear}
      TransitionComponent={SlideTransition}
      key={SlideTransition.name}
    >
      <Alert variant={config.variant || 'outlined'} action={closeBtn} severity={config.severity}>
        {config.message}
      </Alert>
    </Snackbar>
  );
};
