import { Action } from '@reduxjs/toolkit';
import { ThunkAction } from 'redux-thunk';
import { RootState } from './store';

export type { AppDispatch, RootState } from './store';

export type UnitStats = {
  attack: number;
  move: number;
  shoot: number;
  courage: number;
  armor: number;
  attackValue: number;
  defenceValue: number;
  shootValue: number;
  shootRange: number | string;
  movement: number;
  strengthPoints: number;
};

export type UnitOption = {
  name: string;
  description: string;
  points?: number;
  short?: string;
  remove?: string[];
  add?: string[];
  setStats?: Partial<UnitStats>;
  adjustStats?: Partial<UnitStats>;
  disabledBy?: string[];
  enabledBy?: string[];
};

export type UnitOptions = { [optionName: string]: UnitOption };

interface BaseUnit {
  name: string;
  type: string;
  points: number;
  stats: UnitStats;
  rules: string[];
  xenosRules: string[];
  freeActivations: (keyof UnitStats)[];
  customName?: string;
}

export interface Unit extends BaseUnit {
  options: string[];
}

export interface DataUnit extends BaseUnit {
  options: UnitOptions;
}

export interface CompactUnit {
  name: string;
  options: string[];
  xenosRules: string[];
  customName?: string;
}

export type XenosRule = {
  name: string;
  points: number;
  exclude_units: string[];
  description: string;
  setStats?: Partial<UnitStats>;
  adjustStats?: Partial<UnitStats>;
};

export type Rule = {
  name: string;
  description: string;
};

export type Spell = {
  name: string;
  difficulty: number;
  target: string;
  duration: string;
  effect: string;
};

export type Units = { [name: string]: DataUnit };
export type XenosRules = { [name: string]: XenosRule };
export type Rules = { [name: string]: Rule };
export type Spells = { [name: string]: Spell };

export type CustomDataElement = DataUnit | XenosRule | Rule | Spell;

export interface CustomData {
  unitData: Units;
  xenosRulesData: XenosRules;
  rulesData: Rules;
  spellData: Spells;
}

export interface Data extends CustomData {
  customData: CustomData;
}

export type Thunk = ThunkAction<void, RootState, unknown, Action<string>>;

export type Severity = 'error' | 'info' | 'success' | 'warning';

export type AppState = {
  feedback: {
    open: boolean;
    message: string;
    severity: Severity;
  };
  inputUpdate: boolean;
  autoDarkMode: boolean;
  customizeMode: boolean;
};

export type RosterUnits = Unit[];

export type RosterState = {
  name: string;
  nextID: number;
  units: RosterUnits;
};

export type CompactRosterState = {
  name: string;
  nextID: number;
  units: CompactUnit[];
};

export type UIState = {
  viewMode: boolean;
  editMode: boolean;
  darkMode: null | boolean;
  validationExpanded: boolean;
  rulesSummaryExpanded: boolean;
  spellsExpanded: boolean;
  statisticsExpanded: boolean;
};
