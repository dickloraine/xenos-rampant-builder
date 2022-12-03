import useOpen from 'hooks/useOpen';
import React, { useState } from 'react';
import { CustomDataElement } from 'store/types';
import { ListWithItemActions } from '../ListWithItemActions';

export interface CustomFormProps<T extends CustomDataElement> {
  open: boolean;
  handleClose: () => void;
  initialState: T;
  changeState: React.Dispatch<React.SetStateAction<T>>;
  handleAction: () => void;
  validateName: () => boolean;
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
  const [open, handleOpen, handleClose] = useOpen(false);
  const [state, setstate] = useState(emptyState);
  const [originalName, setOriginalName] = useState('');

  const validateName = (): boolean =>
    state.name !== '' &&
    Object.keys(data).every((name) => name === originalName || name !== state.name);

  const handleAction = () => {
    if (state.name !== originalName) {
      removeFunc(originalName);
    }
    if (validateName()) {
      addFunc(state);
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
        changeState={setstate}
        validateName={validateName}
      />
    </>
  );
}

export default CustomizeList;
