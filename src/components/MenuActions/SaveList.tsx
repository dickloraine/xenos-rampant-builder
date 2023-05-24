import SaveIcon from '@mui/icons-material/Save';
import React from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks/reduxHooks';
import { showFeedback } from '../../store/appStateSlice';
import { rosterStore } from '../../store/persistantStorage';
import { packRoster } from '../Roster';
import MenuAction from './MenuAction';

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

  return (
    <MenuAction
      text="Save List"
      action={saveRoster}
      icon={<SaveIcon />}
      showText={showText}
    />
  );
};

export default React.memo(SaveList);
