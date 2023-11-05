import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from '@mui/material';
import React from 'react';

const useConfirmation = (): [
  () => JSX.Element,
  (message?: string, title?: string) => Promise<boolean>,
] => {
  const [promise, setPromise] = React.useState<{
    resolve: (value: boolean) => void;
  } | null>(null);
  const [confirmMessage, setMessage] = React.useState('');
  const [confirmTitle, setTitle] = React.useState('Confirm action');

  const confirm = (message?: string, title?: string) =>
    new Promise((resolve: (value: boolean) => void) => {
      if (message) setMessage(message);
      if (title) setTitle(title);
      setPromise({ resolve });
    });

  const handleClose = () => {
    setPromise(null);
  };

  const handleConfirm = () => {
    promise?.resolve(true);
    handleClose();
  };

  const handleCancel = () => {
    promise?.resolve(false);
    handleClose();
  };

  const Confirmation = () => (
    <Dialog open={promise !== null}>
      <DialogTitle>{confirmTitle}</DialogTitle>
      <DialogContent>
        <DialogContentText>{confirmMessage}</DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleConfirm}>Okay</Button>
        <Button onClick={handleCancel}>Cancel</Button>
      </DialogActions>
    </Dialog>
  );

  return [Confirmation, confirm];
};

export default useConfirmation;
