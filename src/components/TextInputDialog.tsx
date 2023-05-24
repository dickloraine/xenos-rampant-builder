import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
} from '@mui/material';
import React from 'react';
import useOpen from '../hooks/useOpen';

export type TextInputDialogProps = {
  anchor: JSX.Element;
  action: (text: string) => void;
  title?: string;
  label?: string;
  defaultValue?: string;
  cancelText?: string;
  okayText?: string;
  margin?: 'none' | 'dense' | 'normal' | undefined;
  onClose?: () => void;
  onOpen?: () => void;
};

const TextInputDialog = ({
  anchor,
  action,
  title = '',
  label = '',
  defaultValue = '',
  cancelText = 'Cancel',
  okayText = 'Okay',
  margin = 'dense',
  onClose,
  onOpen,
}: TextInputDialogProps) => {
  const [open, handleOpen, handleClose] = useOpen(false, onOpen, onClose);
  const [value, setValue] = React.useState('');

  const handleKeyPressed = (key: string) => {
    if (key === 'Enter') {
      action(value);
      handleClose();
    } else if (key === 'ESC') handleClose();
  };
  const handleAction = () => {
    action(value);
    handleClose();
  };

  return (
    <>
      <Box display="flex" alignItems="center" onClick={handleOpen}>
        {anchor}
      </Box>
      <Dialog onClose={handleClose} open={open}>
        <DialogTitle>{title}</DialogTitle>
        <DialogContent>
          <TextField
            variant="standard"
            autoFocus
            margin={margin}
            label={label}
            type="text"
            fullWidth
            defaultValue={defaultValue || value}
            onChange={(e) => setValue(e.target.value)}
            onKeyPress={(e) => handleKeyPressed(e.key)}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            {cancelText}
          </Button>
          <Button onClick={handleAction} disabled={!value} color="primary">
            {okayText}
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default TextInputDialog;
