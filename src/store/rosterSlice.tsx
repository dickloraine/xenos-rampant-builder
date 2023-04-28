import { createSelector, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { selectAllRules } from '../store/dataSlice';
import { Data, RootState, RosterState, RosterUnits, Thunk, Unit } from './types';

const rosterInitialState: RosterState = {
  name: 'New List',
  nextID: 0,
  units: [],
};

const rosterSlice = createSlice({
  name: 'roster',
  initialState: rosterInitialState,
  reducers: {
    newRoster: () => ({ ...rosterInitialState }),
    setRoster: (_, action: PayloadAction<RosterState>) => ({ ...action.payload }),
    updateRoster: (state, action: PayloadAction<Partial<RosterState>>) => ({
      ...state,
      ...action.payload,
    }),
    _addUnit: (state: RosterState, action: PayloadAction<[Data, Unit?, number?]>) => {
      // eslint-disable-next-line prefer-const
      let [data, unit, index] = action.payload;
      unit = unit ? unit : { ...data.unitData.Unit, options: [], xenosRules: [] };
      index == null ? state.units.push(unit) : state.units.splice(index + 1, 0, unit);
    },
    _setUnit: (state, action: PayloadAction<[Data, number, string]>) => {
      const [data, id, name] = action.payload;
      state.units[id] = { ...data.unitData[name], options: [], xenosRules: [] };
    },
    updateUnit: {
      reducer: (state, action: PayloadAction<[number, Partial<Unit>]>) => {
        const [id, newAttributes] = action.payload;
        state.units[id] = { ...state.units[id], ...newAttributes };
      },
      prepare: (
        id: number,
        newAttributes: Partial<Unit>
      ): { payload: [number, Partial<Unit>] } => ({ payload: [id, newAttributes] }),
    },
    removeUnit: (state, action: PayloadAction<number>) => {
      const id = action.payload;
      state.units.splice(id, 1);
    },
    renameUnit: {
      reducer: (state, action: PayloadAction<[number, string]>) => {
        const [id, name] = action.payload;
        state.units[id].customName = name;
      },
      prepare: (id: number, name: string): { payload: [number, string] } => ({
        payload: [id, name],
      }),
    },
    moveUnit: {
      reducer: (state, action: PayloadAction<[number, 'left' | 'right']>) => {
        const [index, direction] = action.payload;
        const nextIndex = direction === 'left' ? index - 1 : index + 1;
        if (nextIndex < 0 || nextIndex >= state.units.length) return state;
        [state.units[nextIndex], state.units[index]] = [
          state.units[index],
          state.units[nextIndex],
        ];
      },
      prepare: (
        id: number,
        direction: 'left' | 'right'
      ): { payload: [number, 'left' | 'right'] } => ({ payload: [id, direction] }),
    },
  },
});

const { _addUnit, _setUnit } = rosterSlice.actions;

export const addUnit =
  (unit?: Unit, index?: number): Thunk =>
  (dispatch, getState) => {
    const data = getState().data;
    dispatch(_addUnit([data, unit, index]));
  };

export const setUnit =
  (id: number, name: string): Thunk =>
  (dispatch, getState) => {
    const data = getState().data;
    dispatch(_setUnit([data, id, name]));
  };

const getTotalPoints = createSelector(
  (units: RosterUnits) => units,
  (units) => Object.values(units).reduce((acc, unit) => acc + unit.points, 0)
);

const getSpecialRules = createSelector(
  (state: RootState) => state.roster.units,
  (state: RootState) => selectAllRules(state),
  (units, rulesData) => {
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

export { getTotalPoints, getSpecialRules };

export const {
  newRoster,
  setRoster,
  updateRoster,
  updateUnit,
  removeUnit,
  renameUnit,
  moveUnit,
} = rosterSlice.actions;

export default rosterSlice.reducer;
