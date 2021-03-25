import React, { useState } from "react";
import { observer } from "mobx-react";
import { Box } from "@material-ui/core";
import { FormProvider, useForm } from "react-hook-form";

import { Button } from "@ui/Button/Button";
import { FormElement } from "@inputs/FormElement";
import { Icon } from "@ui/Icon/Icon";

const LoginPage = observer(() => {
  const methods = useForm();
  const { handleSubmit } = methods;

  const [passwordShown, setPasswordShown] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordShown(passwordShown ? false : true);
  };

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
          <div
            style={{
              position: "relative",
              display: "flex",
              marginBottom: "14px",
            }}
          >
            <FormElement
              name="password"
              placeholder="Password"
              type="input"
              elementType={passwordShown ? "text" : "password"}
              defaultValue=""
              validation={{
                required: true,
                maxLength: 27,
                validate: (value) => value.trim() !== "",
              }}
            />
            <div
              style={{ position: "absolute", top: "8%", right: "16%" }}
              onClick={togglePasswordVisibility}
            >
              {passwordShown ? (
                <Icon iconName="HideIcon" />
              ) : (
                <Icon iconName="ShowIcon" />
              )}
            </div>
          </div>

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
