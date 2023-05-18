import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { Box, IconButton, Typography } from '@mui/material';
import React from 'react';
import { useAppDispatch } from '../../../hooks/reduxHooks';
import { adjustDetachmentExpansions } from '../../../store/rosterSlice';
import { CommanderState } from '../../../store/types';

const ExpandDetachment: React.FC<{
  commander: CommanderState;
}> = ({ commander }) => {
  const dispatch = useAppDispatch();

  return (
    <Box textAlign="center">
      <Typography variant="subtitle2">Expand detachment</Typography>
      <Box display="flex" justifyContent="center" alignItems="center">
        <IconButton
          onClick={() => dispatch(adjustDetachmentExpansions(-1))}
          size="large"
        >
          <RemoveIcon />
        </IconButton>
        <Typography variant="body1">{commander.detachmentExpansions}</Typography>
        <IconButton
          onClick={() => dispatch(adjustDetachmentExpansions(1))}
          size="large"
        >
          <AddIcon />
        </IconButton>
      </Box>
    </Box>
  );
};

export default ExpandDetachment;
