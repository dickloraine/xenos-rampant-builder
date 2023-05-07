import { createTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import React from 'react';
import { useAppDispatch, useAppSelector } from '../hooks/reduxHooks';
import { setAutoDarkMode } from '../store/appStateSlice';

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
        typography: {
          h2: {
            fontWeight: 400,
            fontSize: '2.125rem',
            lineHeight: 1.235,
            letterSpacing: '0.00735em',
          },
          h3: {
            fontWeight: 400,
            fontSize: '1.5rem',
            lineHeight: 1.334,
            letterSpacing: '0em',
          },
          h4: {
            fontWeight: 500,
            fontSize: '1.25rem',
            lineHeight: 1.6,
            letterSpacing: '0.0075em',
          },
          h5: {
            fontWeight: 500,
            fontSize: '1.1rem',
            lineHeight: 1.6,
            letterSpacing: '0.0075em',
          },
          h6: {
            fontWeight: 400,
            fontSize: '1.1rem',
            lineHeight: 1.6,
            letterSpacing: '0.0075em',
          },
        },
      }),
    [darkMode]
  );
  return theme;
};

export default useUserTheme;
