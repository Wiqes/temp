import { makeStyles } from "@material-ui/core/styles";
import { contentStyles } from "@constants/styles";

const useStyles = makeStyles(() => ({
  root: { ...contentStyles, background: "#FF69B4" },
}));

export { useStyles };
