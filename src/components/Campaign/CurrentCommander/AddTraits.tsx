import { AddCircle } from '@mui/icons-material';
import {
  Box,
  FormControl,
  IconButton,
  Input,
  ListItemText,
  ListSubheader,
  MenuItem,
  Select,
  SelectChangeEvent,
  Tooltip,
  Typography,
} from '@mui/material';
import React, { useMemo } from 'react';
import { useAppDispatch, useAppSelector } from '../../../hooks/reduxHooks';
import useOpen from '../../../hooks/useOpen';
import { addTrait } from '../../../store/rosterSlice';
import { CommanderState, TraitData } from '../../../store/types';

const getTraitSelections = (
  traitData: TraitData,
  commanderTraits: string[],
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
      <MenuItem key={name} value={name} dense sx={{ maxWidth: 400 }}>
        <Tooltip title={trait.description}>
          <ListItemText
            primary={name}
            secondary={inlineRules ? trait?.short || trait?.description || '' : ''}
            primaryTypographyProps={{
              variant: 'body2',
              color: commanderTraits.indexOf(name) > -1 ? 'primary' : 'inherit',
            }}
            secondaryTypographyProps={{ sx: { whiteSpace: 'normal' } }}
            sx={{ m: 0 }}
          />
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
  const inlineRules = useAppSelector((state) => state.ui.inlineRules);
  const traitSelections = useMemo(
    () => getTraitSelections(traitData, commander.commanderTraits, inlineRules),
    [traitData, commander.commanderTraits, inlineRules]
  );

  const handleChange = (e: SelectChangeEvent<string[]>) =>
    dispatch(addTrait([...(e.target.value as string[])]));

  return (
    <Box textAlign="center">
      <Typography variant="subtitle2">Add traits</Typography>
      <IconButton onClick={handleOpen} size="large">
        <AddCircle />
      </IconButton>
      <FormControl variant="standard" sx={{ mt: 0, width: 0, height: 0 }}>
        <Select
          variant="standard"
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
          {traitSelections}
        </Select>
      </FormControl>
    </Box>
  );
};

export default AddTraits;
