import { Box, TableContainer, Typography } from '@mui/material';
import { useState } from 'react';
import { useAppSelector } from '../../../hooks/reduxHooks';
import useOpen from '../../../hooks/useOpen';
import { getBattles } from '../../../store/rosterSlice';
import AddBattle from './AddBattle';
import BattleForm from './BattleForm';
import BattlesActionMenu from './BattlesActionMenu';
import BattlesView from './BattlesView';

export type BattleSelection = {
  commanderIndex: number;
  battleIndex: number;
};

const Battles = () => {
  const [open, handleOpen, handleClose] = useOpen();
  const [battles, battleSelections] = useAppSelector(getBattles);
  const [selected, setSelected] = useState<number>(-1);
  const [battleSelection, setBattleSelection] = useState<BattleSelection | null>(null);

  return (
    <Box marginTop="20px">
      <Typography variant="h4">Battles</Typography>
      <AddBattle setBattleSelection={setBattleSelection} handleOpen={handleOpen} />
      <TableContainer component={Box} marginTop="20px">
        <BattlesActionMenu
          battleSelections={battleSelections}
          selected={selected}
          setSelected={setSelected}
          setBattleSelection={setBattleSelection}
          handleOpen={handleOpen}
        />
        <BattlesView selected={selected} setSelected={setSelected} battles={battles} />
      </TableContainer>
      <BattleForm
        battleSelection={battleSelection}
        open={open}
        handleClose={handleClose}
      />
    </Box>
  );
};

export default Battles;
