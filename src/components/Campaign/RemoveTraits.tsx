import {
  Box,
  FormControl,
  IconButton,
  Input,
  MenuItem,
  Select,
  Tooltip,
  Typography,
} from '@material-ui/core';
import { RemoveCircle } from '@material-ui/icons';
import React from 'react';
import { useAppDispatch } from '../../hooks/reduxHooks';
import useOpen from '../../hooks/useOpen';
import { removeTrait } from '../../store/rosterSlice';
import { CommanderState, TraitData } from '../../store/types';

const RemoveTraits: React.FC<{ commander: CommanderState; traitData: TraitData }> = ({
  commander,
  traitData,
}) => {
  const dispatch = useAppDispatch();
  const [open, handleOpen, handleClose] = useOpen();

  const handleChange = (e: React.ChangeEvent<{ value: unknown }>) =>
    dispatch(removeTrait([...(e.target.value as string[])]));

  return (
    <Box textAlign="center">
      <Typography variant="subtitle2" style={{ marginTop: 5 }}>
        Remove traits
      </Typography>
      <IconButton onClick={handleOpen}>
        <RemoveCircle />
      </IconButton>
      <FormControl style={{ marginTop: 0, width: 0, height: 0 }}>
        <Select
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
