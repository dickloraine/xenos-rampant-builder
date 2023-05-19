import React from 'react';
import { useAppDispatch, useAppSelector } from '../../../hooks/reduxHooks';
import { showFeedback } from '../../../store/appStateSlice';
import { addRule, removeRule } from '../../../store/dataSlice';
import { RootState, Rule } from '../../../store/types';
import { PanelProps } from '../CustomizeMenu/CustomizeMenu';
import CustomizePanel from '../CustomizePanel/CustomizePanel';
import RulesForm from './RulesForm';
import { emptyRule, ruleSchema } from './rulesSchemas';

function RulesPanel(props: PanelProps) {
  const { expanded, handleChange } = props;
  const dispatch = useAppDispatch();
  const customData = useAppSelector((state: RootState) => state.data.customData);
  const units = useAppSelector((state: RootState) => state.roster.units);

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
      schema={ruleSchema}
      emptyState={{ ...emptyRule }}
      removeFunc={removeFunc}
      addFunc={addFunc}
    />
  );
}

export default React.memo(RulesPanel);
