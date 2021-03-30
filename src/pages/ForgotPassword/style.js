import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  title: {
    marginBottom: '80px',
    fontSize: '65px',
    fontWeight: 'bold',
  },
  form: { height: '95vh' },
  image: {
    background: '#E6E6FA',
    height: '100vh',
  },
  message: {
    marginTop: '10px',
    marginBottom: '15px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    '& > div': { color: '#696969', fontWeight: 'bold' },
  },
  inputsContainer: {
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    marginBottom: '15px',
  },
  input: {
    marginBottom: '10px',
    width: '400px',
  },
}));

export { useStyles };
