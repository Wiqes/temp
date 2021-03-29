import { Input } from './Input';
import { Error } from './Error';

export const FormElement = ({
  name,
  type,
  disabled = false,
  defaultValue,
  validation = null,
  rows,
  width,
  height,
  inputType,
  cols,
  placeholder,
  options,
  isMulti,
}) => {
  const fieldMap = { input: Input };
  const Component = fieldMap[type];

  return (
    <div>
      <Component
        name={name}
        rows={rows}
        cols={cols}
        inputType={inputType}
        disabled={disabled}
        defaultValue={defaultValue}
        validation={validation}
        placeholder={placeholder}
        width={width}
        height={height}
        options={options}
        isMulti={isMulti}
      />
      {validation && <Error fieldName={name} />}
    </div>
  );
};
