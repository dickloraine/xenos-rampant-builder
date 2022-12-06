import {
  Box,
  Container,
  FormControl,
  FormLabel,
  Input,
  MenuItem,
  Select,
  Tooltip,
  Typography,
} from '@material-ui/core';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import { useAppSelector } from 'hooks/reduxHooks';
import React from 'react';
import { Unit } from 'store/types';
import useOpen from '../../hooks/useOpen';

const PsychicPowers: React.FC<{ unit: Unit; onChange: (unit: Unit) => void }> = ({
  unit,
  onChange,
}) => {
  const [open, handleOpen, handleClose] = useOpen();
  const powersData = useAppSelector((state) => state.data.psychicPowers);
  const viewMode = useAppSelector((state) => state.ui.viewMode);
  if (
    !unit.xenosRules.some((rule) =>
      ['Psychic 1', 'Psychic 2', 'Psychic 3', 'Psychic 4'].includes(rule)
    )
  )
    return <div></div>;

  const handleChange = (e: React.ChangeEvent<{ value: unknown }>) =>
    onChange({ ...unit, psiPowers: [...(e.target.value as string[])] });

  return (
    <>
      {!viewMode && (
        <FormLabel onClick={handleOpen} component="legend" style={{ marginBottom: 10 }}>
          Psychic Powers <ArrowDropDownIcon />
        </FormLabel>
      )}
      <Container>
        {viewMode && (
          <Typography variant="h6" style={{ marginBottom: 10 }}>
            Psychic Powers
          </Typography>
        )}
        {unit.psiPowers &&
          unit.psiPowers.map((r, i, arr) => (
            <Tooltip key={r} title={powersData[r]?.effect || ''}>
              <Typography variant="inherit" key={r}>
                {r}
                {i === arr.length - 1 ? '' : ', '}
              </Typography>
            </Tooltip>
          ))}
      </Container>
      <FormControl style={{ marginTop: 10, width: 0, height: 0 }}>
        <Select
          open={open}
          onClose={handleClose}
          onOpen={handleOpen}
          IconComponent={() => <Box />}
          multiple
          value={unit.psiPowers}
          onChange={handleChange}
          input={<Input />}
          renderValue={() => ' '}
        >
          {Object.keys(powersData).map((name) => (
            <MenuItem key={name} value={name}>
              <Tooltip title={powersData[name].effect}>
                <Typography
                  color={
                    unit.psiPowers && unit.psiPowers.indexOf(name) > -1
                      ? 'primary'
                      : 'inherit'
                  }
                >
                  {name}{' '}
                </Typography>
              </Tooltip>
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </>
  );
};

export default PsychicPowers;
