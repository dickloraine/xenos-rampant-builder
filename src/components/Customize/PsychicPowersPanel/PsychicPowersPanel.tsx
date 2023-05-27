import React from 'react';
import { useAppDispatch, useAppSelector } from '../../../hooks/reduxHooks';
import { addSpell, removeSpell } from '../../../store/dataSlice';
import { PsychicPower, RootState } from '../../../store/types';
import { PanelProps } from '../CustomizeMenu';
import CustomizePanel from '../CustomizePanel';
import PsychicPowersForm from './PsychicPowersForm';
import { emptyPsychicPower, psychicPowerSchema } from './psychicPowersSchemas';

function SpellsPanel(props: PanelProps) {
  const { expanded, handleChange } = props;
  const dispatch = useAppDispatch();
  const customData = useAppSelector(
    (state: RootState) => state.data.customData.psychicPowers
  );

  const removeFunc = (name: string) => dispatch(removeSpell(name));
  const addFunc = (spell: PsychicPower) => dispatch(addSpell(spell));

  return (
    <CustomizePanel<PsychicPower>
      name="Psychic Powers"
      id="spells"
      expanded={expanded}
      handleChange={handleChange}
      data={customData}
      CustomForm={PsychicPowersForm}
      schema={psychicPowerSchema}
      emptyState={{ ...emptyPsychicPower }}
      removeFunc={removeFunc}
      addFunc={addFunc}
    />
  );
}

export default React.memo(SpellsPanel);
