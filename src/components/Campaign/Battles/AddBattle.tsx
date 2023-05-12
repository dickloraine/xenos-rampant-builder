import { Box, Button } from '@material-ui/core';
import { useAppDispatch } from '../../../hooks/reduxHooks';
import useOpen from '../../../hooks/useOpen';
import { addBattle } from '../../../store/rosterSlice';
import { CommanderBattle } from '../../../store/types';
import BattleForm from './BattleForm';

const AddBattle = () => {
  const dispatch = useAppDispatch();
  const [open, handleOpen, handleClose] = useOpen();

  return (
    <Box marginTop="20px">
      <Button onClick={handleOpen} variant="contained" color="secondary">
        Add battle
      </Button>
      <BattleForm
        title="New Battle"
        onSubmit={(battle: CommanderBattle) => dispatch(addBattle(battle))}
        open={open}
        handleClose={handleClose}
      />
    </Box>
  );
};

export default AddBattle;
