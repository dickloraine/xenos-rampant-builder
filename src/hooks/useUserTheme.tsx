import { createTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useAppDispatch, useAppSelector } from 'hooks/reduxHooks';
import React from 'react';
import { setAutoDarkMode } from 'store/appStateSlice';

const useUserTheme = () => {
  const dispatch = useAppDispatch();
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');
  const hasDarkMode = useAppSelector((state) => state.ui.darkMode);
  const darkMode = hasDarkMode === undefined ? prefersDarkMode : hasDarkMode;
  dispatch(setAutoDarkMode(darkMode));

  const theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          type: darkMode ? 'dark' : 'light',
          primary: { main: '#006B3C' },
        },
      }),
    [darkMode]
  );
  return theme;
};

export default useUserTheme;
