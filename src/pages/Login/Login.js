import React from "react";
import { observer } from "mobx-react-lite";
import { Box } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import { FormProvider, useForm } from "react-hook-form";

import { FormElement } from "@inputs/FormElement";
import { Button } from "@ui/Button/Button";
import { useStyles } from "@pages/Login/style";
import { authState } from "@store/authState";

export const Login = observer(() => {
  const classes = useStyles();
  const methods = useForm();
  const { handleSubmit } = methods;

  const onSubmit = (data) => {
    authState.makeAuthTruthy();
  };

  return (
    <Grid container spacing={3} className={classes.loginPage}>
      <Grid item xs={6}>
        <div className={classes.image}></div>
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
                  position: "relative",
                  display: "flex",
                  flexDirection: "column",
                  marginBottom: "90px",
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
                    validate: (value) => value.trim() !== "",
                  }}
                />
                <FormElement
                  name="password"
                  placeholder="Password"
                  type="input"
                  inputType="password"
                  defaultValue=""
                  width="385px"
                  height="50px"
                  validation={{
                    required: true,
                    maxLength: 60,
                    pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\+\=\>\<\]\{\};:\/\.\[|\\-_\)\(\^#@$!%*?&])[A-Za-z\d\+\=\>\<\[\]\{\};:\/\.|\\-_\)\(\^#@$!%*?&]{8,}$/, //eslint-disable-line
                    validate: (value) => value.trim() !== "",
                  }}
                />
              </div>
              <Button
                variant="contained"
                color="primary"
                width="400px"
                height="50px"
                type="submit"
              >
                LOGIN
              </Button>
            </form>
          </FormProvider>
        </Box>
      </Grid>
    </Grid>
  );
});
