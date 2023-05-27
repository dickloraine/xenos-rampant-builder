import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from '@mui/material';
import { FormContainer, TextFieldElement } from '../../../libs/react-hook-form-mui';
import { Rule } from '../../../store/types';
import { CustomFormProps } from '../common/useCustomizeForm';

function RulesForm(props: CustomFormProps<Rule>) {
  const { formContext, open, handleClose, handleAction } = props;

  return (
    <Dialog open={open}>
      <FormContainer formContext={formContext} onSuccess={handleAction}>
        <DialogTitle>Rule</DialogTitle>
        <DialogContent>
          <TextFieldElement
            name="name"
            label="Name"
            type="text"
            required
            margin="normal"
            fullWidth
          />
          <TextFieldElement
            name="description"
            label="Description"
            type="text"
            required
            margin="normal"
            fullWidth
            multiline
          />
          <TextFieldElement
            name="short"
            label="Short description"
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
