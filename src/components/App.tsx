import { Container, CssBaseline } from '@material-ui/core';
import { ThemeProvider } from '@material-ui/core/styles';
import useUserTheme from 'hooks/useUserTheme';
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { hydrateData } from 'store/dataSlice';
import AppBar from './AppBar';
import CustomizeMenu from './Customize/CustomizeMenu';
import ListName from './ListName';
import Roster from './Roster';
import RulesSummary from './RulesSummary';
import ShowFeedback from './ShowFeedback';
import Validation from './Validation';

const App = () => {
  const theme = useUserTheme();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(hydrateData());
  }, [dispatch]);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container>
        <AppBar />
        <ListName />
        <Roster />
        <Validation />
        <RulesSummary />
        {/* <SpellTable /> */}
        {/* <Statistics /> */}
        <ShowFeedback />
        <CustomizeMenu />
      </Container>
    </ThemeProvider>
  );
};

export default App;
