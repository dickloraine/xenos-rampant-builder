import { Chip, Typography } from '@material-ui/core';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import React from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks/reduxHooks';
import { selectUnitNames } from '../../store/dataSlice';
import { setUnit } from '../../store/rosterSlice';
import { Unit } from '../../store/types';
import ListDialog from '../ListDialog';

const UnitSelector: React.FC<{
  unit: Unit;
  id: number;
}> = ({ unit, id }) => {
  const unitNames = useAppSelector((state) => selectUnitNames(state));
  const dispatch = useAppDispatch();
  const name = unit.customName ? unit.customName : unit.name;

  const setSelectedUnit = (value: string) => {
    if (value !== unit.name) {
      dispatch(setUnit(id, value));
    }
  };

  return (
    <ListDialog
      action={setSelectedUnit}
      anchor={
        <>
          <Typography variant="h3">
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
      options={unitNames}
      title="Choose unit type"
    />
  );
};

export default UnitSelector;
