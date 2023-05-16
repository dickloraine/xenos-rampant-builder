import * as yup from 'yup';
import { Rule } from '../../../store/types';

export const ruleSchema = yup.object<Rule>({
  name: yup.string().min(1).required(),
  description: yup.string(),
  short: yup.string(),
});

export const emptyRule: Rule = {
  name: 'Name',
  description: 'Description',
};
