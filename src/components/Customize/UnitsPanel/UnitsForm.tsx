import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  InputLabel,
} from '@mui/material';
import produce from 'immer';
import { useState } from 'react';
// import { FormContainer, MultiSelectElement } from 'react-hook-form-mui';
import { useAppSelector } from '../../../hooks/reduxHooks';
import useOpen from '../../../hooks/useOpen';
import {
  FormContainer,
  MultiSelectElement,
  SelectElement,
  TextFieldElement,
} from '../../../libs/react-hook-form-mui';
import { DataUnit, RootState, UnitOption } from '../../../store/types';
import range from '../../../utils/range';
import { ListWithItemActions } from '../../ListWithItemActions';
import { CustomFormProps } from '../CustomizePanel/CustomizeList';
import OptionsForm from './OptionsForm';
import UnitsFormStats from './UnitsFormStats';
import { emptyOption } from './unitSchemas';

const activations = [
  { id: 'attack', title: 'Attack' },
  { id: 'move', title: 'Move' },
  { id: 'shoot', title: 'Shoot' },
];

function UnitsForm(props: CustomFormProps<DataUnit>) {
  const { formContext, open, handleClose, handleAction } = props;
  const { watch, setValue } = formContext;
  const rules = useAppSelector((state: RootState) => state.data.rulesData);
  const [optionsOpen, handleOpenOptions, handleCloseOptions] = useOpen();
  const [currentOption, setCurrentOption] = useState<UnitOption>({ ...emptyOption });

  const handleOptionsSubmit = (option: UnitOption) => {
    setValue('options', { ...watch('options'), [option.name]: option });
  };

  const handleOptionEdit = (name: string) => {
    setCurrentOption(watch('options')[name]);
    handleOpenOptions();
  };

  const handleOptionDelete = (name: string) => {
    setValue(
      'options',
      produce(watch('options'), (draft) => {
        delete draft[name];
      })
    );
  };

  const handleOptionAdd = () => {
    setCurrentOption(emptyOption);
    handleOpenOptions();
  };

  return (
    <Dialog open={open}>
      <FormContainer formContext={formContext} onSuccess={handleAction}>
        <DialogTitle>Unit</DialogTitle>
        <DialogContent>
          {/* --------------------------------- Name -------------------------------- */}
          <TextFieldElement name="name" label="Name" type="text" fullWidth />
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
          <ListWithItemActions
            data={watch('options')}
            handleClickActionOne={handleOptionEdit}
            handleClickActionTwo={handleOptionDelete}
            handleClickSpecialAction={handleOptionAdd}
          />
          <OptionsForm
            open={optionsOpen}
            handleClose={handleCloseOptions}
            option={currentOption}
            rules={watch('rules')}
            onSubmit={handleOptionsSubmit}
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
}

export default UnitsForm;
