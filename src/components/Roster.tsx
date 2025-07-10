import AddIcon from '@mui/icons-material/Add';
import { Box, Fab, Typography } from '@mui/material';
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
      <Box display="flex" flexDirection="row" flexWrap="wrap" gap={2}>
        {roster.units.map((_unit, id) => (
          <Unit id={id} key={id} />
        ))}
      </Box>
      {!Object.keys(roster.units).length && !viewMode && (
        <Typography variant="h4" sx={{ mb: 3 }}>
          Click the button to add your first unit!
        </Typography>
      )}
      {!viewMode && (
        <Fab
          color="secondary"
          sx={{ ml: 3, mb: 3 }}
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
