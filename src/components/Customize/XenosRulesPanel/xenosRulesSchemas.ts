import * as yup from 'yup';
import { XenosRule } from '../../../store/types';
import { unitAdjustStatsSchema, unitSetStatsSchema } from '../UnitsPanel/unitSchemas';
import validName from '../common/validName';

export const xenosRuleSchema = yup.object<XenosRule>({
  name: validName,
  points: yup.number().integer().min(0).required(),
  exclude_units: yup.array().of(yup.string()),
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
