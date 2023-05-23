import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import {
  Box,
  Checkbox,
  FormControl,
  FormControlLabel,
  FormLabel,
  Input,
  ListItemText,
  MenuItem,
  Select,
  SelectChangeEvent,
  Tooltip,
  Typography,
} from '@mui/material';
import React from 'react';
import { useAppSelector } from '../../hooks/reduxHooks';
import useOpen from '../../hooks/useOpen';
import { Unit } from '../../store/types';

const Options: React.FC<{ unit: Unit; onChange: (unit: Unit) => void }> = ({
  unit,
  onChange,
}) => {
  const [open, handleOpen, handleClose] = useOpen();
  const optionsData = useAppSelector((state) => state.data.unitData[unit.name].options);
  const inlineRules = useAppSelector((state) => state.ui.inlineRules);

  if (!optionsData || !Object.keys(optionsData).length) return <div></div>;

  const handleChange = (e: SelectChangeEvent<string[]>) =>
    onChange({ ...unit, options: [...e.target.value] });

  return (
    <>
      <FormLabel onClick={handleOpen} component="legend">
        Options
        <ArrowDropDownIcon sx={{ pt: '5px' }} />
      </FormLabel>
      {unit.options.map((name) => (
        <div key={name}>
          <FormControlLabel
            control={
              <Checkbox
                checked={true}
                onChange={() =>
                  onChange({
                    ...unit,
                    options: [...unit.options.filter((v) => v !== name)],
                  })
                }
              />
            }
            label={
              <Tooltip title={optionsData[name].description}>
                <Typography>
                  {name}{' '}
                  <Typography color="secondary" component="span">
                    @{optionsData[name].points}
                  </Typography>
                </Typography>
              </Tooltip>
            }
            key={name}
          />
        </div>
      ))}
      <FormControl variant="standard" sx={{ m: 0, width: 0, height: 0 }}>
        <Select
          variant="standard"
          open={open}
          onClose={handleClose}
          onOpen={handleOpen}
          IconComponent={() => <Box />}
          multiple
          value={unit.options}
          onChange={handleChange}
          input={<Input />}
          renderValue={() => ' '}
        >
          {Object.entries(optionsData).map(([name, option]) => (
            <MenuItem
              key={name}
              value={name}
              dense
              sx={{ maxWidth: 400 }}
              disabled={
                option.disabledBy?.some((x) => unit.options.includes(x)) ||
                (option.enabledBy &&
                  !option.enabledBy?.some((x) => unit.options.includes(x)))
              }
            >
              <Tooltip title={option.description}>
                <ListItemText
                  primary={
                    <Typography
                      variant="body2"
                      color={unit.options.indexOf(name) > -1 ? 'primary' : 'inherit'}
                    >
                      {name}{' '}
                      <Typography color="secondary" variant="body2" component="span">
                        @{option.points}
                      </Typography>
                    </Typography>
                  }
                  secondary={(inlineRules && option?.short) || ''}
                  secondaryTypographyProps={{ sx: { whiteSpace: 'normal' } }}
                  sx={{ m: 0 }}
                />
              </Tooltip>
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </>
  );
};

export default Options;
