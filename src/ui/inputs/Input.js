import { useState } from 'react';
import { useFormContext } from 'react-hook-form';
import { Icon } from '@ui/Icon/Icon';

import { useStyles } from '@ui/inputs/style';

export const Input = ({ name, disabled = false, defaultValue, validation, placeholder, width, height, inputType }) => {
  const classes = useStyles();
  const { register } = useFormContext();
  const [passwordShown, setPasswordShown] = useState(false);
  const passwordType = inputType === 'password';

  const getInputType = (passwordIsVisible) => {
    if (!passwordType) {
      return 'text';
    }
    return passwordIsVisible ? 'text' : 'password';
  };

  const togglePasswordVisibility = () => {
    setPasswordShown(!passwordShown);
  };

  return (
    <div className={classes.inputContainer}>
      <input
        name={name}
        disabled={disabled}
        type={getInputType(passwordShown)}
        defaultValue={defaultValue}
        style={{
          width,
          height,
          borderRight: passwordType ? 'none' : '2px solid black',
        }}
        placeholder={placeholder}
        ref={validation ? register(validation) : register}
      />
      {passwordType && (
        <div className={classes.iconContainer}>
          {passwordShown ? (
            <Icon iconName="HideIcon" fontSize="24px" onClick={togglePasswordVisibility} />
          ) : (
            <Icon iconName="ShowIcon" fontSize="24px" onClick={togglePasswordVisibility} />
          )}
        </div>
      )}
    </div>
  );
};
