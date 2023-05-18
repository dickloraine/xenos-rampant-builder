/* eslint-disable @typescript-eslint/no-explicit-any */
import CloseIcon from '@mui/icons-material/Cancel';
import {
  Chip,
  FormControl,
  FormHelperText,
  InputLabel,
  MenuItem,
  Select,
  SelectProps,
} from '@mui/material';
import { Controller, FieldError } from 'react-hook-form';

export type MultiSelectElementProps = Omit<SelectProps, 'value'> & {
  menuItems: any;
  label?: string;
  valueKey?: string;
  labelKey?: string;
  required?: boolean;
  validation?: any;
  name: string;
  parseError?: (error: FieldError) => string;
  minWidth?: number;
  menuMaxHeight?: number;
  menuMaxWidth?: number;
  helperText?: string;
  showChips?: boolean;
};

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;

export default function MultiSelectElement({
  menuItems,
  label = '',
  valueKey = '',
  labelKey = '',
  required = false,
  validation = {},
  parseError,
  name,
  menuMaxHeight = ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
  menuMaxWidth = 250,
  minWidth = 120,
  helperText,
  showChips,
  variant,
  ...rest
}: MultiSelectElementProps): JSX.Element {
  if (required) {
    validation.required = 'This field is required';
  }

  return (
    <Controller
      name={name}
      rules={validation}
      render={({
        field: { value, onChange, onBlur },
        fieldState: { invalid, error },
      }) => {
        helperText = error
          ? typeof parseError === 'function'
            ? parseError(error)
            : error.message
          : helperText;
        return (
          <FormControl
            variant={variant}
            sx={{ minWidth }}
            fullWidth={rest.fullWidth}
            error={invalid}
          >
            <InputLabel
              error={invalid}
              htmlFor={rest.id || `select-multi-select-${name}`}
              required={required}
            >
              {label}
            </InputLabel>
            <Select
              {...rest}
              id={rest.id || `select-multi-select-${name}`}
              label={label}
              multiple
              error={invalid}
              value={value || []}
              required={required}
              onChange={onChange}
              onBlur={onBlur}
              MenuProps={{
                PaperProps: {
                  style: {
                    maxHeight: menuMaxHeight,
                    width: menuMaxWidth,
                  },
                },
              }}
              renderValue={
                showChips
                  ? (selected) => (
                      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
                        {((selected as any[]) || []).map((selectedValue) => (
                          <Chip
                            key={selectedValue}
                            label={selectedValue}
                            sx={{ display: 'flex', flexWrap: 'wrap' }}
                            onDelete={() => {
                              onChange(value.filter((i: any) => i !== selectedValue));
                              // setValue(name, formValue.filter((i: any) => i !== value), { shouldValidate: true })
                            }}
                            deleteIcon={
                              <CloseIcon
                                onMouseDown={(ev) => {
                                  ev.stopPropagation();
                                }}
                              />
                            }
                          />
                        ))}
                      </div>
                    )
                  : undefined
              }
            >
              {menuItems.map((item: any) => (
                <MenuItem
                  key={`${name}_${valueKey ? item[valueKey] : item}`}
                  value={valueKey ? item[valueKey] : item}
                  sx={{
                    fontWeight: (value || []).includes(item) ? 'bold' : 'normal',
                  }}
                >
                  {labelKey ? item[labelKey] : item}
                </MenuItem>
              ))}
            </Select>
            {helperText && <FormHelperText>{helperText}</FormHelperText>}
          </FormControl>
        );
      }}
    />
  );
}
