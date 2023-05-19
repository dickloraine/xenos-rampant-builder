import { Dialog } from '@mui/material';
import React from 'react';
import { useAppDispatch, useAppSelector } from '../../../hooks/reduxHooks';
import { setCustomizeMode } from '../../../store/appStateSlice';
import { RootState } from '../../../store/types';
import CustomizeMenuContent from './CustomizeMenuContent';

export interface PanelProps {
  expanded: string;
  handleChange: (
    name: string
  ) => (event: React.ChangeEvent<object>, isExpanded: boolean) => void;
}

const CustomizeMenu = () => {
  const open = useAppSelector((state: RootState) => state.appState.customizeMode);
  const dispatch = useAppDispatch();

  return (
    <Dialog open={open} onClose={() => dispatch(setCustomizeMode(false))}>
      <CustomizeMenuContent />
    </Dialog>
  );
};

export default React.memo(CustomizeMenu);
