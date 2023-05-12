import { yupResolver } from '@hookform/resolvers/yup';
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from '@material-ui/core';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { FormContainer, TextFieldElement } from '../../../libs/react-hook-form-mui';
import { Rule } from '../../../store/types';
import { CustomFormProps } from '../CustomizePanel/CustomizeList';
import { ruleSchema } from './rulesSchemas';

function RulesForm(props: CustomFormProps<Rule>) {
  const { open, handleClose, initialState, handleAction, validateName } = props;
  const formContext = useForm<Rule>({
    resolver: yupResolver(ruleSchema),
    defaultValues: { ...initialState },
  });
  const { reset } = formContext;

  useEffect(() => {
    if (open) {
      reset({ ...initialState });
    }
  }, [reset, open, initialState]);

  return (
    <Dialog open={open}>
      <FormContainer formContext={formContext} onSuccess={handleAction}>
        <DialogTitle>Rule</DialogTitle>
        <DialogContent>
          <TextFieldElement
            name="name"
            label="Name"
            type="text"
            margin="normal"
            fullWidth
            customError={(name) => !validateName(name)}
          />
          <TextFieldElement
            name="description"
            label="Description"
            type="text"
            margin="normal"
            fullWidth
            multiline
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

export default RulesForm;
