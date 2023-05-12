import { Dialog } from '@material-ui/core';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setCustomizeMode } from '../../../store/appStateSlice';
import { AppDispatch, RootState } from '../../../store/types';
import CustomizeMenuContent from './CustomizeMenuContent';

export interface PanelProps {
  expanded: string;
  handleChange: (
    name: string
  ) => (event: React.ChangeEvent<object>, isExpanded: boolean) => void;
}

const CustomizeMenu = () => {
  const open = useSelector((state: RootState) => state.appState.customizeMode);
  const dispatch: AppDispatch = useDispatch();

  return (
    <Dialog open={open} onClose={() => dispatch(setCustomizeMode(false))}>
      <CustomizeMenuContent />
    </Dialog>
  );
};

export default React.memo(CustomizeMenu);
