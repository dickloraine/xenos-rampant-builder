import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Button,
  Fab,
  Typography,
} from '@mui/material';
import { useAppDispatch, useAppSelector } from '../../hooks/reduxHooks';
import {
  addCampaign,
  getCurrentCommander,
  getVictoryPoints,
} from '../../store/rosterSlice';
import { toggleUIOption } from '../../store/uiSlice';
import Battles from './Battles';
import CurrentCommander from './CurrentCommander';

const Campaign = () => {
  const dispatch = useAppDispatch();
  const campaignExpanded = useAppSelector((state) => state.ui.campaignExpanded);
  const printMode = useAppSelector((state) => state.ui.printMode);
  const currentCommander = useAppSelector(getCurrentCommander);
  const totalVictoryPoints = useAppSelector(getVictoryPoints);

  // Force expand in print mode
  const isExpanded = printMode || campaignExpanded;

  return (
    <Accordion
      expanded={isExpanded}
      onChange={() => dispatch(toggleUIOption('campaignExpanded'))}
      sx={{ maxWidth: 1210 }}
    >
      <AccordionSummary expandIcon={<ExpandMoreIcon />}>
        <Typography variant="h3">Campaign</Typography>
      </AccordionSummary>
      <AccordionDetails>
        {!currentCommander ? (
          <Button
            color="primary"
            variant="contained"
            onClick={() => dispatch(addCampaign())}
            aria-label="Start a campaign"
          >
            Start a campaign!
          </Button>
        ) : (
          <Box sx={{ maxWidth: 1210, mb: 3, width: '100%' }}>
            <Typography variant="h4" align="right">
              Victory Points&nbsp;&nbsp;
              <Fab color="secondary" size="small">
                <Typography variant="body1">{totalVictoryPoints}</Typography>
              </Fab>
            </Typography>
            <CurrentCommander currentCommander={currentCommander} />
            <Battles />
          </Box>
        )}
      </AccordionDetails>
    </Accordion>
  );
};

export default Campaign;
