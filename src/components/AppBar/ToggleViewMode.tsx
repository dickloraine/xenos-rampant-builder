import { IconButton, SvgIconTypeMap, Tooltip } from '@mui/material';
import { OverridableComponent } from '@mui/material/OverridableComponent';
import React from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks/reduxHooks';
import { UIState } from '../../store/types';
import { updateUI } from '../../store/uiSlice';

const ToggleViewMode: React.FC<{
  option: keyof UIState;
  Icon: OverridableComponent<SvgIconTypeMap<object, 'svg'>>;
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
      <IconButton
        color="inherit"
        aria-label={title}
        onClick={changeViewMode}
        size="large"
      >
        <Icon fontSize="small" color={optionState ? 'inherit' : 'disabled'} />
      </IconButton>
    </Tooltip>
  );
};

export default ToggleViewMode;
