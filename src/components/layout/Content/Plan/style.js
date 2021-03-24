import { makeStyles } from "@material-ui/core/styles";
import { contentStyles } from "@constants/styles";

const useStyles = makeStyles(() => ({
  root: { ...contentStyles, background: "#FA8072" },
}));

export { useStyles };
