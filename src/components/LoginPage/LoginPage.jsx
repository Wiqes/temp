import React from "react";
import { observer } from "mobx-react";
import { Box } from "@material-ui/core";
import { FormProvider, useForm } from "react-hook-form";

import { Button } from "@ui/Button/Button";
import { FormElement } from "@inputs/FormElement";

const LoginPage = observer(() => {
  const methods = useForm();
  const { handleSubmit } = methods;

  const onSubmit = (data) => console.log(data);

  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
    >
      <h1>Bad Forecast</h1>

      <FormProvider {...methods}>
        <form onSubmit={handleSubmit(onSubmit)}>
          {/* register your input into the hook by invoking the "register" function */}
          <FormElement
            name="email"
            placeholder="Email"
            type="input"
            defaultValue=""
            validation={{
              required: true,
              maxLength: 27,
              validate: (value) => value.trim() !== "",
            }}
          />
          <FormElement
            name="password"
            placeholder="Password"
            type="input"
            defaultValue=""
            validation={{
              required: true,
              maxLength: 27,
              validate: (value) => value.trim() !== "",
            }}
          />

          <Button
            type="submit"
            variant="contained"
            color="primary"
            width="200px"
          >
            LOGIN
          </Button>
        </form>
      </FormProvider>
    </Box>
  );
});
export { LoginPage };
