import React from "react";
import { useFormContext } from "react-hook-form";

export const Error = ({ fieldName }) => {
  const { errors } = useFormContext();

  return (
    <div>
      {errors[fieldName] &&
        (errors[fieldName].type === "required" ||
          errors[fieldName].type === "notEmpty") && (
          <span>Please enter the {`${fieldName}`}</span>
        )}
      {errors[fieldName] && errors[fieldName].type === "maxLength" && (
        <span>This field is too long</span>
      )}
      {errors[fieldName] &&
        errors[fieldName].type === "pattern" &&
        fieldName === "email" && <span>Please enter the valid email</span>}
      {errors[fieldName] &&
        errors[fieldName].type === "pattern" &&
        fieldName === "password" && (
          <>
            <span>
              The password should contain at least one special character,
            </span>
            <div>digits, uppercase and lowercase letters both</div>
          </>
        )}
      {errors[fieldName] &&
        errors[fieldName].type === "minLength" &&
        fieldName === "password" && (
          <>
            <span>
              Use 8 characters without spaces or more for your password
            </span>
          </>
        )}
    </div>
  );
};
