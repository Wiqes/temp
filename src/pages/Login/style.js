import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  title: {
    marginBottom: '180px',
    fontSize: '65px',
    fontWeight: 'bold',
  },
  loginForm: { height: '95vh' },
  image: {
    background: '#E6E6FA',
    height: '100vh',
  },
  link: {
    marginBottom: '90px',
    marginLeft: '15px',
    marginTop: '15px',
    fontWeight: 'bold',
    fontSize: '23px',
  },
  inputsContainer: {
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
  },
  input: {
    marginBottom: '10px',
    width: '400px',
  },
  warningContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    background: '#FFE4E1',
    marginBottom: '10px',
    padding: '15px',
  },
  warning: { marginLeft: '5px' },
  loginButton: { marginTop: '50px' },
}));

export { useStyles };
