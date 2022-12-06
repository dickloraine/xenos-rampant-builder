import { IconButton, Tooltip, Typography } from '@material-ui/core';
import BrightnessHighIcon from '@material-ui/icons/BrightnessHigh';
import { useAppDispatch, useAppSelector } from 'hooks/reduxHooks';
import React from 'react';
import { updateUI } from 'store/uiSlice';

const Darkmode: React.FC<{ showText?: boolean }> = ({ showText }) => {
  let darkMode = useAppSelector((state) => state.ui.darkMode);
  const autoDarkMode = useAppSelector((state) => state.appState.autoDarkMode);
  const dispatch = useAppDispatch();
  const handleClick = () => {
    if (darkMode === undefined) darkMode = autoDarkMode;
    dispatch(updateUI({ darkMode: !darkMode }));
  };

  return (
    <>
      <Tooltip title="Dark Mode">
        <IconButton onClick={handleClick} aria-label="Toggle Dark mode">
          <BrightnessHighIcon color={darkMode ? 'inherit' : 'disabled'} />
        </IconButton>
      </Tooltip>
      {showText && (
        <Typography
          color={darkMode ? 'inherit' : 'textSecondary'}
          onClick={handleClick}
        >
          Dark Mode
        </Typography>
      )}
    </>
  );
};

export default React.memo(Darkmode);
