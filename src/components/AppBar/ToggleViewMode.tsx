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
    if (option === 'printMode') {
      // Print mode should disable both view and edit modes
      optionState
        ? dispatch(updateUI({ [option]: !optionState }))
        : dispatch(
            updateUI({ [option]: !optionState, viewMode: false, editMode: false })
          );
    } else {
      const notClicked = option === 'viewMode' ? 'editMode' : 'viewMode';
      optionState
        ? dispatch(updateUI({ [option]: !optionState }))
        : dispatch(
            updateUI({ [option]: !optionState, [notClicked]: false, printMode: false })
          );
    }
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
