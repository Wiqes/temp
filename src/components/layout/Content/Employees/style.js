import { makeStyles } from "@material-ui/core/styles";
import { contentStyles } from "@constants/styles";

const useStyles = makeStyles(() => ({
  root: { ...contentStyles, background: "#FFDAB9" },
}));

export { useStyles };
