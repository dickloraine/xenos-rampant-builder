import {
  Box,
  Card,
  CardContent,
  CardHeader,
  FormControl,
  Typography,
} from '@mui/material';
import React from 'react';
import { useAppDispatch, useAppSelector } from '../../../hooks/reduxHooks';
import { setCommanderName } from '../../../store/rosterSlice';
import { CommanderState } from '../../../store/types';
import CareerPoints from './CareerPoints';
import RemoveCommander from './RemoveCommander';
import SpendCareerPoints from './SpendCareerPoints';
import Traits from './Traits';

const CurrentCommander: React.FC<{ currentCommander: CommanderState }> = ({
  currentCommander,
}) => {
  const dispatch = useAppDispatch();
  const traitData = useAppSelector((state) => state.data.traitData);

  return (
    <Card sx={{ mt: 3 }}>
      <CardHeader
        title={
          <Box display="flex" flexWrap="wrap">
            <FormControl variant="standard">
              <Typography
                sx={{
                  backgroundColor: 'transparent',
                  color: 'text.primary',
                  border: 0,
                }}
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
      <CardContent sx={{ ml: 2 }}>
        <Traits commander={currentCommander} traitData={traitData} />
        <Typography variant="subtitle1" sx={{ mb: 3 }}>
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
