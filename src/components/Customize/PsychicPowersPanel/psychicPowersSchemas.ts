import * as yup from 'yup';
import { PsychicPower } from '../../../store/types';

export const psychicPowerSchema = yup.object({
  name: yup.string().min(1).required(),
  difficulty: yup.number().min(2).max(12),
  target: yup.string(),
  duration: yup.string(),
  effect: yup.string(),
});

export const emptyPsychicPower: PsychicPower = {
  name: 'Name',
  difficulty: 7,
  target: 'Target',
  duration: 'Duration',
  effect: 'Effekt',
};
