import { makeStyles } from "@material-ui/core/styles";
import { contentStyles } from "@constants/styles";

const useStyles = makeStyles(() => ({
  content: { ...contentStyles, marginTop: "10px" },
}));

export { useStyles };
