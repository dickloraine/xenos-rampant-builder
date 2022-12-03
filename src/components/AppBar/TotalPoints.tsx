import { Fab, Hidden, Typography } from '@material-ui/core';
import React from 'react';
import { useSelector } from 'react-redux';
import { getTotalPoints } from 'store/rosterSlice';
import { RootState } from 'store/types';

const TotalPoints = () => {
  const units = useSelector((state: RootState) => state.roster.units);
  const armyCost = getTotalPoints(units);

  return (
    <>
      <Hidden smDown>
        <Typography variant="h6">
          &nbsp;&nbsp;&nbsp;&nbsp;Total Points&nbsp;&nbsp;
          <Fab color="secondary" size="small">
            <Typography variant="h6">{armyCost}</Typography>
          </Fab>
        </Typography>
      </Hidden>
      <Hidden mdUp>
        <Typography variant="h6">
          &nbsp;&nbsp;&nbsp;&nbsp;
          <Fab color="secondary" size="small">
            <Typography variant="h6">{armyCost}</Typography>
          </Fab>
        </Typography>
      </Hidden>
    </>
  );
};

export default TotalPoints;
