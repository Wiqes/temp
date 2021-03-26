import React from 'react';
import { useFormContext } from 'react-hook-form';

export const Input = ({ name, disabled = false, defaultValue, validation, placeholder, width, height, inputType }) => {
  const { register } = useFormContext();

  return (
    <div>
      <input
        name={name}
        disabled={disabled}
        type={inputType}
        defaultValue={defaultValue}
        style={{
          width,
          height,
          fontSize: '20px',
          marginTop: '15px',
          marginBottom: '5px',
          paddingLeft: '10px',
          color: 'black',
          background: '#E6E6FA',
        }}
        placeholder={placeholder}
        ref={validation ? register(validation) : register}
      />
    </div>
  );
};
