import SaveIcon from '@mui/icons-material/Save';
import { IconButton, Tooltip, Typography } from '@mui/material';
import React from 'react';
import { useAppDispatch, useAppSelector } from '../hooks/reduxHooks';
import { showFeedback } from '../store/appStateSlice';
import { rosterStore } from '../store/persistantStorage';
import { packRoster } from './Roster';

const SaveList: React.FC<{ onClose?: () => void; showText?: boolean }> = ({
  onClose,
  showText,
}) => {
  const dispatch = useAppDispatch();
  const roster = useAppSelector((state) => state.roster);

  const saveRoster = () => {
    if (roster.name === 'New List') {
      dispatch(showFeedback('You have to give the list a name!', 'error'));
      return;
    }
    rosterStore
      .setItem(roster.name, { ...packRoster(roster) })
      .then(() => dispatch(showFeedback('Saved!', 'success')))
      .catch((err) => {
        console.log(err);
        dispatch(showFeedback('Could not save!', 'error'));
      })
      .finally(() => {
        if (onClose) onClose();
      });
  };

  return <>
    <Tooltip title="Save List">
      <IconButton color="inherit" aria-label="Save List" onClick={saveRoster} size="large">
        <SaveIcon />
      </IconButton>
    </Tooltip>
    {showText && <Typography onClick={saveRoster}>Save List</Typography>}
  </>;
};

export default React.memo(SaveList);
