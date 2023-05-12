import * as yup from 'yup';
import { XenosRule } from '../../../store/types';
import { unitAdjustStatsSchema, unitSetStatsSchema } from '../UnitsPanel/unitSchemas';

export const xenosRuleSchema = yup.object({
  name: yup.string().min(1).required(),
  points: yup.number().min(0).required(),
  exclude_units: yup.array().of(yup.string()),
  description: yup.string().required(),
  setStats: unitSetStatsSchema,
  adjustStats: unitAdjustStatsSchema,
});

export const emptyXenosRule: XenosRule = {
  name: 'Name',
  points: 0,
  exclude_units: [],
  description: 'Description',
};
