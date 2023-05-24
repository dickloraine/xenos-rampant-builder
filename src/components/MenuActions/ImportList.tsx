import GetAppIcon from '@mui/icons-material/GetApp';
import React from 'react';
import { useAppDispatch } from '../../hooks/reduxHooks';
import { showFeedback, toggleForceInputUpdate } from '../../store/appStateSlice';
import { setRoster } from '../../store/rosterSlice';
import { unpackRoster } from '../Roster';
import TextInputDialog from '../TextInputDialog';
import MenuAction from './MenuAction';

const ImportList: React.FC<{ onClose?: () => void; showText?: boolean }> = ({
  onClose,
  showText,
}) => {
  const dispatch = useAppDispatch();

  const handleImport = (value?: string) => {
    if (!value) return;
    try {
      const list = unpackRoster(JSON.parse(value));
      dispatch(setRoster({ ...list }));
      dispatch(toggleForceInputUpdate());
      dispatch(showFeedback('List imported!', 'success'));
    } catch (err) {
      dispatch(showFeedback('Could not import the list!', 'error'));
    }
  };

  return (
    <TextInputDialog
      action={handleImport}
      anchor={
        <MenuAction text={'Import list'} icon={<GetAppIcon />} showText={showText} />
      }
      title="Enter the import string"
      label="Import String"
      okayText="Import"
      onClose={onClose}
    />
  );
};

export default React.memo(ImportList);
