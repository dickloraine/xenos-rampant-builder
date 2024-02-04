import { Box, Typography } from '@mui/material';
import React from 'react';
import { CommanderState, TraitData } from '../../../store/types';
import AddTraits from './AddTraits';
import ExpandDetachment from './ExpandDetachment';
import RemoveTraits from './RemoveTraits';

const SpendCareerPoints: React.FC<{
  commander: CommanderState;
  traitData: TraitData;
}> = ({ commander, traitData }) => {
  return (
    <>
      <Typography variant="subtitle1">Spend career points</Typography>
      <Box display="flex" justifyContent="space-evenly" marginTop="20px">
        <AddTraits commander={commander} traitData={traitData} />
        <RemoveTraits commander={commander} traitData={traitData} />
        <ExpandDetachment commander={commander} />
      </Box>
    </>
  );
};

export default SpendCareerPoints;
