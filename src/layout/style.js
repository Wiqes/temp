import { makeStyles } from '@material-ui/core/styles';
import { contentStyles } from '@assets/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    height: '100vh',
    padding: '0',
    overflow: 'hidden',
  },
  rightContainer: {
    height: '100vh',
  },
  typography: {
    flexGrow: 1,
    marginLeft: theme.spacing(16),
    fontWeight: 'bold',
  },
  title: {
    fontWeight: 'bold',
    fontSize: '24px',
    padding: '20px 0px 25px 45px',
    background: '#E6E6FA',
  },
  toolbar: {
    display: 'flex',
    justifyContent: 'flex-end',
  },
  avatar: {
    marginRight: '15px',
  },
  userName: {
    fontWeight: 'bold',
  },
  role: {
    fontSize: '12px',
  },
  sidebar: {
    background: '#E6E6FA',
    padding: '0',
    height: '100%',
  },
  listItemText: {
    marginLeft: '5px',
  },
  listItem: {
    display: 'flex',
    alignItems: 'center',
    marginLeft: '28px',
  },
  content: contentStyles,
}));

export { useStyles };
