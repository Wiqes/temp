import React, { useState } from "react";
import { useFormContext } from "react-hook-form";
import { Icon } from "@ui/Icon/Icon";

export const Input = ({
  name,
  disabled = false,
  defaultValue,
  validation,
  placeholder,
  width,
  height,
  inputType,
}) => {
  const { register } = useFormContext();
  const [passwordShown, setPasswordShown] = useState(false);
  const passwordType = inputType === "password";

  const togglePasswordVisibility = () => {
    setPasswordShown(passwordShown ? false : true);
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
      }}
    >
      <input
        name={name}
        disabled={disabled}
        type={passwordShown ? "text" : "password"}
        defaultValue={defaultValue}
        style={{
          width,
          height,
          fontSize: "20px",
          marginTop: "15px",
          marginBottom: "5px",
          paddingLeft: "10px",
          color: "black",
          background: "#E6E6FA",
          outline: "none",
          borderRight: passwordType ? "none" : "2px solid black",
        }}
        placeholder={placeholder}
        ref={validation ? register(validation) : register}
      />
      {passwordType && (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: height,
            height: "52px",
            fontSize: "20px",
            marginTop: "15px",
            marginBottom: "5px",
            color: "black",
            background: "#E6E6FA",
            border: "2px solid black",
            borderLeft: "none",
          }}
        >
          {passwordShown ? (
            <Icon
              iconName="HideIcon"
              fontSize="24px"
              onClick={togglePasswordVisibility}
            />
          ) : (
            <Icon
              iconName="ShowIcon"
              fontSize="24px"
              onClick={togglePasswordVisibility}
            />
          )}
        </div>
      )}
    </div>
  );
};
