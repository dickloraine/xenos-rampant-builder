import React from 'react';
import { useAppDispatch, useAppSelector } from '../../../hooks/reduxHooks';
import { showFeedback } from '../../../store/appStateSlice';
import { addUnit, removeUnit } from '../../../store/dataSlice';
import { DataUnit, RootState } from '../../../store/types';
import { PanelProps } from '../CustomizeMenu';
import CustomizePanel from '../CustomizePanel';
import UnitsForm from './UnitsForm';
import { dataUnitSchema, emptyUnit } from './unitSchemas';

function UnitsPanel(props: PanelProps) {
  const { expanded, handleChange } = props;
  const dispatch = useAppDispatch();
  const customData = useAppSelector(
    (state: RootState) => state.data.customData.unitData
  );
  const units = useAppSelector((state: RootState) => state.roster.units);

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
      schema={dataUnitSchema}
      emptyState={{ ...emptyUnit }}
      removeFunc={removeFunc}
      addFunc={addFunc}
    />
  );
}

export default React.memo(UnitsPanel);
