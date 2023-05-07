import {
  Button,
  Chip,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
  Typography,
} from '@material-ui/core';
import { Edit } from '@material-ui/icons';
import React from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks/reduxHooks';
import useOpen from '../../hooks/useOpen';
import { adjustCareerPoints } from '../../store/rosterSlice';
import { CommanderState } from '../../store/types';
import calculateCareerPoints from './calculateCareerPoints';

const CareerPoints: React.FC<{ commander: CommanderState }> = ({ commander }) => {
  const dispatch = useAppDispatch();
  const traitData = useAppSelector((state) => state.data.traitData);
  const [adjustment, setAdjustment] = React.useState<string>('0');
  const [open, handleOpen, handleClose] = useOpen(false, () =>
    setAdjustment(String(commander.careerPointAdjustment))
  );

  const careerPoints = calculateCareerPoints(commander, traitData);

  const validate = () => !isNaN(Number(adjustment));

  const handleSubmit = () => {
    dispatch(adjustCareerPoints(Number(adjustment)));
    handleClose();
  };

  return (
    <>
      <Chip
        label="Career Points "
        color="primary"
        icon={<Typography>{careerPoints}</Typography>}
        onDelete={handleOpen}
        deleteIcon={<Edit />}
      />
      <Dialog onClose={handleClose} open={open}>
        <DialogTitle>Set career point adjustment</DialogTitle>
        <DialogContent>
          <TextField
            id="enemyvp"
            label="Enemy victory points"
            error={!validate()}
            type="text"
            margin="normal"
            fullWidth
            value={adjustment}
            onChange={(e) => setAdjustment(e.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleSubmit} color="primary" disabled={!validate()}>
            Okay
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default React.memo(CareerPoints);
