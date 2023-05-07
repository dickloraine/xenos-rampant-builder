import { IconButton, Theme, makeStyles } from '@material-ui/core';
import { Edit } from '@material-ui/icons';
import React from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks/reduxHooks';
import useOpen from '../../hooks/useOpen';
import { editBattle } from '../../store/rosterSlice';
import BattleForm, { CommanderBattleForm, initialBattleForm } from './BattleForm';
import { BattleSelection } from './BattlesView';

const useStyles = makeStyles((theme: Theme) => ({
  icon: {
    color: theme.palette.secondary.contrastText,
  },
}));

const EditBattle: React.FC<{ battleSelection: BattleSelection }> = ({
  battleSelection,
}) => {
  const oldBattle = useAppSelector(
    (state) =>
      state.roster.campaign?.commanders[battleSelection.commanderIndex].battles[
        battleSelection.battleIndex
      ]
  );
  const [battle, setBattle] = React.useState<CommanderBattleForm>({
    ...initialBattleForm,
  });
  const [open, handleOpen, handleClose] = useOpen(false, () =>
    setBattle(
      oldBattle
        ? {
            enemy: oldBattle.enemy,
            victoryPoints: String(oldBattle.victoryPoints),
            enemyVictoryPoints: String(oldBattle.enemyVictoryPoints),
            careerPointsGained: String(oldBattle.careerPointsGained),
            date: oldBattle?.date,
          }
        : { ...initialBattleForm }
    )
  );
  const dispatch = useAppDispatch();
  const classes = useStyles();

  const handleSubmit = () => {
    dispatch(
      editBattle(
        {
          enemy: battle.enemy,
          victoryPoints: Number(battle.victoryPoints),
          enemyVictoryPoints: Number(battle.enemyVictoryPoints),
          careerPointsGained: Number(battle.careerPointsGained),
          date: battle.date,
        },
        battleSelection
      )
    );
    handleClose();
  };

  return (
    <>
      <IconButton onClick={handleOpen}>
        <Edit className={classes.icon} />
      </IconButton>
      <BattleForm
        title="Edit battle"
        battle={battle}
        setBattle={setBattle}
        handleSubmit={handleSubmit}
        open={open}
        handleClose={handleClose}
      />
    </>
  );
};

export default EditBattle;
