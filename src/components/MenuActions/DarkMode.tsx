import BrightnessHighIcon from '@mui/icons-material/BrightnessHigh';
import { useMediaQuery } from '@mui/material';
import React from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks/reduxHooks';
import { updateUI } from '../../store/uiSlice';
import MenuAction from './MenuAction';

const Darkmode: React.FC<{ showText?: boolean }> = ({ showText }) => {
  let darkMode = useAppSelector((state) => state.ui.darkMode);
  const autoDarkMode = useMediaQuery('(prefers-color-scheme: dark)');
  const dispatch = useAppDispatch();

  if (darkMode === null) darkMode = autoDarkMode;

  const handleClick = () => {
    dispatch(updateUI({ darkMode: !darkMode }));
  };

  return (
    <MenuAction
      text="Dark Mode"
      action={handleClick}
      icon={<BrightnessHighIcon />}
      showText={showText}
      enabled={darkMode}
    />
  );
};

export default React.memo(Darkmode);
