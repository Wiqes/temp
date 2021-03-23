import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    borderTop: "1px solid #DCDCDC",
    borderRadius: "5px",
    minHeight: "700px",
  },
  title: {
    flexGrow: 1,
    marginLeft: theme.spacing(16),
    fontWeight: "bold",
  },
  avatar: {
    marginRight: "15px",
  },
  userName: {
    fontWeight: "bold",
  },
  role: {
    fontSize: "12px",
  },
  list: {
    marginTop: "10px",
    background: "#E6E6FA",
  },
}));

export { useStyles };
