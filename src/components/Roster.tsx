import { Box, Fab, Typography } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addUnit } from 'store/rosterSlice';
import {
  AppDispatch,
  CompactRosterState,
  CompactUnit,
  RootState,
  RosterState,
} from 'store/types';
import buildUnit from './Unit/buildUnit';
import Unit from './Unit/Unit';

const packRoster = (roster: RosterState): CompactRosterState => {
  const units: CompactUnit[] = roster.units.map((unit) => {
    const compactUnit: CompactUnit = {
      name: unit.name,
      options: unit.options,
      xenosRules: unit.xenosRules,
    };
    if (unit.customName) {
      compactUnit.customName = unit.customName;
    }
    if (unit.psiPowers && unit.psiPowers.length > 0) {
      compactUnit.psiPowers = unit.psiPowers;
    }
    return compactUnit;
  });

  return { ...roster, units: units };
};
// const packRoster = (roster: RosterState): CompactRosterState => {
//   const units: CompactUnit[] = roster.units.map((unit) => ({
//     name: unit.name,
//     customName: unit.customName || '',
//     options: unit.options,
//     xenosRules: unit.xenosRules,
//   }));
//   return { ...roster, units: units };
// };

const unpackRoster = (compactRoster: CompactRosterState): RosterState => {
  const units = Object.values(compactRoster.units).map((unit) => buildUnit(unit));
  return { ...compactRoster, units: units };
};

const Roster = () => {
  const dispatch: AppDispatch = useDispatch();
  const roster = useSelector((state: RootState) => state.roster);
  const viewMode = useSelector((state: RootState) => state.ui.viewMode);

  return (
    <>
      <Box display="flex" flexDirection="row" flexWrap="wrap">
        {roster.units.map((unit, id) => (
          <Unit id={id} key={id} />
        ))}
      </Box>
      {!Object.keys(roster.units).length && !viewMode && (
        <Typography variant="h6" style={{ marginBottom: 25 }}>
          Click the button to add your first unit!
        </Typography>
      )}
      {!viewMode && (
        <Fab
          color="secondary"
          style={{ marginLeft: 25, marginBottom: 25 }}
          onClick={() => dispatch(addUnit())}
          aria-label="Add unit"
        >
          <AddIcon />
        </Fab>
      )}
    </>
  );
};

export default Roster;
export { packRoster, unpackRoster };
