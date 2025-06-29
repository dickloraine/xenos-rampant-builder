import { Container, CssBaseline } from '@mui/material';
import { StyledEngineProvider, ThemeProvider } from '@mui/material/styles';
import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../hooks/reduxHooks';
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
  const printMode = useAppSelector((state) => state.ui.printMode);

  useEffect(() => {
    dispatch(hydrateData());
  }, [dispatch]);

  // Print styles injected directly into the document head
  useEffect(() => {
    if (printMode) {
      const style = document.createElement('style');
      style.id = 'print-styles';
      style.textContent = `
        @media print, screen {
          .print-mode .print-section {
            margin-bottom: 16px !important;
            margin-top: 0 !important;
            padding: 0 !important;
          }
          
          .print-mode .MuiContainer-root {
            max-width: none !important;
            padding: 0 !important;
            margin: 0 !important;
          }
          
          .print-mode .MuiCard-root {
            width: 48% !important;
            display: inline-block !important;
            vertical-align: top !important;
            margin: 0 2% 8px 0 !important;
            break-inside: avoid !important;
          }
          
          .print-mode .MuiBox-root[style*="flex"] {
            display: block !important;
          }
          
          /* Ensure accordions are expanded and compact */
          .print-mode .MuiAccordion-root {
            box-shadow: none !important;
            margin: 0 0 8px 0 !important;
          }
          
          .print-mode .MuiAccordionSummary-root {
            min-height: auto !important;
            padding: 4px 16px !important;
          }
          
          .print-mode .MuiAccordionDetails-root {
            display: block !important;
            padding: 4px 16px 8px 16px !important;
          }
          
          .print-mode .MuiCollapse-root {
            height: auto !important;
          }
          
          .print-mode .MuiCollapse-wrapper {
            height: auto !important;
          }
          
          .print-mode .MuiCollapse-wrapperInner {
            height: auto !important;
          }
        }
        
        @media print {
          html, body {
            margin: 0 !important;
            padding: 0 !important;
          }
          
          .print-mode .MuiAppBar-root,
          .print-mode .MuiFab-root {
            display: none !important;
          }
          
          .print-mode .MuiContainer-root {
            margin: 0 !important;
            padding: 0 !important;
          }
          
          /* Force expand all collapsible content */
          .print-mode .MuiCollapse-root {
            height: auto !important;
            overflow: visible !important;
          }
          
          .print-mode .MuiAccordion-root .MuiCollapse-root {
            height: auto !important;
          }
          
          /* Compact typography for print */
          .print-mode .MuiTypography-h3 {
            font-size: 1.2rem !important;
            margin: 0 !important;
          }
          
          .print-mode .MuiTypography-root {
            margin: 0 !important;
          }
        }
      `;
      document.head.appendChild(style);

      // Add print-mode class to body
      document.body.classList.add('print-mode');
    } else {
      // Remove print styles and class when print mode is disabled
      const existingStyle = document.getElementById('print-styles');
      if (existingStyle) {
        document.head.removeChild(existingStyle);
      }
      document.body.classList.remove('print-mode');
    }

    // Cleanup on unmount
    return () => {
      const existingStyle = document.getElementById('print-styles');
      if (existingStyle) {
        document.head.removeChild(existingStyle);
      }
      document.body.classList.remove('print-mode');
    };
  }, [printMode]);

  // Helper component to conditionally wrap content for print mode
  const PrintSection: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    if (printMode) {
      return <div className="print-section">{children}</div>;
    }
    return <>{children}</>;
  };

  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Container sx={{ mb: 3 }}>
          <AppBar />
          <PrintSection>
            <ListName />
            <Roster />
          </PrintSection>
          <PrintSection>
            <Validation />
          </PrintSection>
          <PrintSection>
            <RulesSummary />
          </PrintSection>
          <PrintSection>
            <PsychicPowerTable />
          </PrintSection>
          {!printMode && (
            <PrintSection>
              <Campaign />
            </PrintSection>
          )}
          <ShowFeedback />
          <CustomizeMenu />
        </Container>
      </ThemeProvider>
    </StyledEngineProvider>
  );
};

export default App;
