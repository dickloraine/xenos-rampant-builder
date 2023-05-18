import { Box, Typography } from '@mui/material';
import AddBattle from './AddBattle';
import BattlesView from './BattlesView';

const Battles = () => {
  return (
    <Box marginTop="20px">
      <Typography variant="h4">Battles</Typography>
      <AddBattle />
      <BattlesView />
    </Box>
  );
};

export default Battles;
