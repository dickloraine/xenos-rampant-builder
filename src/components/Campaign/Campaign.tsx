import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Button,
  Fab,
  Typography,
} from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { useAppDispatch, useAppSelector } from '../../hooks/reduxHooks';
import { addCampaign, getVictoryPoints } from '../../store/rosterSlice';
import { toggleUIOption } from '../../store/uiSlice';
import Battles from './Battles';
import CurrentCommander from './CurrentCommander';

const Campaign = () => {
  const dispatch = useAppDispatch();
  const campaignExpanded = useAppSelector((state) => state.ui.campaignExpanded);
  const campaign = useAppSelector((state) => state.roster.campaign);
  const currentCommander = campaign?.commanders[campaign.commanders.length - 1];
  const totalVictoryPoints = useAppSelector((state) => getVictoryPoints(state));

  return (
    <Accordion
      expanded={campaignExpanded}
      onChange={() => dispatch(toggleUIOption('campaignExpanded'))}
      style={{ maxWidth: 1210, marginBottom: 20 }}
    >
      <AccordionSummary expandIcon={<ExpandMoreIcon />}>
        <Typography variant="h3">Campaign</Typography>
      </AccordionSummary>
      <AccordionDetails style={{ marginLeft: 20, marginRight: 20 }}>
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
          <Box maxWidth="1210" marginBottom="20px" width="100%">
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
