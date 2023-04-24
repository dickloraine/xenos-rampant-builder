import { Box, Button, ButtonGroup, DialogTitle } from '@material-ui/core';
import GetAppIcon from '@material-ui/icons/GetApp';
import ShareIcon from '@material-ui/icons/Share';
import React, { useCallback, useState } from 'react';
import useOpen from '../../hooks/useOpen';
import ExportCustomData from './ExportCustomData';
import ImportCustomData from './ImportCustomData';
import RulesPanel from './RulesPanel';
import SpellsPanel from './SpellsPanel';
import UnitsPanel from './UnitsPanel';
import XenosRulesPanel from './XenosRulesPanel';

const CustomizeMenuContent = () => {
  const [expanded, setExpanded] = useState<string>('');
  const [openImport, handleOpenImport, handleCloseImport] = useOpen();
  const [openExport, handleOpenExport, handleCloseExport] = useOpen();

  const handleChange = useCallback(
    (panel: string) => (event: React.ChangeEvent<{}>, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : '');
    },
    []
  );

  return (
    <>
      <DialogTitle>Customize</DialogTitle>
      <UnitsPanel expanded={expanded} handleChange={handleChange} />
      <XenosRulesPanel expanded={expanded} handleChange={handleChange} />
      <RulesPanel expanded={expanded} handleChange={handleChange} />
      <SpellsPanel expanded={expanded} handleChange={handleChange} />
      <Box m={2} mx="auto">
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
      </Box>
      <ImportCustomData open={openImport} handleClose={handleCloseImport} />
      <ExportCustomData open={openExport} handleClose={handleCloseExport} />
    </>
  );
};

export default React.memo(CustomizeMenuContent);
