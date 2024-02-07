import * as yup from 'yup';
import { ObjectSchema } from 'yup';
import { Rule } from '../../../store/types';
import validName from '../common/validName';

export const ruleSchema: ObjectSchema<Rule> = yup.object({
  name: validName,
  description: yup.string().required(),
  short: yup.string(),
});

export const emptyRule: Rule = {
  name: '',
  description: '',
};
