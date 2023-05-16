import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from '@material-ui/core';
import { useSelector } from 'react-redux';
import {
  FormContainer,
  MultiSelectElement,
  SelectElement,
  TextFieldElement,
} from '../../../libs/react-hook-form-mui';
import { selectUnitNames } from '../../../store/dataSlice';
import { RootState, XenosRule } from '../../../store/types';
import range from '../../../utils/range';
import { CustomFormProps } from '../CustomizePanel/CustomizeList';
import StatManipulation from '../common/StatManipulation';

function XenosRulesForm(props: CustomFormProps<XenosRule>) {
  const { formContext, open, handleClose, handleAction, validateName } = props;
  const units = useSelector((state: RootState) => selectUnitNames(state));
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
            fullWidth
            customError={(name) => !validateName(name)}
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
