import React from 'react';

import { useStyles } from '@components/Teams/style';

export const Teams = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div>Teams</div>
    </div>
  );
};
