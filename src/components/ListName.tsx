import { FormControl, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import React from 'react';
import { useAppDispatch, useAppSelector } from '../hooks/reduxHooks';
import { updateRoster } from '../store/rosterSlice';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.default,
    color: theme.palette.text.primary,
    border: 0,
    marginTop: 25,
    marginBottom: 25,
    width: '100%',
  },
}));

const ListName = () => {
  const classes = useStyles();
  const dispatch = useAppDispatch();
  const rosterName = useAppSelector((state) => state.roster.name);
  const inputUpdate = useAppSelector((state) => state.appState.inputUpdate);

  return (
    <FormControl>
      <Typography
        className={classes.root}
        aria-label="List name"
        variant="h4"
        key={inputUpdate.toString()}
        component="input"
        value={rosterName}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          dispatch(updateRoster({ name: e.target.value }))
        }
      />
    </FormControl>
  );
};

export default ListName;
