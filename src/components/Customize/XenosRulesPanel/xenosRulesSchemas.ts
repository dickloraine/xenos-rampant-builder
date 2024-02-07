import * as yup from 'yup';
import { ObjectSchema } from 'yup';
import { XenosRule } from '../../../store/types';
import { unitAdjustStatsSchema, unitSetStatsSchema } from '../UnitsPanel/unitSchemas';
import validName from '../common/validName';

export const xenosRuleSchema: ObjectSchema<XenosRule> = yup.object({
  name: validName,
  points: yup.number().integer().min(0).required(),
  exclude_units: yup.array().of(yup.string().required()).required(),
  description: yup.string().required(),
  short: yup.string(),
  setStats: unitSetStatsSchema,
  adjustStats: unitAdjustStatsSchema,
});

export const emptyXenosRule: XenosRule = {
  name: '',
  points: 0,
  exclude_units: [],
  description: '',
};
