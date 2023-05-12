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
import {
  FormContainer,
  SelectElement,
  TextFieldElement,
} from '../../../libs/react-hook-form-mui';
import { PsychicPower } from '../../../store/types';
import range from '../../../utils/range';
import { CustomFormProps } from '../CustomizePanel/CustomizeList';
import { psychicPowerSchema } from './psychicPowersSchemas';

function PsychicPowersForm(props: CustomFormProps<PsychicPower>) {
  const { open, handleClose, initialState, handleAction, validateName } = props;
  const formContext = useForm<PsychicPower>({
    resolver: yupResolver(psychicPowerSchema),
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
        <DialogTitle>Psychic Power</DialogTitle>
        <DialogContent>
          <TextFieldElement
            name="name"
            label="Name"
            type="text"
            margin="normal"
            fullWidth
            customError={(name) => !validateName(name)}
          />
          <SelectElement
            name="difficulty"
            label="Difficulty"
            type="number"
            margin="normal"
            fullWidth
            options={range(2, 12)}
          />
          <TextFieldElement
            name="target"
            label="Target"
            type="text"
            margin="normal"
            fullWidth
          />
          <TextFieldElement
            name="duration"
            label="Duration"
            type="text"
            margin="normal"
            fullWidth
          />
          <TextFieldElement
            name="effect"
            label="Effekt"
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

export default PsychicPowersForm;
