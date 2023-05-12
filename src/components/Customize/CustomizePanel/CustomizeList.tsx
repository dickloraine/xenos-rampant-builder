import React, { useState } from 'react';
import useOpen from '../../../hooks/useOpen';
import { CustomDataElement } from '../../../store/types';
import { ListWithItemActions } from '../../ListWithItemActions';

export interface CustomFormProps<T extends CustomDataElement> {
  open: boolean;
  handleClose: () => void;
  initialState: T;
  handleAction: (data: T) => void;
  validateName: (name: string) => boolean;
}

export interface CustomizeListProps<T extends CustomDataElement> {
  data: { [name: string]: T };
  CustomForm: React.FC<CustomFormProps<T>>;
  emptyState: T;
  removeFunc: (name: string) => void;
  addFunc: (newState: T) => void;
}

function CustomizeList<T extends CustomDataElement>(props: CustomizeListProps<T>) {
  const { data, CustomForm, emptyState, removeFunc, addFunc } = props;
  const [open, handleOpen, handleClose] = useOpen();
  const [state, setstate] = useState(emptyState);
  const [originalName, setOriginalName] = useState('');

  const validateName = (name: string): boolean =>
    name !== '' &&
    Object.keys(data).every(
      (dataName) => dataName === originalName || dataName !== name
    );

  const handleAction = (data: T) => {
    if (data.name !== originalName) {
      removeFunc(originalName);
    }
    if (validateName(data.name)) {
      addFunc(data);
      handleClose();
    }
  };

  const handleEdit = (name: string) => {
    setstate(data[name]);
    setOriginalName(name);
    handleOpen();
  };

  const handleAdd = () => {
    setstate(emptyState);
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
        open={open}
        handleClose={handleClose}
        handleAction={handleAction}
        initialState={state}
        validateName={validateName}
      />
    </>
  );
}

export default CustomizeList;
