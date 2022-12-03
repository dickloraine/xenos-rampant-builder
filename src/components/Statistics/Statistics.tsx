import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Chip,
  CircularProgress,
  Typography,
  useMediaQuery,
} from '@material-ui/core';
import { useTheme } from '@material-ui/core/styles';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import React, { lazy, Suspense } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getTotalPoints } from 'store/rosterSlice';
import { RootState } from 'store/types';
import { toggleUIOption } from 'store/uiSlice';
const PointDistributionChart = lazy(() => import('./PointDistributionChart'));
const UnitDistributionChart = lazy(() => import('./UnitDistributionChart'));

const Statistics = () => {
  const dispatch = useDispatch();
  const unitData = useSelector((state: RootState) => state.data.unitData);
  const xenosRulesData = useSelector((state: RootState) => state.data.xenosRulesData);
  const statisticsExpanded = useSelector(
    (state: RootState) => state.ui.statisticsExpanded
  );
  const units = useSelector((state: RootState) => state.roster.units);
  const totalPoints = getTotalPoints(units);
  const theme = useTheme();
  const chipSize = useMediaQuery(theme.breakpoints.down('sm')) ? 'small' : 'medium';

  const optionPoints = Object.values(units).reduce(
    (accumulator, unit) =>
      unit.options.reduce(
        (acc, option) => acc + (unitData[unit.name].options[option].points || 0),
        accumulator
      ),
    0
  );

  const xenosPoints = Object.values(units).reduce(
    (accumulator, unit) =>
      unit.xenosRules.reduce(
        (acc, option) => acc + xenosRulesData[option].points,
        accumulator
      ),
    0
  );

  const COLORS = ['#8884d8', '#82ca9d', '#FF8042'];
  const unitCount = Object.keys(units).length;
  const mounted = Object.values(units).filter((u) => u.type === 'vehicle');
  const foot = Object.values(units).filter((u) => u.type === 'foot');
  const ranged = Object.values(units).filter((u) => u.stats.shoot > 0);
  const unitsCost = Object.values(units).reduce(
    (acc, u) => acc + unitData[u.name].points,
    0
  );

  const dataUnitTypes = [
    {
      name: 'Vehicle',
      Units: Object.keys(mounted).length,
      Points: Object.values(mounted).reduce((acc, u) => acc + u.points, 0),
    },
    {
      name: 'Foot',
      Units: Object.keys(foot).length,
      Points: Object.values(foot).reduce((acc, u) => acc + u.points, 0),
    },
    {
      name: 'Ranged',
      Units: Object.keys(ranged).length,
      Points: Object.values(ranged).reduce((acc, u) => acc + u.points, 0),
    },
  ];

  const dataPoints = [
    { name: 'Units', value: unitsCost },
    { name: 'Options', value: optionPoints < 0 ? 0 : optionPoints },
    { name: 'Xenos Rules', value: xenosPoints },
  ];

  return (
    <Accordion
      expanded={statisticsExpanded}
      onChange={() => dispatch(toggleUIOption('statisticsExpanded'))}
      style={{ maxWidth: 1210 }}
    >
      <AccordionSummary expandIcon={<ExpandMoreIcon />}>
        <Typography variant="h5">Statistics</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <div>
          <Chip
            label={totalPoints + ' Points'}
            color="primary"
            size={chipSize}
            style={{ marginRight: 10, marginBottom: 25 }}
          />
          <Chip
            label={unitCount + ' Units'}
            color="primary"
            size={chipSize}
            style={{ marginRight: 10, marginBottom: 25 }}
          />
          <Chip
            label={
              (totalPoints / (unitCount ? unitCount : 1)).toPrecision(2) +
              ' Points per unit'
            }
            color="primary"
            size={chipSize}
            style={{ marginRight: 10, marginBottom: 25 }}
          />
          {unitsCost > 0 && (
            <Suspense fallback={<CircularProgress />}>
              <Typography variant="h6" style={{ marginTop: 25 }}>
                Unit Distribution
              </Typography>
              <UnitDistributionChart
                data={dataUnitTypes}
                height={300}
                colors={COLORS}
              />
              <Typography variant="h6" style={{ marginTop: 25 }}>
                Point Distribution
              </Typography>
              <PointDistributionChart data={dataPoints} height={300} colors={COLORS} />
            </Suspense>
          )}
        </div>
      </AccordionDetails>
    </Accordion>
  );
};

export default Statistics;
