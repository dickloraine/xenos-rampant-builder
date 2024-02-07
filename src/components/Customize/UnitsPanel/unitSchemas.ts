import * as yup from 'yup';
import { ObjectSchema } from 'yup';
import { DataUnit, UnitOption, UnitStats } from '../../../store/types';
import { dynamicSchemaObject } from '../../../utils/dynamicSchemaObject';
import validName from '../common/validName';

export const unitStatsSchema: ObjectSchema<UnitStats> = yup.object({
  attack: yup.number().integer().min(0).max(12).required(),
  move: yup.number().integer().min(0).max(12).required(),
  shoot: yup.number().integer().min(0).max(12).required(),
  courage: yup.number().integer().min(0).max(12).required(),
  armor: yup.number().integer().min(0).max(6).required(),
  attackValue: yup.number().integer().min(0).max(6).required(),
  defenceValue: yup.number().integer().min(0).max(6).required(),
  shootValue: yup.number().integer().min(0).max(6).required(),
  shootRange: yup.number().integer().min(0).max(24).required(),
  movement: yup.number().integer().min(0).max(18).required(),
  strengthPoints: yup.number().oneOf([5, 10]).required(),
});

export const unitSetStatsSchema: ObjectSchema<Partial<UnitStats>> = yup.object({
  attack: yup.number().integer().min(0).max(12),
  move: yup.number().integer().min(0).max(12),
  shoot: yup.number().integer().min(0).max(12),
  courage: yup.number().integer().min(0).max(12),
  armor: yup.number().integer().min(0).max(6),
  attackValue: yup.number().integer().min(0).max(6),
  defenceValue: yup.number().integer().min(0).max(6),
  shootValue: yup.number().integer().min(0).max(6),
  shootRange: yup.number().integer().min(0).max(24),
  movement: yup.number().integer().min(0).max(18),
  strengthPoints: yup.number().oneOf([5, 10]),
});

export const unitAdjustStatsSchema: ObjectSchema<Partial<UnitStats>> = yup.object({
  attack: yup.number().integer().min(-12).max(12),
  move: yup.number().integer().min(-12).max(12),
  shoot: yup.number().integer().min(-12).max(12),
  courage: yup.number().integer().min(-12).max(12),
  armor: yup.number().integer().min(-6).max(6),
  attackValue: yup.number().integer().min(-6).max(6),
  defenceValue: yup.number().integer().min(-6).max(6),
  shootValue: yup.number().integer().min(-6).max(6),
  shootRange: yup.number().integer().min(-6).max(24),
  movement: yup.number().integer().min(-18).max(18),
  strengthPoints: yup.number().oneOf([-10, -5, 0, 5, 10]),
});

export const unitOptionSchema: ObjectSchema<UnitOption> = yup.object({
  name: validName,
  description: yup.string().required(),
  points: yup.number().integer(),
  short: yup.string(),
  remove: yup.array().of(yup.string().required()),
  add: yup.array().of(yup.string().required()),
  setStats: unitSetStatsSchema,
  adjustStats: unitAdjustStatsSchema,
  disabledBy: yup.array().of(yup.string().required()),
  enabledBy: yup.array().of(yup.string().required()),
});

export const dataUnitSchema: ObjectSchema<DataUnit> = yup.object({
  name: validName,
  type: yup.string().required(),
  points: yup.number().integer().min(1).required(),
  stats: unitStatsSchema,
  rules: yup.array().of(yup.string().required()).required(),
  xenosRules: yup.array().of(yup.string().required()).required(),
  freeActivations: yup
    .array()
    .of(
      yup
        .mixed<
          | 'attack'
          | 'move'
          | 'shoot'
          | 'courage'
          | 'armor'
          | 'attackValue'
          | 'defenceValue'
          | 'shootValue'
          | 'shootRange'
          | 'movement'
          | 'strengthPoints'
        >()
        .required()
    )
    .required(),
  customName: yup.string(),
  psiPowers: yup.array().of(yup.string().required()),
  options: dynamicSchemaObject(unitOptionSchema),
});

export const emptyOption: UnitOption = {
  name: '',
  points: 0,
  description: '',
};

export const emptyUnit: DataUnit = {
  name: '',
  type: 'foot',
  points: 2,
  stats: {
    attack: 5,
    move: 6,
    shoot: 0,
    courage: 4,
    armor: 2,
    attackValue: 5,
    defenceValue: 5,
    shootValue: 0,
    shootRange: 0,
    movement: 6,
    strengthPoints: 5,
  },
  freeActivations: [],
  rules: [],
  options: {},
  xenosRules: [],
};
