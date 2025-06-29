import { Error, ExpandMore } from '@mui/icons-material';
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
} from '@mui/material';
import { useAppDispatch, useAppSelector } from '../hooks/reduxHooks';
import { toggleUIOption } from '../store/uiSlice';

const Validation = () => {
  const dispatch = useAppDispatch();
  const validationExpanded = useAppSelector((state) => state.ui.validationExpanded);
  const printMode = useAppSelector((state) => state.ui.printMode);
  const units = Object.values(useAppSelector((state) => state.roster.units));

  const warnings = [];
  for (const unit of units) {
    const isPsycher = unit.xenosRules.some((x) =>
      ['Psychic 1', 'Psychic 2', 'Psychic 3', 'Psychic 4'].includes(x)
    );
    if (unit.points > 12)
      warnings.push([unit.name, 'No Unit may cost more than 12 points!']);
    if (unit.name !== 'Unit' && unit.points < 1)
      warnings.push([unit.name, 'No Unit may cost less than one point!']);
    if (unit.xenosRules.includes('Fanatical Discipline') && unit.stats.courage < 3)
      warnings.push([unit.name, 'This unit can´t have less than 3 courage!']);
    if (unit.xenosRules.includes('Hive Mind') && unit.xenosRules.includes('Commander'))
      warnings.push([unit.name, 'A Commander can´t have Hive Mind!']);
    if (unit.xenosRules.includes('Slow') && unit.options.includes('Mobile'))
      warnings.push([unit.name, 'Slow and Mobile can´t be used together!']);
    if (
      unit.xenosRules.includes('Contagious') &&
      !(unit.xenosRules.includes('Demonic') || unit.xenosRules.includes('Undead'))
    )
      warnings.push([
        unit.name,
        'Conatagious can only be taken by demonic or undead units!',
      ]);
    if (unit.xenosRules.includes('Psychic Hazards') && !isPsycher)
      warnings.push([unit.name, 'Only a psychic unit can take Psychic Hazards!']);
    if (
      (unit.xenosRules.includes('Psychic Species 1') ||
        unit.xenosRules.includes('Psychic Species 2') ||
        unit.xenosRules.includes('Psychic Species 3')) &&
      !isPsycher
    )
      warnings.push([unit.name, 'Only a psychic unit can take Psychic Species!']);
    if (
      unit.xenosRules.includes('Psychic 1') &&
      unit.psiPowers &&
      unit.psiPowers.length > 1
    )
      warnings.push([unit.name, 'A Psychic 1 unit can only take 1 Psychic Power!']);
    if (
      unit.xenosRules.includes('Psychic 2') &&
      unit.psiPowers &&
      unit.psiPowers.length > 2
    )
      warnings.push([unit.name, 'A Psychic 2 unit can only take 2 Psychic Powers!']);
    if (
      unit.xenosRules.includes('Psychic 3') &&
      unit.psiPowers &&
      unit.psiPowers.length > 3
    )
      warnings.push([unit.name, 'A Psychic 3 unit can only take 3 Psychic Powers!']);
    if (
      unit.xenosRules.includes('Psychic 4') &&
      unit.psiPowers &&
      unit.psiPowers.length > 3
    )
      warnings.push([unit.name, 'A Psychic 4 unit can only take 3 Psychic Powers!']);
  }

  // Force expand in print mode
  const isExpanded = printMode || validationExpanded;

  return (
    <>
      {warnings.length !== 0 && (
        <Accordion
          expanded={isExpanded}
          onChange={() => dispatch(toggleUIOption('validationExpanded'))}
          sx={{ maxWidth: 'breakpoints.values.lg' }}
        >
          <AccordionSummary
            sx={{ backgroundColor: 'error.main', color: 'error.contrastText' }}
            expandIcon={<ExpandMore sx={{ color: 'error.contrastText' }} />}
          >
            <Typography variant="h3">Warnings</Typography>
          </AccordionSummary>
          <AccordionDetails
            sx={{ backgroundColor: 'error.light', color: 'error.contrastText' }}
          >
            <List>
              {warnings.map(([name, text], index) => (
                <ListItem key={index}>
                  <ListItemIcon sx={{ color: 'error.contrastText' }}>
                    <Error />
                  </ListItemIcon>
                  <ListItemText primary={name} secondary={text} />
                </ListItem>
              ))}
            </List>
          </AccordionDetails>
        </Accordion>
      )}
    </>
  );
};

export default Validation;
