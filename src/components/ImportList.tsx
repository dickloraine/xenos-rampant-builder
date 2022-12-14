import { IconButton, Tooltip, Typography } from '@material-ui/core';
import GetAppIcon from '@material-ui/icons/GetApp';
import { useAppDispatch } from 'hooks/reduxHooks';
import React from 'react';
import { showFeedback, toggleForceInputUpdate } from 'store/appStateSlice';
import { setRoster } from 'store/rosterSlice';
import { unpackRoster } from './Roster';
import TextInputDialog from './TextInputDialog';

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
      anchor={
        <>
          <Tooltip title="Import list">
            <IconButton color="inherit" aria-label="Import List">
              <GetAppIcon />
            </IconButton>
          </Tooltip>
          {showText && <Typography>Import list</Typography>}
        </>
      }
      action={handleImport}
      title="Enter the import string"
      label="Import String"
      okayText="Import"
      onClose={onClose}
    />
  );
};

export default React.memo(ImportList);
