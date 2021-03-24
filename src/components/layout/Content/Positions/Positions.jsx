import React from "react";

import { useStyles } from "@content/Positions/style";

const Positions = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div>Positions</div>
    </div>
  );
};

export { Positions };
