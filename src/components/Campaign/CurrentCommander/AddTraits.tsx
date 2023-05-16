import {
  Box,
  FormControl,
  IconButton,
  Input,
  ListItem,
  ListItemText,
  ListSubheader,
  Select,
  Tooltip,
  Typography,
} from '@material-ui/core';
import { AddCircle } from '@material-ui/icons';
import React from 'react';
import { useAppDispatch, useAppSelector } from '../../../hooks/reduxHooks';
import useOpen from '../../../hooks/useOpen';
import { addTrait } from '../../../store/rosterSlice';
import { CommanderState, TraitData } from '../../../store/types';

const getTraitSelections = (
  traitData: TraitData,
  commander: CommanderState,
  inlineRules: boolean
) => {
  const elements: JSX.Element[] = [];
  let category = '';

  Object.values(traitData).map((trait) => {
    const name = trait.name;

    if (trait.category !== category) {
      category = trait.category;
      elements.push(
        <ListSubheader key={name + 'header'} disableSticky>
          <Typography color="secondary" variant="overline">
            {category}
          </Typography>
        </ListSubheader>
      );
    }
    elements.push(
      <ListItem key={name} value={name} dense style={{ maxWidth: 400 }}>
        <Tooltip title={trait.description}>
          <ListItemText
            primary={name}
            secondary={
              inlineRules
                ? traitData[name]?.short || traitData[name]?.description || ''
                : ''
            }
            primaryTypographyProps={{
              variant: 'body2',
              color:
                commander.commanderTraits.indexOf(name) > -1 ? 'primary' : 'inherit',
            }}
            style={{ margin: 0 }}
          />
        </Tooltip>
      </ListItem>
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
  const inlineRules = useAppSelector((state) => state.ui.inlineRules);

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
          {getTraitSelections(traitData, commander, inlineRules)}
        </Select>
      </FormControl>
    </Box>
  );
};

export default AddTraits;
