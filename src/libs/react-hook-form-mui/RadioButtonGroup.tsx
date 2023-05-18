/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  FormControl,
  FormControlLabel,
  FormHelperText,
  FormLabel,
  Radio,
  RadioGroup,
  RadioProps,
} from '@mui/material';
import { red } from '@mui/material/colors';
import { ChangeEvent } from 'react';
import { FieldError, useController } from 'react-hook-form';

export type RadioButtonGroupProps = {
  options: any[];
  helperText?: string;
  name: string;
  required?: boolean;
  parseError?: (error: FieldError) => string;
  label?: string;
  labelKey?: string;
  valueKey?: string;
  type?: 'number' | 'string';
  emptyOptionLabel?: 'string';
  onChange?: (value: any) => void;
  returnObject?: boolean;
  row?: boolean;
};

export default function RadioButtonGroup({
  helperText,
  options,
  label,
  name,
  parseError,
  labelKey = 'label',
  valueKey = 'id',
  required,
  emptyOptionLabel,
  returnObject,
  row,
  ...rest
}: RadioButtonGroupProps): JSX.Element {
  const {
    field: { value, onChange },
    fieldState: { invalid, error },
  } = useController({
    name,
    rules: required ? { required: 'This field is required' } : undefined,
  });

  helperText = error
    ? typeof parseError === 'function'
      ? parseError(error)
      : error.message
    : helperText;

  const radioProps: RadioProps = {};
  if (invalid) {
    radioProps.sx = { color: red[400] };
  }

  const onRadioChange = (event: ChangeEvent<HTMLInputElement>) => {
    const radioValue = (event.target as HTMLInputElement).value;
    const returnValue = returnObject
      ? options.find((items) => items[valueKey] === radioValue)
      : radioValue;
    // setValue(name, returnValue, { shouldValidate: true })
    onChange(returnValue);
    if (typeof rest.onChange === 'function') {
      rest.onChange(returnValue);
    }
  };

  return (
    <FormControl error={invalid}>
      {label && (
        <FormLabel required={required} error={invalid}>
          {label}
        </FormLabel>
      )}
      <RadioGroup onChange={onRadioChange} name={name} row={row} value={value || ''}>
        {emptyOptionLabel && (
          <FormControlLabel
            control={<Radio {...radioProps} checked={!value} />}
            label={emptyOptionLabel}
            value=""
          />
        )}
        {options.map((option: any) => {
          const optionKey = option[valueKey];
          if (!optionKey) {
            console.error(
              `CheckboxButtonGroup: valueKey ${valueKey} does not exist on option`,
              option
            );
          }
          const isChecked = !!(
            value &&
            (returnObject ? value[valueKey] === optionKey : value === optionKey)
          );
          return (
            <FormControlLabel
              control={<Radio {...radioProps} checked={isChecked} />}
              value={optionKey}
              label={option[labelKey]}
              key={optionKey}
            />
          );
        })}
      </RadioGroup>
      {helperText && <FormHelperText>{helperText}</FormHelperText>}
    </FormControl>
  );
}
