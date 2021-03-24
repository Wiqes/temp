import React from "react";
import Grid from "@material-ui/core/Grid";

import { useStyles } from "@components/layout/style";
import { Sidebar } from "@components/layout/Sidebar/Sidebar";
import { Header } from "@components/layout/Header/Header";
import { Content } from "@components/layout/Content/Content";

const Layout = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Header />
      <Grid container spacing={3}>
        <Grid item xs={1} />
        <Grid item xs={3}>
          <Sidebar />
        </Grid>
        <Grid item xs={8}>
          <Content />
        </Grid>
      </Grid>
    </div>
  );
};

export { Layout };
