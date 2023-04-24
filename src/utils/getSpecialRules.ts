import { createSelector } from '@reduxjs/toolkit';
import { selectAllRules } from '../store//dataSlice';
import store from '../store/store';
import { RosterUnits } from '../store/types';

export const getSpecialRules = createSelector(
  (units: RosterUnits) => units,
  (units) => {
    const rulesData = selectAllRules(store.getState());
    return Object.values(units)
      .reduce(
        (acc: string[], unit) =>
          unit.rules.reduce(
            (acc, rule) =>
              rulesData[rulesData[rule]?.description]
                ? [...acc, rulesData[rule].description]
                : [...acc, rule],
            acc
          ),
        []
      )
      .sort()
      .filter((rule, index, ary) => !index || rule !== ary[index - 1]);
  }
);
