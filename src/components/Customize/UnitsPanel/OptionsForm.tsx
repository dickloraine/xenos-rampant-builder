import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from '@mui/material';
import React, { BaseSyntheticEvent } from 'react';
import { UseFormReturn } from 'react-hook-form';
import { useAppSelector } from '../../../hooks/reduxHooks';
import {
  FormContainer,
  MultiSelectElement,
  SelectElement,
  TextFieldElement,
} from '../../../libs/react-hook-form-mui';
import { RootState, UnitOption } from '../../../store/types';
import range from '../../../utils/range';
import StatManipulation from '../common/StatManipulation';

const OptionsForm: React.FC<{
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  formContext: UseFormReturn<UnitOption, any>;
  open: boolean;
  handleClose: () => void;
  handleAction: (newState: UnitOption) => void;
  rules: string[];
}> = ({ formContext, open, handleClose, handleAction, rules }) => {
  const specialRules = useAppSelector((state: RootState) => state.data.rulesData);
  const { handleSubmit, watch, setValue } = formContext;

  const handleSubmitWithoutPropagation = (e: BaseSyntheticEvent) => {
    e.preventDefault();
    e.stopPropagation();
    handleSubmit(handleAction)(e);
  };

  return (
    <Dialog onClose={handleClose} open={open}>
      <DialogTitle>Option</DialogTitle>
      <FormContainer
        formContext={formContext}
        handleSubmit={handleSubmitWithoutPropagation}
      >
        <DialogContent>
          {/* --------------------------------- Name -------------------------------- */}
          <TextFieldElement name="name" label="Name" type="text" required fullWidth />
          {/* -------------------------------- Points ------------------------------- */}
          <SelectElement
            name="points"
            label="Points"
            type="number"
            fullWidth
            options={range(-4, 6)}
          />
          {/* ----------------------------- Description ----------------------------- */}
          <TextFieldElement
            name="description"
            label="Description"
            type="text"
            required
            fullWidth
            multiline
          />
          <TextFieldElement
            name="short"
            label="Short description"
            type="text"
            fullWidth
            multiline
            sx={{ mb: 3 }}
          />
          {/* ----------------------------- Remove Rules ---------------------------- */}
          <MultiSelectElement
            name="remove"
            label="Remove Rules"
            fullWidth
            menuItems={[...rules]}
            sx={{ mb: 3 }}
          />
          {/* ------------------------------ Add Rules ------------------------------ */}
          <MultiSelectElement
            name="add"
            label="Add Rules"
            fullWidth
            menuItems={[...Object.keys(specialRules)]}
            sx={{ mb: 3 }}
          />
          {/* ------------------------------- Set Stats ----------------------------- */}
          <StatManipulation
            title="Set Stats"
            type="setStats"
            watch={watch}
            setValue={setValue}
          />
          {/* ----------------------------- Adjust Stats ---------------------------- */}
          <StatManipulation
            title="Adjust Stats"
            type="adjustStats"
            watch={watch}
            setValue={setValue}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button type="submit" color="primary">
            Okay
          </Button>
        </DialogActions>
      </FormContainer>
    </Dialog>
  );
};

export default OptionsForm;
