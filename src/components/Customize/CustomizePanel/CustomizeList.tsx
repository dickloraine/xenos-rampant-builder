import { yupResolver } from '@hookform/resolvers/yup';
import React, { useState } from 'react';
import { UseFormReturn, useForm } from 'react-hook-form';
import * as yup from 'yup';
import useOpen from '../../../hooks/useOpen';
import { CustomDataElement } from '../../../store/types';
import { ListWithItemActions } from '../../ListWithItemActions';

export interface CustomFormProps<T extends CustomDataElement> {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  formContext: UseFormReturn<T, any>;
  open: boolean;
  handleClose: () => void;
  handleAction: (data: T) => void;
}

export interface CustomizeListProps<T extends CustomDataElement> {
  data: { [name: string]: T };
  CustomForm: React.FC<CustomFormProps<T>>;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  schema: yup.ObjectSchema<any>;
  emptyState: T;
  removeFunc: (name: string) => void;
  addFunc: (newState: T) => void;
}

function CustomizeList<T extends CustomDataElement>(props: CustomizeListProps<T>) {
  const { data, CustomForm, schema, emptyState, removeFunc, addFunc } = props;
  const [originalName, setOriginalName] = useState('');
  const [open, handleOpen, handleClose] = useOpen();

  const validateName = (name: string): boolean =>
    name !== '' &&
    Object.keys(data).every(
      (dataName) => dataName === originalName || dataName !== name
    );

  const formContext = useForm<T>({
    resolver: yupResolver(schema),
    context: { validateName: validateName },
  });
  const { reset } = formContext;

  const handleAction = (data: T) => {
    if (data.name !== originalName) {
      removeFunc(originalName);
    }
    addFunc(data);
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

  return (
    <>
      <ListWithItemActions
        data={data}
        handleClickActionOne={handleEdit}
        handleClickActionTwo={removeFunc}
        handleClickSpecialAction={handleAdd}
      />
      <CustomForm
        formContext={formContext}
        open={open}
        handleClose={handleClose}
        handleAction={handleAction}
      />
    </>
  );
}

export default CustomizeList;
