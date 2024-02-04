import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from '@mui/material';
import React from 'react';
import { FormContainer, TextFieldElement } from '../../../libs/react-hook-form-mui';
import { BattleSelection } from './Battles';
import useBattleForm from './useBattleForm';

const BattleForm: React.FC<{
  battleSelection: BattleSelection | null;
  open: boolean;
  handleClose: () => void;
}> = ({ battleSelection, open, handleClose }) => {
  const [formContext, onSuccess, title] = useBattleForm(
    battleSelection,
    open,
    handleClose
  );

  return (
    <Dialog onClose={handleClose} open={open}>
      <DialogTitle>{title}</DialogTitle>
      <FormContainer formContext={formContext} onSuccess={onSuccess}>
        <DialogContent>
          <TextFieldElement name="date" label="Date" type="date" />
          <TextFieldElement name="enemy" label="enemy" type="text" fullWidth />
          <TextFieldElement
            name="enemyVictoryPoints"
            label="Enemy victory points"
            type="number"
            fullWidth
          />
          <TextFieldElement
            name="victoryPoints"
            label="Victory points"
            type="number"
            fullWidth
          />
          <TextFieldElement
            name="careerPointsGained"
            label="Career points"
            type="number"
            fullWidth
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button type="submit" color="primary">
            Okay
          </Button>
        </DialogActions>
      </FormContainer>
    </Dialog>
  );
};

export default BattleForm;
