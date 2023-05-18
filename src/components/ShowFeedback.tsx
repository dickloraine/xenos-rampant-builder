import { Alert, Snackbar, SnackbarCloseReason } from '@mui/material';
import { SyntheticEvent } from 'react';
import { useAppDispatch, useAppSelector } from '../hooks/reduxHooks';
import { closeFeedback } from '../store/appStateSlice';

const ShowFeedback = () => {
  const dispatch = useAppDispatch();
  const feedback = useAppSelector((state) => state.appState.feedback);

  const handleClose = (
    _event: Event | SyntheticEvent,
    reason?: SnackbarCloseReason
  ) => {
    if (reason === 'clickaway') {
      return;
    }
    dispatch(closeFeedback());
  };

  return (
    <Snackbar open={feedback.open} autoHideDuration={6000} onClose={handleClose}>
      <Alert
        onClose={handleClose}
        severity={feedback.severity}
        variant="filled"
        elevation={6}
      >
        {feedback.message}
      </Alert>
    </Snackbar>
  );
};

export default ShowFeedback;
