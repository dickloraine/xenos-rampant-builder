import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
} from '@material-ui/core';
import React from 'react';

export interface CommanderBattleForm {
  enemy: string;
  victoryPoints: string;
  enemyVictoryPoints: string;
  careerPointsGained: string;
  date: string;
}

export const initialBattleForm: CommanderBattleForm = {
  enemy: '',
  victoryPoints: '0',
  enemyVictoryPoints: '0',
  careerPointsGained: '0',
  date: new Date().toISOString().slice(0, 10).replace(/-/g, '-'),
};

const BattleForm: React.FC<{
  title: string;
  battle: CommanderBattleForm;
  setBattle: React.Dispatch<React.SetStateAction<CommanderBattleForm>>;
  handleSubmit: () => void;
  open: boolean;
  handleClose: () => void;
}> = ({ title, battle, setBattle, handleSubmit, open, handleClose }) => {
  const validations = {
    enemyVictoryPoints: () =>
      !isNaN(Number(battle.enemyVictoryPoints)) ||
      Number(battle.enemyVictoryPoints) < 0,
    victoryPoints: () =>
      !isNaN(Number(battle.victoryPoints)) || Number(battle.victoryPoints) < 0,
    careerPointsGained: () => !isNaN(Number(battle.careerPointsGained)),
  };

  const validateAll = () => Object.values(validations).every((func) => func());

  return (
    <Dialog onClose={handleClose} open={open}>
      <DialogTitle>{title}</DialogTitle>
      <DialogContent>
        <TextField
          id="date"
          label="Date"
          type="date"
          margin="normal"
          value={battle.date}
          onChange={(e) => setBattle({ ...battle, date: e.target.value })}
        />
        <TextField
          id="enemy"
          label="Enemy"
          type="text"
          margin="normal"
          fullWidth
          value={battle.enemy}
          onChange={(e) => setBattle({ ...battle, enemy: e.target.value })}
        />
        <TextField
          id="enemyvp"
          label="Enemy victory points"
          error={!validations.enemyVictoryPoints()}
          type="text"
          margin="normal"
          fullWidth
          value={battle.enemyVictoryPoints}
          onChange={(e) =>
            setBattle({
              ...battle,
              enemyVictoryPoints: e.target.value,
            })
          }
        />
        <TextField
          id="vp"
          label="Victory points"
          error={!validations.victoryPoints()}
          type="text"
          margin="normal"
          fullWidth
          value={battle.victoryPoints}
          onChange={(e) =>
            setBattle({
              ...battle,
              victoryPoints: e.target.value,
            })
          }
        />
        <TextField
          id="vp"
          label="Career points"
          error={!validations.careerPointsGained()}
          type="text"
          margin="normal"
          fullWidth
          value={battle.careerPointsGained}
          onChange={(e) =>
            setBattle({
              ...battle,
              careerPointsGained: e.target.value,
            })
          }
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} color="primary">
          Cancel
        </Button>
        <Button onClick={handleSubmit} color="primary" disabled={!validateAll()}>
          Okay
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default BattleForm;
