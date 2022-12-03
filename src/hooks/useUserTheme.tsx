import { createTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setAutoDarkMode } from 'store/appStateSlice';
import { AppDispatch, RootState } from 'store/types';

const useUserTheme = () => {
  const dispatch: AppDispatch = useDispatch();
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');
  const hasDarkMode = useSelector((state: RootState) => state.ui.darkMode);
  const darkMode = hasDarkMode === undefined ? prefersDarkMode : hasDarkMode;
  dispatch(setAutoDarkMode(darkMode));

  const theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          type: darkMode ? 'dark' : 'light',
        },
      }),
    [darkMode]
  );
  return theme;
};

export default useUserTheme;
