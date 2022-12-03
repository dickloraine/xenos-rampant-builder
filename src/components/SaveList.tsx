import { IconButton, Tooltip, Typography } from '@material-ui/core';
import SaveIcon from '@material-ui/icons/Save';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { showFeedback } from 'store/appStateSlice';
import { rosterStore } from 'store/persistantStorage';
import { AppDispatch, RootState } from 'store/types';
import { packRoster } from './Roster';

const SaveList: React.FC<{ onClose?: () => void; showText?: boolean }> = ({
  onClose,
  showText,
}) => {
  const dispatch: AppDispatch = useDispatch();
  const roster = useSelector((state: RootState) => state.roster);

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

  return (
    <>
      <Tooltip title="Save List">
        <IconButton color="inherit" aria-label="Save List" onClick={saveRoster}>
          <SaveIcon />
        </IconButton>
      </Tooltip>
      {showText && <Typography onClick={saveRoster}>Save List</Typography>}
    </>
  );
};

export default React.memo(SaveList);
