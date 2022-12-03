import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { showFeedback } from 'store/appStateSlice';
import { addRule, removeRule } from 'store/dataSlice';
import { AppDispatch, RootState, Rule } from 'store/types';
import { PanelProps } from './CustomizeMenu';
import CustomizePanel from './CustomizePanel';
import RulesForm from './RulesForm';

function RulesPanel(props: PanelProps) {
  const { expanded, handleChange } = props;
  const dispatch: AppDispatch = useDispatch();
  const customData = useSelector((state: RootState) => state.data.customData);
  const units = useSelector((state: RootState) => state.roster.units);

  const removeFunc = (name: string) => {
    if (
      Object.values(units).some((unit) => unit.rules.includes(name)) ||
      Object.values(customData.unitData).some((unit) => unit.rules.includes(name))
    ) {
      dispatch(showFeedback(`You can't delete a rule currently in use!`, 'error'));
    } else dispatch(removeRule(name));
  };
  const addFunc = (rule: Rule) => dispatch(addRule(rule));

  return (
    <CustomizePanel<Rule>
      name="Rules"
      id="rules"
      expanded={expanded}
      handleChange={handleChange}
      data={customData.rulesData}
      CustomForm={RulesForm}
      emptyState={{
        name: 'Name',
        description: 'Description',
      }}
      removeFunc={removeFunc}
      addFunc={addFunc}
    />
  );
}

export default React.memo(RulesPanel);
