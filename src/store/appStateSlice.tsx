import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AppState, Severity } from './types';

const appStateSlice = createSlice({
  name: 'appState',
  initialState: {
    feedback: {
      open: false,
      message: '',
      severity: 'info',
    },
    inputUpdate: false,
    customizeMode: false,
  } as AppState,

  reducers: {
    toggleForceInputUpdate: (state) => {
      state.inputUpdate = !state.inputUpdate;
    },
    closeFeedback: (state) => {
      state.feedback.open = false;
    },
    showFeedback: {
      reducer: (state, action: PayloadAction<[string, Severity]>) => {
        const [message, Severity] = action.payload;
        state.feedback = { open: true, message: message, severity: Severity };
      },
      prepare: (
        message: string,
        severity: Severity
      ): { payload: [string, Severity] } => ({
        payload: [message, severity],
      }),
    },
    setCustomizeMode: (state, action) => {
      state.customizeMode = action.payload;
    },
  },
});

export const { toggleForceInputUpdate, closeFeedback, showFeedback, setCustomizeMode } =
  appStateSlice.actions;
export default appStateSlice.reducer;
