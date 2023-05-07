import { Box, IconButton, Typography } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
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
      <Typography variant="subtitle2" style={{ marginTop: 10 }}>
        Expand detachment
      </Typography>
      <Box display="flex" justifyContent="center" alignItems="center">
        <IconButton onClick={() => dispatch(adjustDetachmentExpansions(-1))}>
          <RemoveIcon />
        </IconButton>
        <Typography variant="body1">{commander.detachmentExpansions}</Typography>
        <IconButton onClick={() => dispatch(adjustDetachmentExpansions(1))}>
          <AddIcon />
        </IconButton>
      </Box>
    </Box>
  );
};

export default ExpandDetachment;
