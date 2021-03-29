import { observer } from 'mobx-react-lite';
import { Box } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import { FormProvider, useForm } from 'react-hook-form';

import * as paths from '@routes/paths';
import { FormElement } from '@ui/inputs/FormElement';
import { Button } from '@ui/Button/Button';
import { useStyles } from '@pages/Login/style';
import { authState } from '@store/authState';
import { Link } from 'react-router-dom';
import axios from 'axios';

export const Login = observer(() => {
  const classes = useStyles();
  const methods = useForm();
  const { handleSubmit } = methods;

  const onSubmit = ({ email, password }) => {
    axios
      .post('http://localhost:8000/api/v1/auth/', {
        email,
        password,
      })
      .then((response) => {
        const { data } = response;
        if (data.auth_token) {
          authState.setAuthToken(data.auth_token);
          authState.makeAuthTruthy();
        }
      })
      .catch(() => {
        authState.makeAuthFalsy();
      });
  };

  return (
    <Grid container spacing={3} className={classes.loginPage}>
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
          <FormProvider {...methods}>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div
                style={{
                  position: 'relative',
                  display: 'flex',
                  flexDirection: 'column',
                }}
              >
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
  );
});
