import GetAppIcon from '@mui/icons-material/GetApp';
import ShareIcon from '@mui/icons-material/Share';
import {
  Button,
  ButtonGroup,
  Container,
  Dialog,
  DialogContent,
  DialogTitle,
} from '@mui/material';
import React, { useCallback, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks/reduxHooks';
import useOpen from '../../hooks/useOpen';
import { setCustomizeMode } from '../../store/appStateSlice';
import { RootState } from '../../store/types';
import ExportCustomData from './ExportCustomData';
import ImportCustomData from './ImportCustomData';
import PsychicPowersPanel from './PsychicPowersPanel/PsychicPowersPanel';
import RulesPanel from './RulesPanel/RulesPanel';
import UnitsPanel from './UnitsPanel/UnitsPanel';
import XenosRulesPanel from './XenosRulesPanel/XenosRulesPanel';

export interface PanelProps {
  expanded: string;
  handleChange: (
    name: string
  ) => (event: React.ChangeEvent<object>, isExpanded: boolean) => void;
}

const CustomizeMenu = () => {
  const open = useAppSelector((state: RootState) => state.appState.customizeMode);
  const dispatch = useAppDispatch();
  const [expanded, setExpanded] = useState<string>('');
  const [openImport, handleOpenImport, handleCloseImport] = useOpen();
  const [openExport, handleOpenExport, handleCloseExport] = useOpen();

  const handleChange = useCallback(
    (panel: string) => (_event: React.ChangeEvent<object>, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : '');
    },
    []
  );

  return (
    <Dialog open={open} onClose={() => dispatch(setCustomizeMode(false))}>
      <DialogTitle>Customize</DialogTitle>
      <DialogContent>
        <UnitsPanel expanded={expanded} handleChange={handleChange} />
        <XenosRulesPanel expanded={expanded} handleChange={handleChange} />
        <RulesPanel expanded={expanded} handleChange={handleChange} />
        <PsychicPowersPanel expanded={expanded} handleChange={handleChange} />
        <Container sx={{ mt: 3 }}>
          <ButtonGroup color="primary" variant="outlined">
            <Button
              aria-label="Import custom data"
              startIcon={<GetAppIcon />}
              onClick={() => handleOpenImport()}
            >
              Import
            </Button>
            <Button
              aria-label="Export custom data"
              startIcon={<ShareIcon />}
              onClick={() => handleOpenExport()}
            >
              Export
            </Button>
          </ButtonGroup>
        </Container>
      </DialogContent>
      <ImportCustomData open={openImport} handleClose={handleCloseImport} />
      <ExportCustomData open={openExport} handleClose={handleCloseExport} />
    </Dialog>
  );
};

export default React.memo(CustomizeMenu);
