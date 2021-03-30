import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  backdrop: {
    position: 'absolute',
    zIndex: theme.zIndex.drawer + 1,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#fff',
    backgroundColor: 'rgba(0,0,0, 0.5)',
    width: '100%',
    height: '100%',
  },
}));
