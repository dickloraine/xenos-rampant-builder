import { yupResolver } from '@hookform/resolvers/yup';
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from '@mui/material';
import produce from 'immer';
import React, { BaseSyntheticEvent, useEffect } from 'react';
import { UseFormSetValue, UseFormWatch, useForm } from 'react-hook-form';
import { useAppSelector } from '../../../hooks/reduxHooks';
import {
  FormContainer,
  MultiSelectElement,
  SelectElement,
  TextFieldElement,
} from '../../../libs/react-hook-form-mui';
import { DataUnit, RootState, UnitOption } from '../../../store/types';
import range from '../../../utils/range';
import StatManipulation from '../common/StatManipulation';
import { unitOptionSchema } from './unitSchemas';

const OptionsForm: React.FC<{
  open: boolean;
  handleClose: () => void;
  option: UnitOption;
  watchUnit: UseFormWatch<DataUnit>;
  setValueUnit: UseFormSetValue<DataUnit>;
}> = ({ open, handleClose, option, watchUnit, setValueUnit }) => {
  const specialRules = useAppSelector((state: RootState) => state.data.rulesData);

  const validateName = (name: string): boolean =>
    Object.keys(watchUnit('options')).every(
      (dataName) => dataName === option.name || dataName !== name
    );

  const formContext = useForm<UnitOption>({
    resolver: yupResolver(unitOptionSchema),
    context: { validateName: validateName },
    defaultValues: { ...option },
  });
  const { reset, watch, setValue, handleSubmit } = formContext;

  useEffect(() => {
    if (open) {
      reset({ ...option });
    }
  }, [reset, open, option]);

  const handleSubmitWithoutPropagation = (e: BaseSyntheticEvent) => {
    e.preventDefault();
    e.stopPropagation();
    handleSubmit(handleAction)(e);
  };

  const handleAction = (newOption: UnitOption) => {
    if (newOption.name !== option.name) {
      setValueUnit(
        'options',
        produce(watchUnit('options'), (draft) => {
          delete draft[option.name];
        })
      );
    }
    setValueUnit('options', { ...watchUnit('options'), [newOption.name]: newOption });
    handleClose();
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
            menuItems={[...watchUnit('rules')]}
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
