import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  List,
  ListItem,
  ListItemText,
  Typography,
} from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectAllRules } from 'store/dataSlice';
import { getSpecialRules } from 'store/rosterSlice';
import { RootState } from 'store/types';
import { toggleUIOption } from 'store/uiSlice';

const RulesSummary = () => {
  const dispatch = useDispatch();
  const rulesData = useSelector((state: RootState) => selectAllRules(state));
  const rulesSummaryExpanded = useSelector(
    (state: RootState) => state.ui.rulesSummaryExpanded
  );
  const units = useSelector((state: RootState) => state.roster.units);
  const specialRules = getSpecialRules(units);

  return (
    <Accordion
      expanded={rulesSummaryExpanded}
      onChange={() => dispatch(toggleUIOption('rulesSummaryExpanded'))}
      style={{ maxWidth: 1210 }}
    >
      <AccordionSummary expandIcon={<ExpandMoreIcon />}>
        <Typography variant="h5">Rules Summary</Typography>
      </AccordionSummary>
      <AccordionDetails style={{ maxWidth: 800 }}>
        <List>
          {specialRules.map((rule) =>
            rulesData[rule] ? (
              <ListItem key={rule}>
                <ListItemText
                  primary={rule}
                  secondary={rulesData[rule].description || ''}
                />
              </ListItem>
            ) : (
              ''
            )
          )}
        </List>
      </AccordionDetails>
    </Accordion>
  );
};

export default RulesSummary;
