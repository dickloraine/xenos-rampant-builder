import { CircularProgress, Dialog } from '@material-ui/core';
import React, { lazy, Suspense } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setCustomizeMode } from 'store/appStateSlice';
import { AppDispatch, RootState } from 'store/types';
const CustomizeMenuContent = lazy(() => import('./CustomizeMenuContent'));

export interface PanelProps {
  expanded: string;
  handleChange: (
    name: string
  ) => (event: React.ChangeEvent<{}>, isExpanded: boolean) => void;
}

const CustomizeMenu = () => {
  const open = useSelector((state: RootState) => state.appState.customizeMode);
  const dispatch: AppDispatch = useDispatch();

  return (
    <Dialog open={open} onClose={() => dispatch(setCustomizeMode(false))}>
      <Suspense fallback={<CircularProgress />}>
        <CustomizeMenuContent />
      </Suspense>
    </Dialog>
  );
};

export default React.memo(CustomizeMenu);
