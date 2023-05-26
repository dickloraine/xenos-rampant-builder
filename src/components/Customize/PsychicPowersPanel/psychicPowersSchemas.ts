import * as yup from 'yup';
import { PsychicPower } from '../../../store/types';
import validName from '../common/validName';

export const psychicPowerSchema = yup.object<PsychicPower>({
  name: validName,
  difficulty: yup.number().integer().min(2).max(12),
  target: yup.string().required(),
  duration: yup.string().required(),
  effect: yup.string().required(),
  short: yup.string(),
});

export const emptyPsychicPower: PsychicPower = {
  name: '',
  difficulty: 7,
  target: '',
  duration: '',
  effect: '',
};
