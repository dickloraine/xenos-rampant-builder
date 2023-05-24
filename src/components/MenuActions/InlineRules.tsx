import FormatIndentIncreaseIcon from '@mui/icons-material/FormatIndentIncrease';
import React from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks/reduxHooks';
import { toggleUIOption } from '../../store/uiSlice';
import MenuAction from './MenuAction';

const InlineRules: React.FC<{ showText?: boolean }> = ({ showText }) => {
  const inlineRules = useAppSelector((state) => state.ui.inlineRules);
  const dispatch = useAppDispatch();
  const handleClick = () => {
    dispatch(toggleUIOption('inlineRules'));
  };

  return (
    <MenuAction
      text="Inline rules"
      action={handleClick}
      icon={<FormatIndentIncreaseIcon />}
      showText={showText}
      enabled={inlineRules}
    />
  );
};

export default React.memo(InlineRules);
