import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from '@mui/material';
import { useAppSelector } from '../../../hooks/reduxHooks';
import {
  FormContainer,
  MultiSelectElement,
  SelectElement,
  TextFieldElement,
} from '../../../libs/react-hook-form-mui';
import { selectUnitNames } from '../../../store/dataSlice';
import { XenosRule } from '../../../store/types';
import range from '../../../utils/range';
import StatManipulation from '../common/StatManipulation';
import { CustomFormProps } from '../common/useCustomizeForm';

function XenosRulesForm(props: CustomFormProps<XenosRule>) {
  const { formContext, open, handleClose, handleAction } = props;
  const units = useAppSelector(selectUnitNames);
  const { watch, setValue } = formContext;

  return (
    <Dialog open={open}>
      <FormContainer formContext={formContext} onSuccess={handleAction}>
        <DialogTitle>Xenos Rule</DialogTitle>
        <DialogContent>
          <TextFieldElement
            name="name"
            label="Name"
            type="text"
            margin="normal"
            required
            fullWidth
          />
          <SelectElement
            name="points"
            label="Points"
            margin="normal"
            type="number"
            fullWidth
            options={range(-4, 6)}
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
            sx={{ mb: 3 }}
          />
          <MultiSelectElement
            name="exclude_units"
            label="Exclude&nbsp;Units"
            fullWidth
            menuItems={[...units]}
          />
          <StatManipulation
            title="Set Stats"
            type="setStats"
            watch={watch}
            setValue={setValue}
          />
          <StatManipulation
            title="Adjust Stats"
            type="adjustStats"
            watch={watch}
            setValue={setValue}
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

export default XenosRulesForm;
