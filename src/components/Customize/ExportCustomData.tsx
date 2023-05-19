import {
  Box,
  Button,
  ButtonGroup,
  Checkbox,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  FormControl,
  FormControlLabel,
  FormGroup,
  FormLabel,
} from '@mui/material';
import produce from 'immer';
import React from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks/reduxHooks';
import { showFeedback } from '../../store/appStateSlice';
import { getEmptyCustomData } from '../../store/dataSlice';
import { CustomData, RootState } from '../../store/types';
import copyToClipboard from '../../utils/copyToClipboard';

const DataGroup: React.FC<{
  data: CustomData;
  setData: React.Dispatch<React.SetStateAction<CustomData>>;
  customData: CustomData;
  label: string;
  type: keyof CustomData;
}> = ({ data, setData, customData, label, type }) => {
  const handleChange =
    (type: keyof CustomData) => (event: React.ChangeEvent<HTMLInputElement>) => {
      if (event.target.checked) {
        setData(
          produce(data, (draft) => {
            draft[type][event.target.name] = customData[type][event.target.name];
          })
        );
      } else {
        setData(
          produce(data, (draft) => {
            delete draft[type][event.target.name];
          })
        );
      }
    };

  return (
    <>
      {Object.keys(customData[type]).length !== 0 && (
        <>
          <FormLabel>{label}</FormLabel>
          <FormGroup>
            {Object.keys(customData[type]).map((name) => (
              <FormControlLabel
                control={
                  <Checkbox
                    checked={data[type][name] !== undefined}
                    onChange={handleChange(type)}
                    name={name}
                  />
                }
                label={name}
                key={name}
              />
            ))}
          </FormGroup>
        </>
      )}
    </>
  );
};

const ExportCustomData: React.FC<{ open: boolean; handleClose: () => void }> = ({
  open,
  handleClose,
}) => {
  const [data, setData] = React.useState(getEmptyCustomData());
  const customData = useAppSelector((state: RootState) => state.data.customData);
  const dispatch = useAppDispatch();

  const selectAll = () => setData(customData);
  const selectNone = () => setData(getEmptyCustomData());

  const nothingSelected = Object.values(data).every((v) => Object.keys(v).length === 0);
  const somethingToSelect = Object.values(customData).some(
    (v) => Object.keys(v).length !== 0
  );

  const exportCustomData = () => {
    try {
      const exportString = JSON.stringify(data);
      copyToClipboard(exportString);
      dispatch(showFeedback('Custom data copied to clipboard!', 'success'));
      handleClose();
    } catch (err) {
      dispatch(showFeedback('Could not export the custom data!', 'error'));
    }
  };

  const groupProps = { data: data, setData: setData, customData: customData };

  return (
    <Dialog onClose={handleClose} open={open}>
      <DialogTitle>Export custom data</DialogTitle>
      <DialogContent>
        <FormControl variant="standard">
          {somethingToSelect && (
            <Box mb={1}>
              <ButtonGroup size="small" color="primary" variant="text">
                <Button onClick={selectAll}>Select all</Button>
                <Button onClick={selectNone}>Select none</Button>
              </ButtonGroup>
            </Box>
          )}
          <DataGroup label="Units" type="unitData" {...groupProps} />
          <DataGroup label="Rules" type="rulesData" {...groupProps} />
          <DataGroup label="Xenos Rules" type="xenosRulesData" {...groupProps} />
          <DataGroup label="Psychic Powers" type="psychicPowers" {...groupProps} />
        </FormControl>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} color="primary">
          Cancel
        </Button>
        <Button onClick={exportCustomData} disabled={nothingSelected} color="primary">
          Export
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default ExportCustomData;
