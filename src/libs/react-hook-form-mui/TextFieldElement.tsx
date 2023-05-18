import { TextField, TextFieldProps } from '@mui/material';
import { Controller, ControllerProps, FieldError } from 'react-hook-form';

export type TextFieldElementProps = Omit<TextFieldProps, 'name'> & {
  validation?: ControllerProps['rules'];
  name: string;
  parseError?: (error: FieldError) => string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  customError?: (value: any) => boolean;
};

export default function TextFieldElement({
  validation = {},
  parseError,
  type,
  required,
  name,
  customError,
  ...rest
}: TextFieldElementProps): JSX.Element {
  if (required) {
    validation.required = 'This field is required';
  }
  if (type === 'email') {
    validation.pattern = {
      value:
        // eslint-disable-next-line no-useless-escape
        /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
      message: 'Please enter a valid email address',
    };
  }

  return (
    <Controller
      name={name}
      rules={validation}
      render={({
        field: { value, onChange, onBlur },
        fieldState: { invalid, error },
      }) => (
        <TextField
          {...rest}
          name={name}
          value={value ?? ''}
          onChange={onChange}
          onBlur={onBlur}
          required={required}
          type={type}
          error={
            invalid || (typeof customError === 'function' ? customError(value) : false)
          }
          helperText={
            error
              ? typeof parseError === 'function'
                ? parseError(error)
                : error.message
              : rest.helperText
          }
        />
      )}
    />
  );
}
