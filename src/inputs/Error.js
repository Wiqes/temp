import React from "react";
import { useFormContext } from "react-hook-form";

export const Error = ({ fieldName }) => {
  const { errors } = useFormContext();
  if (errors[fieldName]) {
    console.log(errors[fieldName].type);
  }
  return (
    <div>
      {errors[fieldName] &&
        (errors[fieldName].type === "required" ||
          errors[fieldName].type === "validate") && (
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
    </div>
  );
};
