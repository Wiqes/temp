import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  error: {
    '& > span': { color: 'red' },
    '& > div': { color: 'red' },
  },
  inputContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    '& > input': {
      fontSize: '20px',
      marginTop: '15px',
      marginBottom: '5px',
      paddingLeft: '10px',
      color: 'black',
      outline: 'none',
    },
  },
  iconContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '50px',
    height: '52px',
    fontSize: '20px',
    marginTop: '15px',
    marginBottom: '5px',
    color: 'black',
    background: '#E8F0FD',
    border: '2px solid black',
    borderLeft: 'none',
  },
}));

export { useStyles };
