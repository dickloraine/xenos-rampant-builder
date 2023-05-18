import { FormControl, Typography } from '@mui/material';
import React from 'react';
import { useAppDispatch, useAppSelector } from '../hooks/reduxHooks';
import { updateRoster } from '../store/rosterSlice';

const ListName = () => {
  const dispatch = useAppDispatch();
  const rosterName = useAppSelector((state) => state.roster.name);
  const inputUpdate = useAppSelector((state) => state.appState.inputUpdate);

  return (
    <FormControl variant="standard">
      <Typography
        aria-label="List name"
        variant="h2"
        key={inputUpdate.toString()}
        component="input"
        value={rosterName}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          dispatch(updateRoster({ name: e.target.value }))
        }
        sx={{
          backgroundColor: 'transparent',
          color: 'text.primary',
          border: 0,
          marginTop: '25px',
          marginBottom: '25px',
          width: '100%',
        }}
      />
    </FormControl>
  );
};

export default ListName;
