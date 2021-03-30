import { observer } from 'mobx-react-lite';
import { Box } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import { FormProvider, useForm } from 'react-hook-form';
import { useEffect, useState } from 'react';
import axios from '@services/axios';
import { Link } from 'react-router-dom';

import * as paths from '@routes/paths';
import { FormElement } from '@ui/inputs/FormElement';
import { Button } from '@ui/Button/Button';
import { useStyles } from '@pages/Login/style';
import { authState } from '@store/authState';
import { WithRequest } from '@hoc/WithRequest/WithRequest';
import { Icon } from '@ui/Icon/Icon';

export const Login = observer(() => {
  const classes = useStyles();
  const methods = useForm();
  const [invalidCredentials, setInvalidCredentials] = useState(false);
  const { handleSubmit, watch } = methods;

  const watchEmail = watch('email');
  const watchPassword = watch('password');

  useEffect(() => {
    setInvalidCredentials(false);
  }, [watchEmail, watchPassword]);

  const onSubmit = async ({ email, password }) => {
    const loginData = await axios.post('/auth/', { data: { email, password } });
    if (loginData?.auth_token) {
      authState.login(loginData.auth_token);
    } else {
      setInvalidCredentials(true);
    }
  };

  return (
    <WithRequest axios={axios}>
      <Grid container spacing={3}>
        <Grid item xs={6}>
          <div className={classes.image} />
        </Grid>
        <Grid item xs={6}>
          <Box
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            className={classes.loginForm}
          >
            <div className={classes.title}>Bad Forecast</div>
            {invalidCredentials && (
              <div className={classes.warningContainer}>
                <Icon iconName="ReportProblem" color="red" />{' '}
                <div className={classes.warning}>Login or password is incorrect. Please try again.</div>
              </div>
            )}
            <FormProvider {...methods}>
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className={classes.inputsContainer}>
                  <FormElement
                    name="email"
                    placeholder="Email"
                    type="input"
                    inputType="text"
                    defaultValue=""
                    width="385px"
                    height="50px"
                    validation={{
                      required: true,
                      maxLength: 60,
                      pattern: /^\S+@\S+\.\S+$/,
                    }}
                  />
                  <FormElement
                    name="password"
                    placeholder="Password"
                    type="input"
                    inputType="password"
                    defaultValue=""
                    width="335px"
                    height="50px"
                    validation={{
                      required: true,
                      minLength: 8,
                      maxLength: 60,
                      pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\+\=\>\<\]\{\};:\/\.\[|\\-_\)\(\^#@$!%*?&])[A-Za-z\d\+\=\>\<\[\]\{\};:\/\.|\\-_\)\(\^#@$!%*?&]{8,}$/, //eslint-disable-line
                    }}
                  />
                </div>
                <div className={classes.link}>
                  <Link to={paths.forgotPassword}>Forgot Password?</Link>
                </div>
                <Button variant="contained" color="primary" width="400px" height="50px" type="submit">
                  LOGIN
                </Button>
              </form>
            </FormProvider>
          </Box>
        </Grid>
      </Grid>
    </WithRequest>
  );
});
