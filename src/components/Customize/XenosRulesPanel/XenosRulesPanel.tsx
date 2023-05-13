import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { showFeedback } from '../../../store/appStateSlice';
import { addXenosRule, removeXenosRule } from '../../../store/dataSlice';
import { AppDispatch, RootState, XenosRule } from '../../../store/types';
import { PanelProps } from '../CustomizeMenu/CustomizeMenu';
import CustomizePanel from '../CustomizePanel/CustomizePanel';
import XenosRulesForm from './XenosRulesForm';
import { emptyXenosRule, xenosRuleSchema } from './xenosRulesSchemas';

function XenosRulesPanel(props: PanelProps) {
  const { expanded, handleChange } = props;
  const dispatch: AppDispatch = useDispatch();
  const customData = useSelector(
    (state: RootState) => state.data.customData.xenosRulesData
  );
  const units = useSelector((state: RootState) => state.roster.units);

  const removeFunc = (name: string) => {
    if (Object.values(units).some((unit) => unit.xenosRules.includes(name))) {
      dispatch(showFeedback(`You can't delete a rule currently in use!`, 'error'));
    } else dispatch(removeXenosRule(name));
  };
  const addFunc = (rule: XenosRule) => dispatch(addXenosRule(rule));

  return (
    <CustomizePanel<XenosRule>
      name="Xenos Rules"
      id="xenos-rules"
      expanded={expanded}
      handleChange={handleChange}
      data={customData}
      CustomForm={XenosRulesForm}
      schema={xenosRuleSchema}
      emptyState={{ ...emptyXenosRule }}
      removeFunc={removeFunc}
      addFunc={addFunc}
    />
  );
}

export default React.memo(XenosRulesPanel);
