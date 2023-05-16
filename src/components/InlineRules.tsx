import { IconButton, Tooltip, Typography } from '@material-ui/core';
import FormatIndentIncreaseIcon from '@material-ui/icons/FormatIndentIncrease';
import React from 'react';
import { useAppDispatch, useAppSelector } from '../hooks/reduxHooks';
import { toggleUIOption } from '../store/uiSlice';

const InlineRules: React.FC<{ showText?: boolean }> = ({ showText }) => {
  const inlineRules = useAppSelector((state) => state.ui.inlineRules);
  const dispatch = useAppDispatch();
  const handleClick = () => {
    dispatch(toggleUIOption('inlineRules'));
  };

  return (
    <>
      <Tooltip title="Show short rules inline">
        <IconButton
          onClick={handleClick}
          color="inherit"
          aria-label="Toggle show short rules inline"
        >
          <FormatIndentIncreaseIcon color={inlineRules ? 'inherit' : 'disabled'} />
        </IconButton>
      </Tooltip>
      {showText && (
        <Typography
          color={inlineRules ? 'inherit' : 'textSecondary'}
          onClick={handleClick}
        >
          Inline rules
        </Typography>
      )}
    </>
  );
};

export default React.memo(InlineRules);
