import * as yup from 'yup';
import { Rule } from '../../../store/types';
import validName from '../common/validName';

export const ruleSchema = yup.object<Rule>({
  name: validName,
  description: yup.string().required(),
  short: yup.string(),
});

export const emptyRule: Rule = {
  name: '',
  description: '',
};
