import React from 'react';

import { useStyles } from '@components/Employees/style';

export const Employees = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div>Employees</div>
    </div>
  );
};
