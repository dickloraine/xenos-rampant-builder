import { FormControl, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateRoster } from 'store/rosterSlice';
import { AppDispatch, RootState } from 'store/types';

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
  const dispatch: AppDispatch = useDispatch();
  const rosterName = useSelector((state: RootState) => state.roster.name);
  const inputUpdate = useSelector((state: RootState) => state.appState.inputUpdate);

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
