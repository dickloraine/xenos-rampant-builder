import GitHubIcon from '@mui/icons-material/GitHub';
import InfoIcon from '@mui/icons-material/Info';
import {
  Box,
  Chip,
  Dialog,
  DialogContent,
  DialogTitle,
  IconButton,
  Tooltip,
  Typography,
} from '@mui/material';
import React from 'react';
import useOpen from '../hooks/useOpen';

const About: React.FC<{ onClose?: () => void }> = ({ onClose = undefined }) => {
  const [open, handleOpen, handleClose] = useOpen(false, undefined, onClose);

  return (
    <>
      <Tooltip title="Load List">
        <IconButton color="inherit" onClick={handleOpen} size="large">
          <InfoIcon />
        </IconButton>
      </Tooltip>
      {<Typography onClick={handleOpen}>About</Typography>}
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle sx={{ textAlign: 'center' }}>About</DialogTitle>
        <DialogContent>
          <Typography variant="body1">
            A simple Army Builder for the tabletop game{' '}
            {<a href="https://ospreypublishing.com/xenos-rampant">Xenos Rampant</a>}.
          </Typography>
          <Box display="flex" sx={{ mt: 3 }}>
            <Chip
              label="View on Github"
              icon={<GitHubIcon />}
              component="a"
              href="#chip"
              clickable
            />
            <Box flexGrow={1}></Box>
            <Chip label="License: MIT" />
          </Box>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default React.memo(About);
