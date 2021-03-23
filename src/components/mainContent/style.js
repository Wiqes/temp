import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        borderTop: '1px solid #DCDCDC',
        borderRadius: '5px',
    },
    title: {
        flexGrow: 1,
        marginLeft: theme.spacing(16),
        fontWeight: 'bold',
    },
}));

export {useStyles}