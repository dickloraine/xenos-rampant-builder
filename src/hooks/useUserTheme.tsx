import { green } from '@mui/material/colors';
import { ThemeOptions, createTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import React from 'react';
import { useAppSelector } from '../hooks/reduxHooks';

const getTheme = (isDarkmode: boolean | null): ThemeOptions => ({
  palette: {
    mode: isDarkmode ? 'dark' : 'light',
    ...(isDarkmode
      ? {
          primary: {
            light: green[700],
            main: green[800],
            dark: green[900],
            contrastText: '#fff',
          },
        }
      : {
          primary: {
            light: green[800],
            main: green[900],
            dark: green[900],
            contrastText: '#fff',
          },
        }),
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
  components: {
    MuiTextField: {
      defaultProps: {
        margin: 'normal',
      },
    },
    MuiTooltip: {
      defaultProps: {
        enterDelay: 500,
        leaveDelay: 100,
        disableInteractive: true,
      },
    },
  },
});

const useUserTheme = () => {
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');
  const hasDarkMode = useAppSelector((state) => state.ui.darkMode);
  const isDarkmode = hasDarkMode === null ? prefersDarkMode : hasDarkMode;

  const theme = React.useMemo(() => createTheme(getTheme(isDarkmode)), [isDarkmode]);

  return theme;
};

export default useUserTheme;
