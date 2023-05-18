import * as yup from 'yup';
import { PsychicPower } from '../../../store/types';

export const psychicPowerSchema = yup.object<PsychicPower>({
  name: yup.string().min(1).required(),
  difficulty: yup.number().integer().min(2).max(12),
  target: yup.string(),
  duration: yup.string(),
  effect: yup.string(),
  short: yup.string(),
});

export const emptyPsychicPower: PsychicPower = {
  name: 'Name',
  difficulty: 7,
  target: 'Target',
  duration: 'Duration',
  effect: 'Effekt',
};
