import { Box, Fab, Typography } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import { useAppDispatch, useAppSelector } from '../hooks/reduxHooks';
import { addUnit } from '../store/rosterSlice';
import { CompactRosterState, CompactUnit, RosterState } from '../store/types';
import Unit from './Unit/Unit';
import buildUnit from './Unit/buildUnit';

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
  const dispatch = useAppDispatch();
  const roster = useAppSelector((state) => state.roster);
  const viewMode = useAppSelector((state) => state.ui.viewMode);

  return (
    <>
      <Box display="flex" flexDirection="row" flexWrap="wrap">
        {roster.units.map((_unit, id) => (
          <Unit id={id} key={id} />
        ))}
      </Box>
      {!Object.keys(roster.units).length && !viewMode && (
        <Typography variant="h4" style={{ marginBottom: 25 }}>
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
