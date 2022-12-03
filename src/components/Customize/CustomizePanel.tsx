import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
} from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import React from 'react';
import { CustomDataElement } from 'store/types';
import CustomizeList, { CustomizeListProps } from './CustomizeList';

interface CustomizePanelProps<T extends CustomDataElement>
  extends CustomizeListProps<T> {
  name: string;
  id: string;
  expanded: string;
  handleChange: (
    name: string
  ) => (event: React.ChangeEvent<{}>, isExpanded: boolean) => void;
}

function CustomizePanel<T extends CustomDataElement>(props: CustomizePanelProps<T>) {
  const {
    name,
    id,
    expanded,
    handleChange,
    data,
    CustomForm,
    emptyState,
    removeFunc,
    addFunc,
  } = props;

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
        <CustomizeList<T>
          data={data}
          CustomForm={CustomForm}
          emptyState={emptyState}
          removeFunc={removeFunc}
          addFunc={addFunc}
        />
      </AccordionDetails>
    </Accordion>
  );
}

export default CustomizePanel;
