import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import PersonAddOutlinedIcon from '@mui/icons-material/PersonAddOutlined';
import TextFieldsIcon from '@mui/icons-material/TextFields';
import { Box, IconButton, Tooltip } from '@mui/material';
import React from 'react';
import { useAppDispatch } from '../../hooks/reduxHooks';
import { addUnit, moveUnit, renameUnit } from '../../store/rosterSlice';
import { Unit } from '../../store/types';
import TextInputDialog from '../TextInputDialog';

const Actions: React.FC<{ id: number; unit: Unit }> = ({ id, unit }) => {
  const dispatch = useAppDispatch();

  const moveLeft = () => dispatch(moveUnit(id, 'left'));
  const moveRight = () => dispatch(moveUnit(id, 'right'));
  const cloneUnit = () => dispatch(addUnit(unit, id));
  const rename = (value: string) => dispatch(renameUnit(id, value));

  return (
    <Box
      sx={{
        position: 'absolute',
        bottom: 5,
        width: '95%',
        pr: 2,
      }}
    >
      <Box display="flex" sx={{ height: 25 }}>
        <Box display="flex" alignItems="center">
          <Tooltip title="Move back">
            <IconButton onClick={moveLeft} size="large">
              <NavigateBeforeIcon />
            </IconButton>
          </Tooltip>
          <Tooltip title="Move forward">
            <IconButton onClick={moveRight} size="large">
              <NavigateNextIcon />
            </IconButton>
          </Tooltip>
        </Box>
        <Box flexGrow={1}></Box>
        <Box display="flex" alignItems="center">
          <TextInputDialog
            anchor={
              <Tooltip title="Rename unit">
                <IconButton size="large">
                  <TextFieldsIcon />
                </IconButton>
              </Tooltip>
            }
            action={rename}
            title="Enter the name for the unit"
            label="Unit name"
            defaultValue={unit.customName}
            okayText="Rename"
          />
          <Tooltip title="Clone unit">
            <IconButton onClick={cloneUnit} size="large">
              <PersonAddOutlinedIcon />
            </IconButton>
          </Tooltip>
        </Box>
      </Box>
    </Box>
  );
};

export default Actions;
