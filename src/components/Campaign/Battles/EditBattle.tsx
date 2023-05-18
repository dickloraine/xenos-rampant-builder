import { Edit } from '@mui/icons-material';
import { IconButton } from '@mui/material';
import React from 'react';
import { useAppDispatch, useAppSelector } from '../../../hooks/reduxHooks';
import useOpen from '../../../hooks/useOpen';
import { editBattle } from '../../../store/rosterSlice';
import { CommanderBattle } from '../../../store/types';
import BattleForm from './BattleForm';
import { BattleSelection } from './BattlesView';

const EditBattle: React.FC<{ battleSelection: BattleSelection }> = ({
  battleSelection,
}) => {
  const oldBattle = useAppSelector(
    (state) =>
      state.roster.campaign?.commanders[battleSelection.commanderIndex].battles[
        battleSelection.battleIndex
      ]
  );
  const dispatch = useAppDispatch();
  const [open, handleOpen, handleClose] = useOpen();

  return (
    <>
      <IconButton onClick={handleOpen} size="large">
        <Edit sx={{ color: 'secondary.contrastText' }} />
      </IconButton>
      <BattleForm
        title="Edit Battle"
        onSubmit={(battle: CommanderBattle) =>
          dispatch(editBattle(battle, battleSelection))
        }
        open={open}
        handleClose={handleClose}
        initialBattle={oldBattle}
      />
    </>
  );
};

export default EditBattle;
