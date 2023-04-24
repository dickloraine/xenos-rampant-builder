import { Fab, Hidden, Typography } from '@material-ui/core';
import { useAppSelector } from '../../hooks/reduxHooks';
import { getTotalPoints } from '../../store/rosterSlice';

const TotalPoints = () => {
  const units = useAppSelector((state) => state.roster.units);
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
