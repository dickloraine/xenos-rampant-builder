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
  psiPowers?: string[];
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
  psiPowers?: string[];
}

export type XenosRule = {
  name: string;
  points: number;
  exclude_units: string[];
  description: string;
  short?: string;
  setStats?: Partial<UnitStats>;
  adjustStats?: Partial<UnitStats>;
};

export type Rule = {
  name: string;
  description: string;
  short?: string;
};

export type PsychicPower = {
  name: string;
  difficulty: number;
  target: string;
  duration: string;
  effect: string;
  short?: string;
};

export type TraitRule = {
  name: string;
  description: string;
  category: string;
  short?: string;
};
export type TraitData = { [name: string]: TraitRule };

export type Units = { [name: string]: DataUnit };
export type XenosRules = { [name: string]: XenosRule };
export type Rules = { [name: string]: Rule };
export type PsychicPowers = { [name: string]: PsychicPower };

export type CustomDataElement = DataUnit | XenosRule | Rule | PsychicPower;

export interface CustomData {
  unitData: Units;
  xenosRulesData: XenosRules;
  rulesData: Rules;
  psychicPowers: PsychicPowers;
}

export interface Data extends CustomData {
  traitData: TraitData;
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

export interface CommanderBattle {
  enemy: string;
  victoryPoints: number;
  enemyVictoryPoints: number;
  careerPointsGained: number;
  date: string;
}

export interface BattleState extends CommanderBattle {
  commander: string;
}

export type BattleStates = BattleState[];

export type CommanderState = {
  name: string;
  commanderTraits: string[];
  removedCommanderTraits: string[];
  detachmentExpansions: number;
  missesGame: boolean;
  initialCareerPoints: number;
  careerPointAdjustment: number;
  battles: CommanderBattle[];
};

export type CampaignState = {
  commanders: CommanderState[];
  retirements: number;
};

export type RosterUnits = Unit[];

export type RosterState = {
  name: string;
  units: RosterUnits;
  campaign?: CampaignState;
};

export type CompactRosterState = {
  name: string;
  units: CompactUnit[];
  campaign?: CampaignState;
};

export type UIState = {
  viewMode: boolean;
  editMode: boolean;
  printMode: boolean;
  inlineRules: boolean;
  darkMode: null | boolean;
  validationExpanded: boolean;
  rulesSummaryExpanded: boolean;
  campaignExpanded: boolean;
  powersExpanded: boolean;
  statisticsExpanded: boolean;
};
