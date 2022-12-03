import {
  Button,
  Card,
  CardContent,
  CardHeader,
  Chip,
  Collapse,
  Typography,
} from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectUnitNames } from 'store/dataSlice';
import { removeUnit, setUnit, updateUnit } from 'store/rosterSlice';
import { AppDispatch, RootState, Unit as UnitType } from 'store/types';
import ExpandIcon from '../ExpandIcon';
import Actions from './Actions';
import buildUnit from './buildUnit';
import Options from './Options';
import SpecialRules from './SpecialRules';
import StatBlock from './StatBlock';
import UnitSelector from './UnitSelector';
import XenosRules from './XenosRules';

const Unit: React.FC<{ id: number }> = ({ id }) => {
  const dispatch: AppDispatch = useDispatch();
  const unit = useSelector((state: RootState) => state.roster.units[id]);
  const viewMode = useSelector((state: RootState) => state.ui.viewMode);
  const editMode = useSelector((state: RootState) => state.ui.editMode);
  const unitNames = useSelector((state: RootState) => selectUnitNames(state));

  const [expanded, setExpanded] = React.useState(true);
  const handleExpandClick = () => setExpanded(!expanded);

  const changeUnit = (name: string) => dispatch(setUnit(id, name));

  const handleChange = (unit: UnitType) => {
    unit = buildUnit(unit);
    dispatch(updateUnit(id, { ...unit }));
  };

  const handleRemove = () => dispatch(removeUnit(id));

  return (
    <Card
      style={{ marginBottom: 25, maxWidth: 400, width: '100%', position: 'relative' }}
    >
      {viewMode ? (
        <CardHeader
          title={
            <>
              <Typography variant="h5">
                <Chip label={unit.points} color="primary" />
                &nbsp;&nbsp;
                {unit.customName ? unit.customName : unit.name}
              </Typography>
              {unit.customName &&
                (expanded ? (
                  <Typography style={{ marginLeft: 45, marginBottom: -25 }}>
                    {unit.name}
                  </Typography>
                ) : (
                  <Typography style={{ marginLeft: 45 }}>{unit.name}</Typography>
                ))}
            </>
          }
          action={<ExpandIcon expanded={expanded} onClick={handleExpandClick} />}
        />
      ) : (
        <CardHeader
          title={<UnitSelector unit={unit} onClose={changeUnit} options={unitNames} />}
          action={
            <Button onClick={handleRemove}>
              <CloseIcon />
            </Button>
          }
        />
      )}
      <Collapse in={!viewMode || expanded} timeout="auto" unmountOnExit>
        <CardContent>
          {!editMode && (
            <>
              <StatBlock stats={unit.stats} freeActivations={unit.freeActivations} />
              <SpecialRules rules={unit.rules} />
            </>
          )}
          {!viewMode && (
            <>
              <Options onChange={handleChange} unit={unit} />
              <XenosRules onChange={handleChange} unit={unit} />
              <Actions id={id} unit={unit} />
            </>
          )}
        </CardContent>
      </Collapse>
    </Card>
  );
};

export default React.memo(Unit);
