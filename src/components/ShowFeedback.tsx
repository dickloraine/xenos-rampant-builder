import Snackbar from '@material-ui/core/Snackbar';
import Alert from '@material-ui/lab/Alert';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { closeFeedback } from 'store/appStateSlice';
import { AppDispatch, RootState } from 'store/types';

const ShowFeedback = () => {
  const dispatch: AppDispatch = useDispatch();
  const feedback = useSelector((state: RootState) => state.appState.feedback);

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
