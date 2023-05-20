import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  List,
  ListItem,
  ListItemText,
  Typography,
} from '@mui/material';
import { useAppDispatch, useAppSelector } from '../hooks/reduxHooks';
import { getSpecialRules } from '../store/rosterSlice';
import { toggleUIOption } from '../store/uiSlice';

const RulesSummary = () => {
  const dispatch = useAppDispatch();
  const rulesSummaryExpanded = useAppSelector((state) => state.ui.rulesSummaryExpanded);
  const specialRules = useAppSelector((state) => getSpecialRules(state));

  return (
    <Accordion
      expanded={rulesSummaryExpanded}
      onChange={() => dispatch(toggleUIOption('rulesSummaryExpanded'))}
      sx={{ maxWidth: 1210 }}
    >
      <AccordionSummary expandIcon={<ExpandMoreIcon />}>
        <Typography variant="h3">Rules Summary</Typography>
      </AccordionSummary>
      <AccordionDetails sx={{ maxWidth: 800 }}>
        <List>
          {Object.values(specialRules).map((rule) => (
            <ListItem key={rule.name}>
              <ListItemText primary={rule.name} secondary={rule.description || ''} />
            </ListItem>
          ))}
        </List>
      </AccordionDetails>
    </Accordion>
  );
};

export default RulesSummary;
