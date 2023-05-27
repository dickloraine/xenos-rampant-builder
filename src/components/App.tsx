import { Container, CssBaseline } from '@mui/material';
import { StyledEngineProvider, ThemeProvider } from '@mui/material/styles';
import { useEffect } from 'react';
import { useAppDispatch } from '../hooks/reduxHooks';
import useUserTheme from '../hooks/useUserTheme';
import { hydrateData } from '../store/dataSlice';
import AppBar from './AppBar';
import Campaign from './Campaign/Campaign';
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
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Container sx={{ mb: 3 }}>
          <AppBar />
          <ListName />
          <Roster />
          <Validation />
          <RulesSummary />
          <PsychicPowerTable />
          <Campaign />
          <ShowFeedback />
          <CustomizeMenu />
        </Container>
      </ThemeProvider>
    </StyledEngineProvider>
  );
};

export default App;
