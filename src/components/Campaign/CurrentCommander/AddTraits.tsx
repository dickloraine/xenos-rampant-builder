import {
  Box,
  FormControl,
  IconButton,
  Input,
  ListSubheader,
  MenuItem,
  Select,
  Tooltip,
  Typography,
} from '@material-ui/core';
import { AddCircle } from '@material-ui/icons';
import React from 'react';
import { useAppDispatch } from '../../../hooks/reduxHooks';
import useOpen from '../../../hooks/useOpen';
import { addTrait } from '../../../store/rosterSlice';
import { CommanderState, TraitData } from '../../../store/types';

const getTraitSelections = (traitData: TraitData, commander: CommanderState) => {
  const elements: JSX.Element[] = [];
  let category = '';
  Object.values(traitData).map((trait) => {
    if (trait.category !== category) {
      category = trait.category;
      elements.push(
        <ListSubheader key={trait.name + 'header'}>
          <Typography
            key={trait.name + 'headertypo'}
            color="secondary"
            variant="overline"
          >
            {category}
          </Typography>
        </ListSubheader>
      );
    }
    elements.push(
      <MenuItem key={trait.name + 'menuitem'} value={trait.name}>
        <Tooltip key={trait.name} title={trait.description}>
          <Typography
            key={trait.name + 'menutypo'}
            color={
              commander.commanderTraits.indexOf(trait.name) > -1 ? 'primary' : 'inherit'
            }
          >
            {trait.name}
          </Typography>
        </Tooltip>
      </MenuItem>
    );
  });
  return elements;
};

const AddTraits: React.FC<{ commander: CommanderState; traitData: TraitData }> = ({
  commander,
  traitData,
}) => {
  const dispatch = useAppDispatch();
  const [open, handleOpen, handleClose] = useOpen();

  const handleChange = (e: React.ChangeEvent<{ value: unknown }>) =>
    dispatch(addTrait([...(e.target.value as string[])]));

  return (
    <Box textAlign="center">
      <Typography variant="subtitle2" style={{ marginTop: 5 }}>
        Add traits
      </Typography>
      <IconButton onClick={handleOpen}>
        <AddCircle />
      </IconButton>
      <FormControl style={{ marginTop: 0, width: 0, height: 0 }}>
        <Select
          open={open}
          onClose={handleClose}
          onOpen={handleOpen}
          IconComponent={() => <Box />}
          multiple
          value={commander.commanderTraits}
          onChange={handleChange}
          input={<Input />}
          renderValue={() => ' '}
        >
          {getTraitSelections(traitData, commander)}
        </Select>
      </FormControl>
    </Box>
  );
};

export default AddTraits;
