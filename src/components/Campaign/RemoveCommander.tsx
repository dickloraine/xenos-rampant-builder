import { Box, Button } from '@material-ui/core';
import { useAppDispatch } from '../../hooks/reduxHooks';
import useConfirmation from '../../hooks/useConfirmation';
import { addCommander, addRetirement } from '../../store/rosterSlice';

const RemoveCommander = () => {
  const dispatch = useAppDispatch();
  const [Confirmation, confirm] = useConfirmation();

  const killCommander = async () => {
    const res = await confirm('Killing a commander is permanent!');
    if (res) dispatch(addCommander());
  };

  const retireCommander = async () => {
    const res = await confirm('Retiring a commander is permanent!');
    if (res) {
      dispatch(addRetirement());
      dispatch(addCommander());
    }
  };

  return (
    <Box display="flex" justifyContent="flex-end" textAlign="center">
      <Button
        color="secondary"
        size="small"
        variant="outlined"
        onClick={retireCommander}
        aria-label="Kill commander"
        style={{ marginRight: 20 }}
      >
        Retire
      </Button>
      <Button
        color="secondary"
        size="small"
        variant="outlined"
        onClick={killCommander}
        aria-label="Kill commander"
      >
        Kill
      </Button>
      <Confirmation />
    </Box>
  );
};

export default RemoveCommander;
