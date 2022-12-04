import store from 'store/store';
import { CompactUnit, Unit, UnitStats } from 'store/types';

const buildUnit = (unitToBuild: CompactUnit | Unit) => {
  const unitData = store.getState().data.unitData[unitToBuild.name];
  const xenosRulesData = store.getState().data.xenosRulesData;

  let unit: Unit = {
    ...unitData,
    customName: unitToBuild.customName || '',
    options: [...unitToBuild.options],
    xenosRules: [...unitToBuild.xenosRules],
  };

  let points = unitData.points;
  let statsToAdjust: Partial<UnitStats> = {};
  for (const opt of unit.options) {
    const option = unitData.options[opt];
    points += option.points || 0;

    if (option.setStats) {
      for (const [key, val] of Object.entries(option.setStats)) {
        unit = { ...unit, stats: { ...unit.stats, [key]: val } };
      }
    }

    if (option.adjustStats) {
      statsToAdjust = { ...statsToAdjust, ...option.adjustStats };
    }

    if (option.add) {
      for (const rule of option.add) {
        unit.rules = [...unit.rules, rule];
      }
    }

    if (option.remove) {
      for (const rule of option.remove) {
        unit.rules = unit.rules.filter((val) => val !== rule);
      }
    }
  }

  for (const rule of unit.xenosRules) {
    const xenosRule = xenosRulesData[rule];
    points += xenosRule.points;
    unit.rules = [...unit.rules, xenosRule.name];

    if (xenosRule.setStats) {
      for (const [key, val] of Object.entries(xenosRule.setStats)) {
        unit = { ...unit, stats: { ...unit.stats, [key]: val } };
      }
    }

    if (xenosRule.adjustStats) {
      statsToAdjust = { ...statsToAdjust, ...xenosRule.adjustStats };
    }
  }

  for (const [key, val] of Object.entries(statsToAdjust)) {
    const k = key as keyof UnitStats;
    const oldVal = unit.stats[k];
    if (val && typeof val == 'number' && typeof oldVal == 'number') {
      unit = { ...unit, stats: { ...unit.stats, [key]: oldVal + val } };
    }
  }

  unit = { ...unit, points: points };
  return unit;
};

export default buildUnit;
