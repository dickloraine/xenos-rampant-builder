import { Fab, Typography } from '@mui/material';
import { useAppSelector } from '../../hooks/reduxHooks';
import { getTotalPoints } from '../../store/rosterSlice';

const TotalPoints = () => {
  const units = useAppSelector((state) => state.roster.units);
  const armyCost = getTotalPoints(units);

  return (
    <>
      <Typography variant="h4" sx={{ display: { xs: 'none', md: 'block' } }}>
        &nbsp;&nbsp;&nbsp;&nbsp;Total Points&nbsp;&nbsp;
        <Fab color="secondary" size="small">
          <Typography variant="h4">{armyCost}</Typography>
        </Fab>
      </Typography>
      <Typography variant="h4" sx={{ display: { md: 'none', xs: 'block' } }}>
        &nbsp;&nbsp;&nbsp;&nbsp;
        <Fab color="secondary" size="small">
          <Typography variant="h4">{armyCost}</Typography>
        </Fab>
      </Typography>
    </>
  );
};

export default TotalPoints;
