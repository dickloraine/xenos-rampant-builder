import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  InputLabel,
} from '@mui/material';
import produce from 'immer';
// import { FormContainer, MultiSelectElement } from 'react-hook-form-mui';
import { useAppSelector } from '../../../hooks/reduxHooks';
import {
  FormContainer,
  MultiSelectElement,
  SelectElement,
  TextFieldElement,
} from '../../../libs/react-hook-form-mui';
import { DataUnit, RootState, UnitOption } from '../../../store/types';
import range from '../../../utils/range';
import useCustomizeForm, { CustomFormProps } from '../common/useCustomizeForm';
import OptionsForm from './OptionsForm';
import UnitsFormStats from './UnitsFormStats';
import { emptyOption, unitOptionSchema } from './unitSchemas';

const activations = [
  { id: 'attack', title: 'Attack' },
  { id: 'move', title: 'Move' },
  { id: 'shoot', title: 'Shoot' },
];

function UnitsForm(props: CustomFormProps<DataUnit>) {
  const { formContext, open, handleClose, handleAction } = props;
  const { watch, getValues, setValue } = formContext;
  const rules = useAppSelector((state: RootState) => state.data.rulesData);

  const deleteOption = (name: string) => {
    setValue(
      'options',
      produce(getValues('options'), (draft) => {
        delete draft[name];
      })
    );
  };

  const addOption = (newOption: UnitOption) =>
    setValue('options', { ...getValues('options'), [newOption.name]: newOption });

  const { ElementsList, ...optionsFormProps } = useCustomizeForm<UnitOption>(
    watch('options'),
    unitOptionSchema,
    emptyOption,
    deleteOption,
    addOption
  );

  return (
    <Dialog open={open}>
      <FormContainer formContext={formContext} onSuccess={handleAction}>
        <DialogTitle>Unit</DialogTitle>
        <DialogContent>
          {/* --------------------------------- Name -------------------------------- */}
          <TextFieldElement name="name" label="Name" type="text" required fullWidth />
          {/* -------------------------------- Points ------------------------------- */}
          <SelectElement
            name="points"
            label="Points"
            type="number"
            fullWidth
            options={range(1, 10)}
          />
          {/* --------------------------- Strength Points --------------------------- */}
          <SelectElement
            name="stats.strengthPoints"
            label="Strength&nbsp;Points"
            type="number"
            fullWidth
            options={[5, 10]}
          />
          {/* -------------------------------- Stats -------------------------------- */}
          <UnitsFormStats />
          {/* -------------------------- Free Activations --------------------------- */}
          <MultiSelectElement
            name="freeActivations"
            label="Free Activations"
            fullWidth
            sx={{ mb: 2 }}
            valueKey="id"
            labelKey="title"
            menuItems={[...activations]}
          />
          {/* -------------------------------- Rules -------------------------------- */}
          <MultiSelectElement
            name="rules"
            label="Rules"
            fullWidth
            sx={{ mb: 2 }}
            menuItems={[...Object.keys(rules)]}
          />
          {/* ------------------------------- Options ------------------------------- */}
          <InputLabel id="options-label">Options</InputLabel>
          <ElementsList />
          <OptionsForm {...optionsFormProps} rules={watch('rules')} />
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
}

export default UnitsForm;
