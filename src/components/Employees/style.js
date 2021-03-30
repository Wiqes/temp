import { makeStyles } from '@material-ui/core/styles';
import { contentStyles } from '@assets/styles';

export const useStyles = makeStyles(() => ({
  root: {
    ...contentStyles,
    position: 'relative',
    background: '#FFDAB9',
  },
}));
