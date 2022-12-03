import { IconButton, Tooltip, Typography } from '@material-ui/core';
import BrightnessHighIcon from '@material-ui/icons/BrightnessHigh';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'store/types';
import { updateUI } from 'store/uiSlice';

const Darkmode: React.FC<{ showText?: boolean }> = ({ showText }) => {
  let darkMode = useSelector((state: RootState) => state.ui.darkMode);
  const autoDarkMode = useSelector((state: RootState) => state.appState.autoDarkMode);
  const dispatch = useDispatch();
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
