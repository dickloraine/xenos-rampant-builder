import GitHubIcon from '@mui/icons-material/GitHub';
import InfoIcon from '@mui/icons-material/Info';
import {
  Box,
  Chip,
  Dialog,
  DialogContent,
  DialogTitle,
  Typography,
} from '@mui/material';
import React from 'react';
import useOpen from '../../hooks/useOpen';
import MenuAction from './MenuAction';

const About: React.FC<{ onClose?: () => void; showText?: boolean }> = ({
  onClose = undefined,
  showText = true,
}) => {
  const [open, handleOpen, handleClose] = useOpen(false, undefined, onClose);

  return (
    <MenuAction
      text="About"
      action={handleOpen}
      icon={<InfoIcon />}
      showText={showText}
    >
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
              href="https://github.com/dickloraine/xenos-rampant-builder"
              clickable
            />
            <Box flexGrow={1}></Box>
            <Chip label="License: MIT" />
          </Box>
        </DialogContent>
      </Dialog>
    </MenuAction>
  );
};

export default React.memo(About);
