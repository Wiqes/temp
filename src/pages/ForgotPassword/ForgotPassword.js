import { observer } from 'mobx-react-lite';
import { Box } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import { FormProvider, useForm } from 'react-hook-form';
import { FormElement } from '@ui/inputs/FormElement';
import { Button } from '@ui/Button/Button';
import { useStyles } from '@pages/ForgotPassword/style';

export const ForgotPassword = observer(() => {
  const classes = useStyles();
  const methods = useForm();
  const { handleSubmit } = methods;

  const onSubmit = () => {};

  return (
    <Grid container spacing={3}>
      <Grid item xs={6}>
        <div className={classes.image} />
      </Grid>
      <Grid item xs={6}>
        <Box display="flex" flexDirection="column" justifyContent="center" alignItems="center" className={classes.form}>
          <div className={classes.title}>Bad Forecast</div>
          <h1>Forgot your password?</h1>
          <div className={classes.message}>
            <div>Don&apos;t worry! Just fill in your email and we&apos;ll send</div>
            <div>you a link to reset your password.</div>
          </div>
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
              </div>
              <Button variant="contained" color="primary" width="400px" height="50px" type="submit">
                RESET PASSWORD
              </Button>
            </form>
          </FormProvider>
        </Box>
      </Grid>
    </Grid>
  );
});
