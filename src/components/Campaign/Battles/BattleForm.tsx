import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from '@material-ui/core';
import React from 'react';
import { FormContainer, TextFieldElement } from '../../../libs/react-hook-form-mui';
import { CommanderBattle } from '../../../store/types';
import useBattleForm from './useBattleForm';

const BattleForm: React.FC<{
  title: string;
  onSubmit: (battle: CommanderBattle) => void;
  open: boolean;
  handleClose: () => void;
  initialBattle?: CommanderBattle;
}> = ({ title, onSubmit, open, handleClose, initialBattle }) => {
  const [formContext, onSuccess] = useBattleForm(
    onSubmit,
    open,
    handleClose,
    initialBattle
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
