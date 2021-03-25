import React from "react";
import { Input } from "./Input";
import { Error } from "./Error";

const FormElement = ({
  name,
  type,
  disabled = false,
  defaultValue,
  validation = null,
  rows,
  cols,
  placeholder,
  options,
  isMulti,
}) => {
  const fieldMap = {
    input: Input,
  };
  const Component = fieldMap[type];

  return (
    <>
      <Component
        name={name}
        rows={rows}
        cols={cols}
        disabled={disabled}
        defaultValue={defaultValue}
        validation={validation}
        placeholder={placeholder}
        options={options}
        isMulti={isMulti}
      />
      {validation && <Error fieldName={name} />}
    </>
  );
};

export { FormElement };
