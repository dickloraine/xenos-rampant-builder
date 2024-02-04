import { DeleteForever, Edit } from '@mui/icons-material';
import { Box, IconButton, Typography } from '@mui/material';
import { useAppDispatch } from '../../../hooks/reduxHooks';
import { removeBattle } from '../../../store/rosterSlice';
import { BattleSelection } from './Battles';

const selectionMenuClass = {
  backgroundColor: 'secondary.main',
  color: 'secondary.contrastText',
  paddingLeft: '20px',
  width: '100%',
  height: {
    xs: '37px',
    md: '57px',
  },
  display: 'flex',
  alignItems: 'center',
  gap: '20px',
};

const BattlesActionMenu = ({
  battleSelections,
  selected,
  setSelected,
  setBattleSelection,
  handleOpen,
}: {
  battleSelections: BattleSelection[];
  selected: number;
  setSelected: React.Dispatch<React.SetStateAction<number>>;
  setBattleSelection: React.Dispatch<React.SetStateAction<BattleSelection | null>>;
  handleOpen: () => void;
}) => {
  const dispatch = useAppDispatch();

  if (selected < 0) return null;

  const battleSelection = {
    commanderIndex: battleSelections[selected].commanderIndex,
    battleIndex: battleSelections[selected].battleIndex,
  };

  return (
    <Box sx={selectionMenuClass}>
      <Typography>Actions</Typography>
      <Box flexGrow={1}></Box>
      <IconButton
        onClick={() => {
          dispatch(removeBattle(battleSelection));
          setSelected(-1);
        }}
        size="large"
      >
        <DeleteForever sx={{ color: 'secondary.contrastText' }} />
      </IconButton>
      <IconButton
        onClick={() => {
          setBattleSelection(battleSelection);
          handleOpen();
        }}
        size="large"
      >
        <Edit sx={{ color: 'secondary.contrastText' }} />
      </IconButton>
    </Box>
  );
};

export default BattlesActionMenu;
