import { Chip, Typography } from '@material-ui/core';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectUnitNames } from 'store/dataSlice';
import { setUnit } from 'store/rosterSlice';
import { AppDispatch, RootState, Unit } from 'store/types';
import ListDialog from '../ListDialog';

const UnitSelector: React.FC<{
  unit: Unit;
  id: number;
}> = ({ unit, id }) => {
  const unitNames = useSelector((state: RootState) => selectUnitNames(state));
  const dispatch: AppDispatch = useDispatch();
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
      options={unitNames}
      title="Choose unit type"
    />
  );
};

export default UnitSelector;
