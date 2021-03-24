import React from "react";

import { useStyles } from "@content/Employees/style";

const Employees = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div>Employees</div>
    </div>
  );
};

export { Employees };
