import RestorePageIcon from '@mui/icons-material/RestorePage';
import { IconButton, Tooltip, Typography } from '@mui/material';
import React from 'react';
import { useAppDispatch } from '../hooks/reduxHooks';
import { showFeedback, toggleForceInputUpdate } from '../store/appStateSlice';
import { importCustomData } from '../store/dataSlice';
import { rosterStore } from '../store/persistantStorage';

const Restore: React.FC<{ onClose?: () => void; showText?: boolean }> = ({
  showText,
  onClose,
}) => {
  const dispatch = useAppDispatch();

  let fileReader: FileReader;
  const fileDialog = React.useRef<HTMLInputElement>(null);

  const restore = async () => {
    try {
      const content = fileReader.result as string;
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const data: any = JSON.parse(content);

      // eslint-disable-next-line no-prototype-builtins
      if (data.hasOwnProperty('rosters')) {
        await Promise.all(
          Object.entries(data.rosters).map(([key, val]) =>
            rosterStore.setItem(key, val)
          )
        );
        dispatch(importCustomData(data.customData));
      }
      dispatch(toggleForceInputUpdate());
      dispatch(showFeedback(`Restored!`, 'success'));
    } catch (err) {
      dispatch(showFeedback(`Could not restore!`, 'error'));
      console.log(err);
    }
    if (onClose) onClose();
  };

  const handleFileChosen = (event: React.ChangeEvent<HTMLInputElement>) => {
    fileReader = new FileReader();
    fileReader.onloadend = restore;
    if (event.target.files) fileReader.readAsText(event.target.files[0]);
  };

  const openFileDialog = () => {
    if (fileDialog.current) fileDialog.current.click();
  };

  return <>
    <Tooltip title="Backup">
      <IconButton color="inherit" onClick={openFileDialog} size="large">
        <RestorePageIcon />
      </IconButton>
    </Tooltip>
    {showText && <Typography onClick={openFileDialog}>Restore</Typography>}
    <input
      type="file"
      ref={fileDialog}
      style={{ display: 'none' }}
      id="restoreFile"
      accept=".sav"
      onChange={handleFileChosen}
    />
  </>;
};

export default React.memo(Restore);
