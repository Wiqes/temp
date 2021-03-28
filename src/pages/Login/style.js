import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
  title: {
    marginBottom: "180px",
    fontSize: "65px",
    fontWeight: "bold",
  },
  loginForm: {
    height: "95vh",
  },
  image: {
    background: "#E6E6FA",
    height: "100vh",
  },
  link: {
    marginBottom: "90px",
    marginLeft: "15px",
    fontWeight: "bold",
    fontSize: "23px",
  },
  input: {
    marginBottom: "10px",
    width: "400px",
  },
  loginButton: {
    marginTop: "50px",
  },
}));

export { useStyles };
