import React from 'react';

import { useStyles } from '@components/mainContent/style';
import { NavigationBar } from '@components/mainContent/NavigationBar/NavigationBar';
import { Header } from '@components/mainContent/Header/Header';

const MainContent = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Header />
      <NavigationBar />
    </div>
  );
};

export { MainContent };
