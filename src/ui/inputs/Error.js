import { useFormContext } from 'react-hook-form';
import { useStyles } from '@ui/inputs/style';

export const Error = ({ fieldName }) => {
  const classes = useStyles();
  const { errors } = useFormContext();

  if (!errors[fieldName]) {
    return null;
  }

  const { type } = errors[fieldName];

  return (
    <div className={classes.error}>
      {(type === 'required' || type === 'notEmpty') && <span>Please enter the {`${fieldName}`}</span>}
      {type === 'maxLength' && <span>This field is too long</span>}
      {type === 'pattern' && fieldName === 'email' && <span>Please enter the valid email</span>}
      {type === 'pattern' && fieldName === 'password' && (
        <>
          <span>The password should contain at least one special character,</span>
          <div>digits, uppercase and lowercase letters both</div>
        </>
      )}
      {type === 'minLength' && fieldName === 'password' && (
        <>
          <span>Use 8 characters without spaces or more for your password</span>
        </>
      )}
    </div>
  );
};
