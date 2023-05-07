import { TraitData } from '../../store/types';

export const traitData: TraitData = {
  Timid: {
    name: 'Timid',
    description:
      'The Commander’s unit may not be given an Attack order (but will still make Wild Charges if applicable).',
    category: 'Aggressive',
  },
  Insipid: {
    name: 'Insipid',
    description: 'No Courage bonus to units within 12".',
    category: 'Aggressive',
  },
  'Attack, Attack, Attack!': {
    name: 'Attack, Attack, Attack!',
    description:
      'The Commander’s unit gains the Wild Charge rule; if it already has the Wild Charge rule, then it automatically passes any tests for Wild Charge.',
    category: 'Aggressive',
  },
  'Extreme Disciplinarian': {
    name: 'Extreme Disciplinarian',
    description:
      'The unit gains the Brutal Leader xeno rule, for free, with a range of 12".',
    category: 'Aggressive',
  },
  Brave: {
    name: 'Brave',
    description: 'The Commander’s unit ignores the effects of Fearsome opponents.',
    category: 'Aggressive',
  },
  'Fix Bayonets!': {
    name: 'Fix Bayonets!',
    description:
      'Each turn, one unit within 12" of your Commander model may treat Attack as a free action.',
    category: 'Aggressive',
  },
  Indecisive: {
    name: 'Indecisive',
    description:
      'Friendly units do not receive the +1 modifier to ordered activations when within 12" of the Commander.',
    category: 'Tactical',
  },
  Reactive: {
    name: 'Reactive',
    description:
      'You must subtract one from your roll to determine Attacker and Defender.',
    category: 'Tactical',
  },
  Commanding: {
    name: 'Commanding',
    description:
      'You may reroll a failed Move, Attack or Shoot order within 12" of your Commander model, once per turn.',
    category: 'Tactical',
  },
  Manoeuvres: {
    name: 'Manoeuvres',
    description:
      'Each turn, one unit within 12" of your Commander model may treat Move as a free action.',
    category: 'Tactical',
  },
  'Shooting Drill': {
    name: 'Shooting Drill',
    description:
      'Each turn, one unit within 12" of your Commander model may treat Shoot as a free action.',
    category: 'Tactical',
  },
  'Hold The Line!': {
    name: 'Hold The Line!',
    description:
      'Each turn, one unit within 12" of your Commander model may ignore a compulsory Wild Charge, and may instead take an ordered action in your ordered activation phase.',
    category: 'Tactical',
  },
  'Incompetent Paper Pusher': {
    name: 'Incompetent Paper Pusher',
    description: 'Your Detachment is 2 points smaller than it should be.',
    category: 'Strategic',
  },
  'Half-Wit': {
    name: 'Half-Wit',
    description:
      'After deployment (whether your Commander is on the table or not) roll one die for each of your units other than the Commander’s. On a roll of 1, that unit never received its orders and is immediately removed from play (not counting as casualties). Only one unit will fail to arrive per game; once a unit has been removed, stop rolling.',
    category: 'Strategic',
  },
  Wise: {
    name: 'Wise',
    description:
      'You may add or subtract 1 from your final total when rolling to decide Attacker and Defender.',
    category: 'Strategic',
  },
  'Father To His Men': {
    name: 'Father To His Men',
    description:
      'You may reroll a Courage test within 12” of your Commander, once per turn.',
    category: 'Strategic',
  },
  Unpredictable: {
    name: 'Unpredictable',
    description:
      'In games where you deploy before the other player, you may swap the positions of up to three units after the other player has deployed. All units must occupy the space vacated by another of the units that has been redeployed.',
    category: 'Strategic',
  },
  Logistician: {
    name: 'Logistician',
    description: 'You can spend 2 extra points on your Detachment.',
    category: 'Strategic',
  },
  Runt: {
    name: 'Runt',
    description:
      'Your Commander’s unit rolls one fewer die for all Attack and Shoot actions',
    category: 'Warlord',
  },
  Craven: {
    name: 'Craven',
    description: 'Your Commander’s unit takes -1 to all Courage tests',
    category: 'Warlord',
  },
  Elite: {
    name: 'Elite',
    description:
      'The Commander’s unit may take one of Move, Shoot, or Attack as an additional free action.',
    category: 'Warlord',
  },
  'Strong-Willed': {
    name: 'Strong-Willed',
    description: 'Your Commander’s unit may not be targeted by enemy psychic powers.',
    category: 'Warlord',
  },
  'Crack Shot': {
    name: 'Crack Shot',
    description:
      'When shooting (whether as a Shoot action or when using the Firefight rule), your Commander’s unit may reroll up to two failed hit dice.',
    category: 'Warlord',
  },
  Champion: {
    name: 'Champion',
    description:
      'During Attacks (whether attacking or defending), your Commander’s unit may reroll up to two failed hit dice.',
    category: 'Warlord',
  },
};
