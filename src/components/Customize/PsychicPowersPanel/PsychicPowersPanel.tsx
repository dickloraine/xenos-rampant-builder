import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addSpell, removeSpell } from '../../../store/dataSlice';
import { AppDispatch, PsychicPower, RootState } from '../../../store/types';
import { PanelProps } from '../CustomizeMenu/CustomizeMenu';
import CustomizePanel from '../CustomizePanel/CustomizePanel';
import PsychicPowersForm from './PsychicPowersForm';
import { emptyPsychicPower } from './psychicPowersSchemas';

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
      name="Psychic Powers"
      id="spells"
      expanded={expanded}
      handleChange={handleChange}
      data={customData}
      CustomForm={PsychicPowersForm}
      emptyState={{ ...emptyPsychicPower }}
      removeFunc={removeFunc}
      addFunc={addFunc}
    />
  );
}

export default React.memo(SpellsPanel);
