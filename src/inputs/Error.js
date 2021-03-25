import React from "react";
import { useFormContext } from "react-hook-form";

const Error = ({ fieldName }) => {
  const { errors } = useFormContext();
  return (
    <div>
      {errors[fieldName] &&
        (errors[fieldName].type === "required" ||
          errors[fieldName].type === "validate") && (
          <span>This field is required</span>
        )}
      {errors[fieldName] && errors[fieldName].type === "maxLength" && (
        <span>This field is too long</span>
      )}
      {errors[fieldName] && errors[fieldName].type === "busyConnection" && (
        <span>Two sockets of the same node must have different connection</span>
      )}
    </div>
  );
};

export { Error };
