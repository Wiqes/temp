import React from 'react';
import { observer } from 'mobx-react';
import { Box } from '@material-ui/core';

import { authState } from '@store/authState';
import { Button } from '@ui/Button/Button';

const LoginPage = observer(() => {
  return (
    <Box display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <h1>Bad Forecast</h1>
      <Button
        onClick={() => {
          authState.makeAuthTruthy();
        }}
        variant="contained"
        color="primary"
        width="200px"
      >
        LOGIN
      </Button>
    </Box>
  );
});
export { LoginPage };
