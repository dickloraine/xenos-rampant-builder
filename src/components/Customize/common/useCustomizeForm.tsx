import { yupResolver } from '@hookform/resolvers/yup';
import { useState } from 'react';
import { UseFormReturn, useForm } from 'react-hook-form';
import * as yup from 'yup';
import useOpen from '../../../hooks/useOpen';
import { CustomDataElement, UnitOption } from '../../../store/types';
import { ListWithItemActions } from '../../ListWithItemActions';

export interface CustomFormProps<T extends CustomDataElement | UnitOption> {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  formContext: UseFormReturn<T, any>;
  open: boolean;
  handleClose: () => void;
  handleAction: (data: T) => void;
}

const useCustomizeForm = <T extends CustomDataElement | UnitOption>(
  data: { [name: string]: T },
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  schema: yup.ObjectSchema<any>,
  emptyState: T,
  removeFunc: (name: string) => void,
  addFunc: (newState: T) => void
): CustomFormProps<T> & { ElementsList: () => JSX.Element } => {
  const [originalName, setOriginalName] = useState('');
  const [open, handleOpen, handleClose] = useOpen();

  const validateName = (name: string): boolean =>
    Object.keys(data).every(
      (dataName) => dataName === originalName || dataName !== name
    );

  const formContext = useForm<T>({
    resolver: yupResolver(schema),
    context: { validateName: validateName },
  });
  const { reset } = formContext;

  const handleAction = (newState: T) => {
    if (newState.name !== originalName) {
      removeFunc(originalName);
    }
    addFunc(newState);
    handleClose();
  };

  const handleEdit = (name: string) => {
    reset({ ...data[name] });
    setOriginalName(name);
    handleOpen();
  };

  const handleAdd = () => {
    reset({ ...emptyState });
    setOriginalName('');
    handleOpen();
  };

  const ElementsList = () => (
    <ListWithItemActions
      data={data}
      handleClickActionOne={handleEdit}
      handleClickActionTwo={removeFunc}
      handleClickSpecialAction={handleAdd}
    />
  );

  return { ElementsList, formContext, handleAction, open, handleClose };
};

export default useCustomizeForm;
