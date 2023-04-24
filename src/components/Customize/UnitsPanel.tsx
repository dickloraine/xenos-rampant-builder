import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { showFeedback } from '../../store/appStateSlice';
import { addUnit, removeUnit } from '../../store/dataSlice';
import { AppDispatch, DataUnit, RootState } from '../../store/types';
import { PanelProps } from './CustomizeMenu';
import CustomizePanel from './CustomizePanel';
import UnitsForm from './UnitsForm';

function UnitsPanel(props: PanelProps) {
  const { expanded, handleChange } = props;
  const dispatch: AppDispatch = useDispatch();
  const customData = useSelector((state: RootState) => state.data.customData.unitData);
  const units = useSelector((state: RootState) => state.roster.units);

  const removeFunc = (name: string) => {
    if (Object.values(units).some((unit) => unit.name === name)) {
      dispatch(showFeedback(`You can't delete a unit currently in use!`, 'error'));
    } else dispatch(removeUnit(name));
  };
  const addFunc = (unit: DataUnit) => dispatch(addUnit(unit));

  return (
    <CustomizePanel<DataUnit>
      name="Units"
      id="units"
      expanded={expanded}
      handleChange={handleChange}
      data={customData}
      CustomForm={UnitsForm}
      emptyState={{
        name: 'Name',
        type: 'foot',
        points: 4,
        stats: {
          attack: 5,
          move: 6,
          shoot: 0,
          courage: 4,
          armor: 0,
          attackValue: 5,
          defenceValue: 5,
          shootValue: 0,
          shootRange: 0,
          movement: 6,
          strengthPoints: 12,
        },
        freeActivations: [],
        rules: [],
        options: {},
        xenosRules: [],
      }}
      removeFunc={removeFunc}
      addFunc={addFunc}
    />
  );
}

export default React.memo(UnitsPanel);
