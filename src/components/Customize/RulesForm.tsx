import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
} from '@material-ui/core';
import React from 'react';
import { Rule } from 'store/types';
import { CustomFormProps } from './CustomizeList';

function RulesForm(props: CustomFormProps<Rule>) {
  const { open, handleClose, initialState, changeState, handleAction, validateName } =
    props;
  const rule = initialState;

  return (
    <Dialog onClose={handleClose} open={open}>
      <DialogTitle>Rule</DialogTitle>
      <DialogContent>
        <TextField
          label="Name"
          type="text"
          margin="normal"
          fullWidth
          value={rule.name}
          onChange={(e) => changeState({ ...rule, name: e.target.value })}
          error={!validateName()}
          helperText="You have to choose a unique name!"
        />
        <TextField
          label="Description"
          type="text"
          margin="normal"
          fullWidth
          multiline
          value={rule.description}
          onChange={(e) => changeState({ ...rule, description: e.target.value })}
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

export default RulesForm;
