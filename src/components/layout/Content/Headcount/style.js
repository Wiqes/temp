import { makeStyles } from "@material-ui/core/styles";
import { contentStyles } from "@constants/styles";

const useStyles = makeStyles(() => ({
  root: { ...contentStyles, background: "#40E0D0" },
}));

export { useStyles };
