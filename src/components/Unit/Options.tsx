import {
  Box,
  Checkbox,
  FormControl,
  FormControlLabel,
  FormLabel,
  Input,
  MenuItem,
  Select,
  Tooltip,
  Typography,
} from '@material-ui/core';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
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
  if (!optionsData || !Object.keys(optionsData).length) return <div></div>;

  const handleChange = (e: React.ChangeEvent<{ value: unknown }>) =>
    onChange({ ...unit, options: [...(e.target.value as string[])] });

  return (
    <>
      <FormLabel onClick={handleOpen} component="legend">
        Options <ArrowDropDownIcon />
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
      <FormControl style={{ margin: 0, width: 0, height: 0 }}>
        <Select
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
          {Object.keys(optionsData).map((name) => (
            <MenuItem
              key={name}
              value={name}
              disabled={
                optionsData[name].disabledBy?.some((x) => unit.options.includes(x)) ||
                (optionsData[name].enabledBy &&
                  !optionsData[name].enabledBy?.some((x) => unit.options.includes(x)))
              }
            >
              <Tooltip title={optionsData[name].description}>
                <Typography
                  color={unit.options.indexOf(name) > -1 ? 'primary' : 'inherit'}
                >
                  {name}{' '}
                  <Typography color="secondary" component="span">
                    @{optionsData[name].points}
                  </Typography>
                </Typography>
              </Tooltip>
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </>
  );
};

export default Options;
