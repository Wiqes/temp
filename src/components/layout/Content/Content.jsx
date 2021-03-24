import React from "react";

import { useStyles } from "@components/layout/Content/style";
import { Route, Switch } from "react-router-dom";
import { Employees } from "@content/Employees/Employees";
import { Headcount } from "@content/Headcount/Headcount";

const Content = () => {
  const classes = useStyles();

  return (
    <div className={classes.content}>
      <Switch>
        <Route path="/employees" component={Employees} />
        <Route path="/headcount" component={Headcount} />
      </Switch>
    </div>
  );
};

export { Content };
