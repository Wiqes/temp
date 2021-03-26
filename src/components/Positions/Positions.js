import React from 'react';

import { useStyles } from '@components/Positions/style';

export const Positions = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div>Positions</div>
    </div>
  );
};
