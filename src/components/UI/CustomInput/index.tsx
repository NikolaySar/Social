import { useState } from 'react';
import { IconButton, InputAdornment } from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { ICustomInputProps } from './interface';
import check from '@images/Right.svg';
import { StyledTextField } from './style';
import { FieldError } from 'react-hook-form';

interface NestedErrorObject {
  [key: string]: FieldError | NestedErrorObject;
}

// TODO: fix this function
const getNestedError = (
  error: Partial<NestedErrorObject> | undefined,
  name: string
): FieldError | undefined => {
  if (!error) return;

  const keys = name.split('.');
  let current: NestedErrorObject | undefined = error;

  for (const key of keys) {
    if (current && typeof current === 'object' && key in current) {
      current = current[key] as NestedErrorObject;
    } else {
      return;
    }
  }

  return current as FieldError | undefined;
};

const CustomInput = ({
  name,
  error,
  type,
  label,
  required,
  register,
  isValid,
  InputProps,
  onChange,
  value,
}: ICustomInputProps) => {
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const isPasswordField = type === 'password';

  const fieldError = getNestedError(error, name as string);

  const { onChange: onChangeRegister, ...rest } = register(name);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChange?.(event);
    onChangeRegister(event);
  };

  return (
    <StyledTextField
      {...rest}
      type={isPasswordField && showPassword ? 'text' : type}
      label={label}
      value={value}
      variant="outlined"
      fullWidth
      onChange={handleChange}
      required={required}
      error={!!fieldError}
      helperText={fieldError?.message}
      multiline={InputProps?.multiline}
      rows={InputProps?.rows}
      inputProps={{
        maxLength: InputProps?.maxLength,
      }}
      InputProps={
        isPasswordField
          ? {
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton onClick={handleClickShowPassword} edge="end">
                    {showPassword ? <Visibility /> : <VisibilityOff />}
                  </IconButton>
                </InputAdornment>
              ),
            }
          : { endAdornment: isValid && <img src={check} />, ...InputProps }
      }
    />
  );
};

export default CustomInput;
