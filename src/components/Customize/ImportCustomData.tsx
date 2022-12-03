import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
} from '@material-ui/core';
import React from 'react';
import { useDispatch } from 'react-redux';
import { showFeedback } from 'store/appStateSlice';
import { importCustomData } from 'store/dataSlice';

const ImportCustomData: React.FC<{ open: boolean; handleClose: () => void }> = ({
  open,
  handleClose,
}) => {
  const dispatch = useDispatch();
  const [value, setValue] = React.useState('');

  const handleImport = () => {
    if (!value) {
      dispatch(showFeedback('You have to input some data!', 'error'));
      return;
    }
    try {
      const data = JSON.parse(value);
      dispatch(importCustomData(data));
      dispatch(showFeedback('Custom data imported!', 'success'));
    } catch (err) {
      dispatch(showFeedback('Could not import the custom data!', 'error'));
    }
  };

  const handleKeyPressed = (key: string) => {
    if (key === 'Enter') {
      handleAction();
    } else if (key === 'ESC') handleClose();
  };

  const handleAction = () => {
    handleImport();
    handleClose();
  };

  return (
    <Dialog onClose={handleClose} open={open}>
      <DialogTitle>Enter the import string</DialogTitle>
      <DialogContent>
        <TextField
          autoFocus
          margin="normal"
          label="Import String"
          type="text"
          fullWidth
          onChange={(e) => setValue(e.target.value)}
          onKeyPress={(e) => handleKeyPressed(e.key)}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} color="primary">
          Cancel
        </Button>
        <Button onClick={handleAction} disabled={!value} color="primary">
          Import
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default React.memo(ImportCustomData);
