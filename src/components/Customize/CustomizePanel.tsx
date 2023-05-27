import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
} from '@mui/material';
import React from 'react';
import { UseFormReturn } from 'react-hook-form';
import * as yup from 'yup';
import { CustomDataElement } from '../../store/types';
import useCustomizeForm from './common/useCutomizeForm';

interface CustomizePanelProps<T extends CustomDataElement> {
  name: string;
  id: string;
  expanded: string;
  handleChange: (
    name: string
  ) => (event: React.ChangeEvent<object>, isExpanded: boolean) => void;
  data: { [name: string]: T };
  CustomForm: React.FC<CustomFormProps<T>>;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  schema: yup.ObjectSchema<any>;
  emptyState: T;
  removeFunc: (name: string) => void;
  addFunc: (newState: T) => void;
}

export interface CustomFormProps<T extends CustomDataElement> {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  formContext: UseFormReturn<T, any>;
  open: boolean;
  handleClose: () => void;
  handleAction: (data: T) => void;
}

function CustomizePanel<T extends CustomDataElement>(props: CustomizePanelProps<T>) {
  const {
    name,
    id,
    expanded,
    handleChange,
    data,
    CustomForm,
    schema,
    emptyState,
    removeFunc,
    addFunc,
  } = props;

  const { ElementsList, ...formProps } = useCustomizeForm<T>(
    data,
    schema,
    emptyState,
    removeFunc,
    addFunc
  );

  return (
    <Accordion expanded={expanded === name} onChange={handleChange(name)}>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls={id + '-content'}
        id={id + '-header'}
      >
        <Typography>Manage {name}</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <ElementsList />
        <CustomForm {...formProps} />
      </AccordionDetails>
    </Accordion>
  );
}

export default CustomizePanel;
