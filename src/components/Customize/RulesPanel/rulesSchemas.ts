import * as yup from 'yup';
import { Rule } from '../../../store/types';

export const ruleSchema = yup.object({
  name: yup.string().min(1).required(),
  description: yup.string(),
});

export const emptyRule: Rule = {
  name: 'Name',
  description: 'Description',
};
