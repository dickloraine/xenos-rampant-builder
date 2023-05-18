import { RemoveCircle } from '@mui/icons-material';
import {
  Box,
  FormControl,
  IconButton,
  Input,
  MenuItem,
  Select,
  SelectChangeEvent,
  Tooltip,
  Typography,
} from '@mui/material';
import React from 'react';
import { useAppDispatch } from '../../../hooks/reduxHooks';
import useOpen from '../../../hooks/useOpen';
import { removeTrait } from '../../../store/rosterSlice';
import { CommanderState, TraitData } from '../../../store/types';

const RemoveTraits: React.FC<{ commander: CommanderState; traitData: TraitData }> = ({
  commander,
  traitData,
}) => {
  const dispatch = useAppDispatch();
  const [open, handleOpen, handleClose] = useOpen();

  const handleChange = (e: SelectChangeEvent<string[]>) =>
    dispatch(removeTrait([...(e.target.value as string[])]));

  return (
    <Box textAlign="center">
      <Typography variant="subtitle2">Remove traits</Typography>
      <IconButton onClick={handleOpen} size="large">
        <RemoveCircle />
      </IconButton>
      <FormControl variant="standard" sx={{ mt: 0, width: 0, height: 0 }}>
        <Select
          variant="standard"
          open={open}
          onClose={handleClose}
          onOpen={handleOpen}
          IconComponent={() => <Box />}
          multiple
          value={commander.removedCommanderTraits}
          onChange={handleChange}
          input={<Input />}
          renderValue={() => ' '}
        >
          {commander.commanderTraits.map((trait) => (
            <MenuItem
              key={traitData[trait].name + 'menuitem'}
              value={traitData[trait].name}
            >
              <Tooltip key={traitData[trait].name} title={traitData[trait].description}>
                <Typography
                  key={traitData[trait].name + 'menutypo'}
                  color={
                    commander.removedCommanderTraits.indexOf(traitData[trait].name) > -1
                      ? 'primary'
                      : 'inherit'
                  }
                >
                  {traitData[trait].name}
                </Typography>
              </Tooltip>
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
};

export default RemoveTraits;
