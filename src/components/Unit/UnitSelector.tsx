import { Chip, Typography } from '@material-ui/core';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import React from 'react';
import { Unit } from 'store/types';
import ListDialog from '../ListDialog';

const UnitSelector: React.FC<{
  unit: Unit;
  options: string[];
  onClose: (name: string) => void;
}> = ({ unit, options, onClose }) => {
  const name = unit.customName ? unit.customName : unit.name;

  const setSelectedUnit = (value: string) => {
    if (value !== unit.name) onClose(value);
  };

  return (
    <ListDialog
      action={setSelectedUnit}
      anchor={
        <>
          <Typography variant="h5">
            <Chip label={unit.points} color="primary" />
            &nbsp;&nbsp;
            {name}
            <ArrowDropDownIcon />
          </Typography>
          {unit.customName && (
            <Typography style={{ marginLeft: 45, marginBottom: -25 }}>
              {unit.name}
            </Typography>
          )}
        </>
      }
      options={options}
      title="Choose unit type"
    />
  );
};

export default UnitSelector;
