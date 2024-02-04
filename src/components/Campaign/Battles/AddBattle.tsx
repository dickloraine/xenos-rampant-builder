import { Box, Button } from '@mui/material';
import { BattleSelection } from './Battles';

const AddBattle = ({
  setBattleSelection,
  handleOpen,
}: {
  setBattleSelection: React.Dispatch<React.SetStateAction<BattleSelection | null>>;
  handleOpen: () => void;
}) => {
  return (
    <Box marginTop="20px">
      <Button
        onClick={() => {
          setBattleSelection(null);
          handleOpen();
        }}
        variant="contained"
        color="secondary"
      >
        Add battle
      </Button>
    </Box>
  );
};

export default AddBattle;
