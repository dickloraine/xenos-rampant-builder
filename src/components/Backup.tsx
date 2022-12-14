import { IconButton, Tooltip, Typography } from '@material-ui/core';
import BackupIcon from '@material-ui/icons/Backup';
import { saveAs } from 'file-saver';
import { useAppSelector } from 'hooks/reduxHooks';
import React from 'react';
import { rosterStore } from 'store/persistantStorage';

const Backup: React.FC<{ showText: boolean; onClose?: () => void }> = ({
  showText = false,
  onClose = undefined,
}) => {
  const customData = useAppSelector((state) => state.data.customData);

  const backup = async () => {
    const backupState: any = {
      rosters: {},
      customData: customData,
    };

    await rosterStore.iterate((val, key) => {
      backupState.rosters[key] = val;
    });

    const file = new Blob([JSON.stringify(backupState)], {
      type: 'text/plain;charset=utf-8',
    });

    let date = new Date();
    const offsetMs = date.getTimezoneOffset() * 60 * 1000;
    date = new Date(date.getTime() - offsetMs);
    const dateText = date.toISOString().slice(0, 10).replace(/-/g, '/');

    saveAs(file, `${dateText}_DRAB.sav`);
    if (onClose) onClose();
  };

  return (
    <>
      <Tooltip title="Backup">
        <IconButton color="inherit" onClick={backup}>
          <BackupIcon />
        </IconButton>
      </Tooltip>
      {showText && <Typography onClick={backup}>Backup</Typography>}
    </>
  );
};

export default React.memo(Backup);
