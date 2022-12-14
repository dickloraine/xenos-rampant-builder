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
import { useAppDispatch, useAppSelector } from 'hooks/reduxHooks';
import React from 'react';
import { removeUnit, updateUnit } from 'store/rosterSlice';
import { Unit as UnitType } from 'store/types';
import ExpandIcon from '../ExpandIcon';
import Actions from './Actions';
import buildUnit from './buildUnit';
import Options from './Options';
import PsychicPowers from './psychicPowers';
import SpecialRules from './SpecialRules';
import StatBlock from './StatBlock';
import UnitSelector from './UnitSelector';
import XenosRules from './XenosRules';

const Unit: React.FC<{ id: number }> = ({ id }) => {
  const dispatch = useAppDispatch();
  const unit = useAppSelector((state) => state.roster.units[id]);
  const viewMode = useAppSelector((state) => state.ui.viewMode);
  const editMode = useAppSelector((state) => state.ui.editMode);

  const [expanded, setExpanded] = React.useState(true);
  const handleExpandClick = () => setExpanded(!expanded);

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
          title={<UnitSelector unit={unit} id={id} />}
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
          <PsychicPowers onChange={handleChange} unit={unit} />
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
