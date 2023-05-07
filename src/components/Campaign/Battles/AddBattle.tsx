import { Box, Button } from '@material-ui/core';
import React from 'react';
import { useAppDispatch } from '../../../hooks/reduxHooks';
import useOpen from '../../../hooks/useOpen';
import { addBattle } from '../../../store/rosterSlice';
import BattleForm, { CommanderBattleForm, initialBattleForm } from './BattleForm';

const AddBattle = () => {
  const [battle, setBattle] = React.useState<CommanderBattleForm>({
    ...initialBattleForm,
  });
  const [open, handleOpen, handleClose] = useOpen(false, () =>
    setBattle({ ...initialBattleForm })
  );
  const dispatch = useAppDispatch();

  const handleSubmit = () => {
    dispatch(
      addBattle({
        enemy: battle.enemy,
        victoryPoints: Number(battle.victoryPoints),
        enemyVictoryPoints: Number(battle.enemyVictoryPoints),
        careerPointsGained: Number(battle.careerPointsGained),
        date: battle.date,
      })
    );
    handleClose();
  };

  return (
    <Box marginTop="20px">
      <Button onClick={handleOpen} variant="contained" color="secondary">
        Add battle
      </Button>
      <BattleForm
        title="New Battle"
        battle={battle}
        setBattle={setBattle}
        handleSubmit={handleSubmit}
        open={open}
        handleClose={handleClose}
      />
    </Box>
  );
};

export default AddBattle;
