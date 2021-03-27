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
      {errors[fieldName] && errors[fieldName].type === "pattern" && (
        <span>Please enter the valid {`${fieldName}`}</span>
      )}
    </div>
  );
};
