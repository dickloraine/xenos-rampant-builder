import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import React from 'react';
import { useSelector } from 'react-redux';
import { RootState, Unit } from 'store/types';

const PsychicPowers: React.FC<{ unit: Unit; onChange: (unit: Unit) => void }> = ({
  unit,
  onChange,
}) => {
  const powersData = useSelector((state: RootState) => state.data.psychicPowers);
  if (
    !unit.xenosRules.includes('Psychic 1') &&
    !unit.xenosRules.includes('Psychic 2') &&
    !unit.xenosRules.includes('Psychic 3') &&
    !unit.xenosRules.includes('Psychic 4')
  )
    return <div></div>;

  const handleChange = (e: React.ChangeEvent<{ value: unknown }>) =>
    onChange({ ...unit, psiPowers: [...(e.target.value as string[])] });

  return (
    <FormControl>
      <InputLabel id="demo-mutiple-name-label">Psychic Powers</InputLabel>
      <Select
        labelId="demo-mutiple-name-label"
        id="demo-mutiple-name"
        multiple
        value={unit.psiPowers}
        onChange={handleChange}
        input={<Input />}
      >
        {Object.keys(powersData).map((name) => (
          <MenuItem key={name} value={name}>
            {name}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default PsychicPowers;
