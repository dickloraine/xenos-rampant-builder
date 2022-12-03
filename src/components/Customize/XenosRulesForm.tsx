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
import { useSelector } from 'react-redux';
import { selectUnitNames } from 'store/dataSlice';
import { RootState, XenosRule } from 'store/types';
import range from 'utils/range';
import { CustomFormProps } from './CustomizeList';

function XenosRulesForm(props: CustomFormProps<XenosRule>) {
  const { open, handleClose, initialState, changeState, handleAction, validateName } =
    props;
  const rule = initialState;
  const units = useSelector((state: RootState) => selectUnitNames(state));

  return (
    <Dialog onClose={handleClose} open={open}>
      <DialogTitle>Xenos Rule</DialogTitle>
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
          label="Points"
          margin="normal"
          type="number"
          select
          SelectProps={{
            value: rule.points,
            onChange: (e) => changeState({ ...rule, points: e.target.value as number }),
          }}
        >
          {range(-4, 6).map((value) => (
            <MenuItem key={value} value={value}>
              {value}
            </MenuItem>
          ))}
        </TextField>
        <TextField
          label="Description"
          type="text"
          margin="normal"
          fullWidth
          multiline
          value={rule.description}
          onChange={(e) => changeState({ ...rule, description: e.target.value })}
        />
        <TextField
          label="Exclude&nbsp;Units"
          margin="normal"
          select
          SelectProps={{
            multiple: true,
            value: rule.exclude_units,
            onChange: (e) =>
              changeState({ ...rule, exclude_units: e.target.value as string[] }),
          }}
        >
          {units.map((name) => (
            <MenuItem key={name} value={name}>
              {name}
            </MenuItem>
          ))}
        </TextField>
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

export default XenosRulesForm;
