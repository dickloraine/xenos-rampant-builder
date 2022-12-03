import { Box, IconButton, Tooltip } from '@material-ui/core';
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import PersonAddOutlinedIcon from '@material-ui/icons/PersonAddOutlined';
import TextFieldsIcon from '@material-ui/icons/TextFields';
import React from 'react';
import { useDispatch } from 'react-redux';
import { addUnit, moveUnit, renameUnit } from 'store/rosterSlice';
import { AppDispatch, Unit } from 'store/types';
import TextInputDialog from '../TextInputDialog';

const Actions: React.FC<{ id: number; unit: Unit }> = ({ id, unit }) => {
  const dispatch: AppDispatch = useDispatch();

  const moveLeft = () => dispatch(moveUnit(id, 'left'));
  const moveRight = () => dispatch(moveUnit(id, 'right'));
  const cloneUnit = () => dispatch(addUnit(unit, id));
  const rename = (value: string) => dispatch(renameUnit(id, value));

  return (
    <Box
      style={{
        position: 'absolute',
        bottom: 5,
        width: '95%',
        paddingRight: 15,
      }}
    >
      <Box display="flex" style={{ height: 25 }}>
        <Box display="flex" alignItems="center">
          <Tooltip title="Move back">
            <IconButton onClick={moveLeft}>
              <NavigateBeforeIcon />
            </IconButton>
          </Tooltip>
          <Tooltip title="Move forward">
            <IconButton onClick={moveRight}>
              <NavigateNextIcon />
            </IconButton>
          </Tooltip>
        </Box>
        <Box flexGrow={1}></Box>
        <Box display="flex" alignItems="center">
          <TextInputDialog
            anchor={
              <Tooltip title="Rename unit">
                <IconButton>
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
            <IconButton onClick={cloneUnit}>
              <PersonAddOutlinedIcon />
            </IconButton>
          </Tooltip>
        </Box>
      </Box>
    </Box>
  );
};

export default Actions;
