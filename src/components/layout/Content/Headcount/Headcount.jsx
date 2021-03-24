import React from "react";
import { useStyles } from "@components/layout/Content/Headcount/style";

const Headcount = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div>Headcount</div>
    </div>
  );
};

export { Headcount };
