import Snackbar from '@material-ui/core/Snackbar';
import Alert from '@material-ui/lab/Alert';
import { useAppDispatch, useAppSelector } from 'hooks/reduxHooks';
import React from 'react';
import { closeFeedback } from 'store/appStateSlice';

const ShowFeedback = () => {
  const dispatch = useAppDispatch();
  const feedback = useAppSelector((state) => state.appState.feedback);

  const handleClose = (event?: React.SyntheticEvent, reason?: string) => {
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
