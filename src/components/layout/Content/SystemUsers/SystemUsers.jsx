import React from "react";

import { useStyles } from "@content/SystemUsers/style";

const SystemUsers = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div>SystemUsers</div>
    </div>
  );
};

export { SystemUsers };
