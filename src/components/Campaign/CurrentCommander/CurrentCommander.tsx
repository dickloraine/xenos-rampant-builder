import {
  Box,
  Card,
  CardContent,
  CardHeader,
  FormControl,
  Typography,
  makeStyles,
} from '@material-ui/core';
import React from 'react';
import { useAppDispatch, useAppSelector } from '../../../hooks/reduxHooks';
import { setCommanderName } from '../../../store/rosterSlice';
import { CommanderState } from '../../../store/types';
import CareerPoints from './CareerPoints';
import RemoveCommander from './RemoveCommander';
import SpendCareerPoints from './SpendCareerPoints';
import Traits from './Traits';

const useStyles = makeStyles((theme) => ({
  commanderName: {
    backgroundColor: theme.palette.background.paper,
    color: theme.palette.text.primary,
    border: 0,
  },
}));

const CurrentCommander: React.FC<{ currentCommander: CommanderState }> = ({
  currentCommander,
}) => {
  const dispatch = useAppDispatch();
  const classes = useStyles();
  const traitData = useAppSelector((state) => state.data.traitData);

  return (
    <Card style={{ marginTop: 20 }}>
      <CardHeader
        title={
          <Box display="flex" flexWrap="wrap">
            <FormControl>
              <Typography
                className={classes.commanderName}
                aria-label="Commander name"
                variant="h4"
                key={'currentCommanderName'}
                component="input"
                value={currentCommander.name}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  dispatch(setCommanderName(e.target.value))
                }
              />
            </FormControl>
            <Box flexGrow={1}></Box>
            <CareerPoints commander={currentCommander} />
          </Box>
        }
      />
      <CardContent style={{ marginLeft: 20 }}>
        <Traits commander={currentCommander} traitData={traitData} />
        <Typography variant="subtitle1" style={{ marginBottom: 20 }}>
          Extra detachment size:{' '}
          {<strong>{currentCommander.detachmentExpansions * 2}</strong>}
        </Typography>
        <SpendCareerPoints commander={currentCommander} traitData={traitData} />
        <RemoveCommander />
      </CardContent>
    </Card>
  );
};

export default React.memo(CurrentCommander);
