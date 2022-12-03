import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  MenuItem,
  TextField,
} from '@material-ui/core';
import React from 'react';
import { Spell } from 'store/types';
import range from 'utils/range';
import { CustomFormProps } from './CustomizeList';

function SpellsForm(props: CustomFormProps<Spell>) {
  const { open, handleClose, initialState, changeState, handleAction, validateName } =
    props;
  const spell = initialState;

  return (
    <Dialog onClose={handleClose} open={open}>
      <DialogTitle>Spell</DialogTitle>
      <DialogContent>
        <TextField
          label="Name"
          type="text"
          margin="normal"
          fullWidth
          value={spell.name}
          onChange={(e) => changeState({ ...spell, name: e.target.value })}
          error={!validateName()}
          helperText="You have to choose a unique name!"
        />
        <TextField
          label="Difficulty"
          type="number"
          margin="normal"
          select
          SelectProps={{
            value: spell.difficulty,
            onChange: (e) =>
              changeState({ ...spell, difficulty: e.target.value as number }),
          }}
        >
          {range(2, 12).map((value) => (
            <MenuItem key={value} value={value}>
              {value}
            </MenuItem>
          ))}
        </TextField>
        <TextField
          label="Target"
          type="text"
          margin="normal"
          fullWidth
          value={spell.target}
          onChange={(e) => changeState({ ...spell, target: e.target.value })}
        />
        <TextField
          label="Duration"
          type="text"
          margin="normal"
          fullWidth
          value={spell.duration}
          onChange={(e) => changeState({ ...spell, duration: e.target.value })}
        />
        <TextField
          label="Effekt"
          type="text"
          margin="normal"
          fullWidth
          multiline
          value={spell.effect}
          onChange={(e) => changeState({ ...spell, effect: e.target.value })}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} color="primary">
          Cancel
        </Button>
        <Button onClick={handleAction} color="primary" disabled={!validateName()}>
          Okay
        </Button>
      </DialogActions>
    </Dialog>
  );
}

export default SpellsForm;
