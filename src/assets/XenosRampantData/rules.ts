import { Rules } from '../../store/types';
import { unitOptions } from './unitOptions';

const rulesOnly: Rules = {
  'Back Into The Fray': {
    name: 'Back Into The Fray',
    description:
      'If Elite Infantry ever fall back under fire, they are merely withdrawing to find a better position to try another assault. On the turn that a unit of Elite Infantry carries out a successful Rally action, it can also take an ordered activation, which requires an activation test even if it would normally be a Free Action.',
    short: 'Can make an ordered activation after rallying.',
  },
  'Counter-Charge': {
    name: 'Counter-Charge',
    description:
      "When an enemy infantry unit with a Maximum Movement equal to or less than this unit's Maximum Movement has successfully rolled to Attack this unit, but before it moves, this unit may test for a Counter-Charge. This is an Attack at 7+. If it succeeds, the unit charges half its Maximum Movement distance prior to the enemy unit's own charge into contact and both count as Attacking. If it fails, it stands in place for the enemy's charge and counts as Defending as normal. Counter-Charge may not be used if the unit is Suppressed.",
    short: 'On 7+ move half towards attacker and count as attacking too.',
  },
  Firefight: {
    name: 'Firefight',
    description:
      'This unit may attempt a Firefight reaction against the first enemy unit that fires on it each turn.',
    short: 'Can return fire.',
  },
  'Go To Ground': {
    name: 'Go To Ground',
    description:
      'This unit may Go To Ground as a Move action, instead of moving, which grants them +1 Armour against incoming Shooting, in addition to any benefits from cover. If subjected to an Attack while Gone To Ground, the unit’s Defence Value is treated as 5+.',
    short: 'Go To Ground as a Move action. +1 armor vs shooting, defense value 5+.',
  },
  'Hard to Target': {
    name: 'Hard to Target',
    description:
      'The unit counts as armor 2 versus Shoot actions and may only be targeted by enemy units within 12".',
    short: 'Armor 2 vs shooting, may only targeted by units in 12".',
  },
  'Line-Breaker': {
    name: 'Line-Breaker',
    description:
      'This unit is not slowed by linear obstacles such as barricades, barbed wire, low walls, fences or trench parapets. In the case of obstacles that could plausibly be crushed beneath the vehicle, you can remove an appropriately sized stretch of the obstacle after the unit passes over it.',
    short: 'Can move through linear obstacles.',
  },
  'Never Attacks': {
    name: 'Never Attacks',
    description:
      'Support Infantry cannot use Attack actions. Should they somehow acquire the Wild Charge rule and be required to act in the Wild Charge phase, they will attempt a Shoot action at the target instead of Attack.',
    short: 'Can not attack.',
  },
  'Open Order': {
    name: 'Open Order',
    description: 'This unit does not halve its movement in rough terrain.',
    short: 'Move normally through rough terrain.',
  },
  Ranger: {
    name: 'Ranger',
    description:
      'This unit uses its normal Attack/Defence/armor profile when fighting in rough terrain.',
    short:
      'Use the normal Attack/Defence/armor profile when fighting in rough terrain.',
  },
  Skirmish: {
    name: 'Skirmish',
    description:
      'As an ordered activation, successful on a 7+, this unit may choose to both Move up to half its Maximum Movement and Shoot, in either order. This unit treats its Shoot Value as 6+ / 12" when Skirmishing.',
    short: 'On 7+ half move and shoot. Shoot value 6+ /12".',
  },
  Spotters: {
    name: 'Spotters',
    description:
      'If a unit of Support Infantry targets an enemy that is within 12" of a friendly unit that has not been activated this turn, that friendly unit may forgo its action this turn to act as spotters. Spotters improve the Support Infantry\'s Shoot Value to 3+ for this action only. Unless the Support Infantry has the Indirect Fire option, it must be able to draw line of sight to the enemy as normal.',
    short:
      'Shooting value of 3+ against enemies in 12" of friendly unit which forgoes its activation.',
  },
  Vehicle: {
    name: 'Vehicle',
    description: 'This unit is a vehicle and subject to all the relevant rules.',
  },
  'Wild Charge': {
    name: 'Wild Charge',
    description:
      'If the unit is within Attack range of an enemy unit, you must test to activate an Attack; this is the only order the unit can be given. Wild Charge may not be used if the unit is Battered.',
    short: 'Unit must attack if able.',
  },
};

const options: Rules = Object.entries(unitOptions).reduce(
  (acc, [key, val]) => ({
    ...acc,
    [key]: { name: val.name, description: val.description, short: val.short },
  }),
  {}
);

export const rulesData: Rules = { ...rulesOnly, ...options };
