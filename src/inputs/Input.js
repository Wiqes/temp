import React from "react";
import { useFormContext } from "react-hook-form";

const Input = ({
  name,
  disabled = false,
  defaultValue,
  validation,
  placeholder,
}) => {
  const { register } = useFormContext();

  return (
    <input
      name={name}
      disabled={disabled}
      defaultValue={defaultValue}
      placeholder={placeholder}
      ref={validation ? register(validation) : register}
    />
  );
};

export { Input };
