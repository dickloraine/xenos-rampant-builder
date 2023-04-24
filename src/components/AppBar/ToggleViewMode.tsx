import { IconButton, Tooltip } from '@material-ui/core';
import React from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks/reduxHooks';
import { UIState } from '../../store/types';
import { updateUI } from '../../store/uiSlice';

const ToggleViewMode: React.FC<{
  option: keyof UIState;
  Icon: any;
  title: string;
}> = ({ option, Icon, title }) => {
  const optionState = useAppSelector((state) => state.ui[option]);
  const dispatch = useAppDispatch();

  const changeViewMode = () => {
    const notClicked = option === 'viewMode' ? 'editMode' : 'viewMode';
    optionState
      ? dispatch(updateUI({ [option]: !optionState }))
      : dispatch(updateUI({ [option]: !optionState, [notClicked]: false }));
  };

  return (
    <Tooltip title={title}>
      <IconButton color="inherit" aria-label={title} onClick={changeViewMode}>
        <Icon fontSize="small" color={optionState ? 'inherit' : 'disabled'} />
      </IconButton>
    </Tooltip>
  );
};

export default ToggleViewMode;
