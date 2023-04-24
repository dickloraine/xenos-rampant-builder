import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addSpell, removeSpell } from '../../store/dataSlice';
import { AppDispatch, PsychicPower, RootState } from '../../store/types';
import { PanelProps } from './CustomizeMenu';
import CustomizePanel from './CustomizePanel';
import SpellsForm from './SpellsForm';

function SpellsPanel(props: PanelProps) {
  const { expanded, handleChange } = props;
  const dispatch: AppDispatch = useDispatch();
  const customData = useSelector(
    (state: RootState) => state.data.customData.psychicPowers
  );

  const removeFunc = (name: string) => dispatch(removeSpell(name));
  const addFunc = (spell: PsychicPower) => dispatch(addSpell(spell));

  return (
    <CustomizePanel<PsychicPower>
      name="Spells"
      id="spells"
      expanded={expanded}
      handleChange={handleChange}
      data={customData}
      CustomForm={SpellsForm}
      emptyState={{
        name: 'Name',
        difficulty: 7,
        target: 'Target',
        duration: 'Duration',
        effect: 'Effekt',
      }}
      removeFunc={removeFunc}
      addFunc={addFunc}
    />
  );
}

export default React.memo(SpellsPanel);
