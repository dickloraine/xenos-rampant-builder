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
import { useSelector } from 'react-redux';
import { selectAllRules } from 'store/dataSlice';
import { RootState, Unit } from 'store/types';
import useOpen from '../../hooks/useOpen';

const XenosRules: React.FC<{ unit: Unit; onChange: (unit: Unit) => void }> = ({
  unit,
  onChange,
}) => {
  const [open, handleOpen, handleClose] = useOpen();
  const xenosRulesData = useSelector((state: RootState) => state.data.xenosRulesData);
  const rulesData = useSelector((state: RootState) => selectAllRules(state));

  let xenosRules = Object.keys(xenosRulesData).filter(
    (rule) => !xenosRulesData[rule].exclude_units.includes(unit.name)
  );

  const handleChange = (e: React.ChangeEvent<{ value: unknown }>) =>
    onChange({ ...unit, xenosRules: [...(e.target.value as string[])] });

  return (
    <>
      <FormLabel onClick={handleOpen} component="legend">
        Xenos Rules <ArrowDropDownIcon />
      </FormLabel>
      {unit.xenosRules &&
        unit.xenosRules.length > 0 &&
        unit.xenosRules.map((name) => (
          <div key={name}>
            <FormControlLabel
              control={
                <Checkbox
                  checked={true}
                  onChange={() =>
                    onChange({
                      ...unit,
                      xenosRules: [...unit.xenosRules.filter((v) => v !== name)],
                    })
                  }
                />
              }
              label={
                <Tooltip title={rulesData[name].description}>
                  <Typography>
                    {name}{' '}
                    <Typography color="secondary" component="span">
                      @{xenosRulesData[name].points}
                    </Typography>
                  </Typography>
                </Tooltip>
              }
              key={name}
            />
          </div>
        ))}
      <FormControl style={{ marginTop: 10, width: 0, height: 0 }}>
        <Select
          open={open}
          onClose={handleClose}
          onOpen={handleOpen}
          IconComponent={() => <Box />}
          multiple
          value={unit.xenosRules}
          onChange={handleChange}
          input={<Input />}
          renderValue={() => ' '}
        >
          {xenosRules.map((name) => (
            <MenuItem key={name} value={name}>
              {unit.xenosRules.indexOf(name) < 0 && (
                <Tooltip title={rulesData[name].description}>
                  <Typography>
                    {name}{' '}
                    <Typography color="secondary" component="span">
                      @{xenosRulesData[name].points}
                    </Typography>
                  </Typography>
                </Tooltip>
              )}
              {unit.xenosRules.indexOf(name) > -1 && (
                <Tooltip title={rulesData[name].description}>
                  <Typography color="primary">
                    {name}{' '}
                    <Typography color="secondary" component="span">
                      @{xenosRulesData[name].points}
                    </Typography>
                  </Typography>
                </Tooltip>
              )}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </>
  );
};

export default XenosRules;
