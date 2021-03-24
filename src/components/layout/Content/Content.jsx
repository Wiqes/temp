import React from "react";
import { Route, Switch } from "react-router-dom";

import { Employees } from "@content/Employees/Employees";
import { Headcount } from "@content/Headcount/Headcount";
import { Plan } from "@content/Plan/Plan";
import { Positions } from "@content/Positions/Positions";

import { useStyles } from "@components/layout/Content/style";
import { SystemUsers } from "@content/SystemUsers/SystemUsers";
import { Teams } from "@content/Teams/Teams";

const Content = () => {
  const classes = useStyles();

  return (
    <div className={classes.content}>
      <Switch>
        <Route path="/pages/employees" component={Employees} />
        <Route path="/pages/headcount" component={Headcount} />
        <Route path="/pages/plan" component={Plan} />
        <Route path="/pages/positions" component={Positions} />
        <Route path="/pages/teams" component={Teams} />
        <Route path="/pages/system-users" component={SystemUsers} />
      </Switch>
    </div>
  );
};

export { Content };
