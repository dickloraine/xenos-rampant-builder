import { Container, CssBaseline } from '@material-ui/core';
import { ThemeProvider } from '@material-ui/core/styles';
import { useEffect } from 'react';
import { useAppDispatch } from '../hooks/reduxHooks';
import useUserTheme from '../hooks/useUserTheme';
import { hydrateData } from '../store/dataSlice';
import AppBar from './AppBar';
import CustomizeMenu from './Customize/CustomizeMenu';
import ListName from './ListName';
import PsychicPowerTable from './PsychicPowerTable';
import Roster from './Roster';
import RulesSummary from './RulesSummary';
import ShowFeedback from './ShowFeedback';
import Validation from './Validation';

const App = () => {
  const theme = useUserTheme();
  const dispatch = useAppDispatch();

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
        <PsychicPowerTable />
        {/* <Statistics /> */}
        <ShowFeedback />
        <CustomizeMenu />
      </Container>
    </ThemeProvider>
  );
};

export default App;
