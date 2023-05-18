import BrightnessHighIcon from '@mui/icons-material/BrightnessHigh';
import { IconButton, Tooltip, Typography, useMediaQuery } from '@mui/material';
import React from 'react';
import { useAppDispatch, useAppSelector } from '../hooks/reduxHooks';
import { updateUI } from '../store/uiSlice';

const Darkmode: React.FC<{ showText?: boolean }> = ({ showText }) => {
  let darkMode = useAppSelector((state) => state.ui.darkMode);
  const autoDarkMode = useMediaQuery('(prefers-color-scheme: dark)');
  const dispatch = useAppDispatch();

  if (darkMode === null) darkMode = autoDarkMode;

  const handleClick = () => {
    dispatch(updateUI({ darkMode: !darkMode }));
  };

  return (
    <>
      <Tooltip title="Dark Mode">
        <IconButton onClick={handleClick} aria-label="Toggle Dark mode" size="large">
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
