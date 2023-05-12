import { yupResolver } from '@hookform/resolvers/yup';
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  InputLabel,
} from '@material-ui/core';
import produce from 'immer';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
// import { FormContainer, MultiSelectElement } from 'react-hook-form-mui';
import { useSelector } from 'react-redux';
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
import { dataUnitSchema, emptyOption } from './unitSchemas';

const activations = [
  { id: 'attack', title: 'Attack' },
  { id: 'move', title: 'Move' },
  { id: 'shoot', title: 'Shoot' },
];

function UnitsForm(props: CustomFormProps<DataUnit>) {
  const { open, handleClose, initialState, handleAction, validateName } = props;
  const formContext = useForm<DataUnit>({
    resolver: yupResolver(dataUnitSchema),
    defaultValues: { ...initialState },
  });
  const { reset, watch, setValue } = formContext;
  const rules = useSelector((state: RootState) => state.data.rulesData);
  const [optionsOpen, handleOpenOptions, handleCloseOptions] = useOpen();
  const [currentOption, setCurrentOption] = useState<UnitOption>({ ...emptyOption });

  useEffect(() => {
    if (open) {
      reset({ ...initialState });
    }
  }, [reset, open, initialState]);

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
          <TextFieldElement
            name="name"
            label="Name"
            type="text"
            margin="normal"
            fullWidth
            customError={(name) => !validateName(name)}
          />
          {/* -------------------------------- Points ------------------------------- */}
          <SelectElement
            name="points"
            label="Points"
            margin="normal"
            type="number"
            fullWidth
            options={range(1, 10)}
          />
          {/* --------------------------- Strength Points --------------------------- */}
          <SelectElement
            name="stats.strengthPoints"
            label="Strength&nbsp;Points"
            margin="normal"
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
            style={{ marginBottom: 15 }}
            valueKey="id"
            labelKey="title"
            menuItems={[...activations]}
          />
          {/* -------------------------------- Rules -------------------------------- */}
          <MultiSelectElement
            name="rules"
            label="Rules"
            fullWidth
            style={{ marginBottom: 15 }}
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
