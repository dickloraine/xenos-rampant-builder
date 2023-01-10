import { UnitOptions } from 'store/types';

export const unitOptions: UnitOptions = {
  'All-Terrain': {
    name: 'All-Terrain',
    points: 1,
    description: 'This unit does not halve its movement in rough terrain.',
    add: ['All-Terrain'],
  },
  'Anti-Tank': {
    name: 'Anti-Tank',
    points: 2,
    description:
      "When Shooting at enemy vehicle units (including when using the Firefight rule), count the target's armor as being half its usual value. This cannot be combined with the effects of armor-Piercing.",
    short: 'When Shooting, armor of enemy vehicle units is halved.',
    add: ['Anti-Tank'],
    disabledBy: ['Armor-Piercing'],
  },
  'Area Effect': {
    name: 'Area Effect',
    points: 1,
    description: 'Ignore cover when Shooting',
    add: ['Area Effect'],
  },
  Armored: {
    name: 'Armored',
    points: 1,
    description:
      'This unit is wearing primitive metal armor or has naturally resilient scales, plates or leathery skin. This unit counts as armor 2 when Attacking or Defending, or against Shooting attacks from Primitive Infantry or Militia Rabble only; against all other sources of harm, they are their usual armor 1.',
    add: ['Armored'],
  },
  'Armor-Piercing': {
    name: 'Armor-Piercing',
    points: 1,
    description:
      "When Shooting (including when using the Firefight rule), count the target's armor as being 1 point lower than usual.",
    short: 'When Shooting, enemy armor -1.',
    add: ['Armor-Piercing'],
    disabledBy: ['Anti-Tank'],
  },
  Artillery: {
    name: 'Artillery',
    points: 2,
    description:
      'This unit\'s Shoot Value becomes 4+ / 48". If this vehicle targets an enemy that is within 12" of a friendly unit that has not been activated this turn, the friendly unit may forgo its action this turn to act as spotters. Spotters improve the vehicle\'s Shoot Value to 3+ / 48" for this action only. Cannot be combined with Close Quarters Doctrine.',
    setStats: {
      shootRange: 48,
    },
    add: ['Artillery'],
    disabledBy: ['Close Quarters Doctrine'],
  },
  'Assault Doctrine': {
    name: "'Assault Doctrine'",
    points: 2,
    description:
      "Bayonets or more traditional melee weapons improve this unit's Attack Value by 1",
    short: 'Attack Value increased by 1.',
    adjustStats: {
      attackValue: -1,
    },
  },
  'Close Quarters Doctrine': {
    name: 'Close Quarters Doctrine',
    points: -1,
    description:
      'This unit is armed for short-range combat, reducing its Shooting Range to 12".',
    setStats: {
      shootRange: 12,
    },
    disabledBy: ['Artillery'],
  },
  'Combat Engineering Vehicle': {
    name: 'Combat Engineering Vehicle',
    points: 1,
    description:
      'This vehicle is fitted out with heavy equipment for clearing mines or demolishing obstructions. If it Attacks a building, the building only hits on Defence rolls of 6.',
    add: ['Combat Engineering Vehicle'],
  },
  'Counter-Sniper Training': {
    name: 'Counter-Sniper Training',
    points: 1,
    description:
      ' A unit with the Sniper Team option can be trained as counter-snipers. This allows them to target enemy units with the Hard to Target Special rule (usually enemy Recon Infantry) at ranges beyond 12".',
    short: 'Can target enemy units with the Hard to Target rule beyond 12".',
    add: ['Counter-Sniper Training'],
    enabledBy: ['Sniper Team'],
  },
  Demolitions: {
    name: 'Demolitions',
    points: 2,
    description:
      'During Attacks (whether Attacking or Defending), count the armor of enemy vehicle units as being half its usual value. This cannot be combined with the effects of High-Powered Blades.',
    short: 'During Attacks, armor of enemy vehicle units is halved.',
    add: ['Demolitions'],
    disabledBy: ['High-Powered Blades'],
  },
  Engulfing: {
    name: 'Engulfing',
    points: 1,
    description: "This unit's Shooting targets gain no armor bonus from cover.",
    short: 'Shooting targets gain no armor from cover.',
    add: ['Engulfing'],
  },
  'Fire Support': {
    name: 'Fire Support',
    points: 4,
    description: 'This unit can call in Fire Support as an ordered activation.',
    add: ['Fire Support'],
  },
  'Green Recons': {
    name: 'Green Recons',
    points: -1,
    description:
      'This unit cannot use the Skirmish rule. This cannot be combined with Sniper Team or Veterans.',
    short: 'This unit cannot use the Skirmish rule.',
    add: ['Green Recons'],
    disabledBy: ['Sniper Team', 'Veteran Recons'],
  },
  Guerrillas: {
    name: 'Guerrillas',
    points: 1,
    description:
      'When in soft cover, this unit increases its armor value by an additional point.',
    short: 'When in soft cover, armor +1.',
    add: ['Guerrillas'],
  },
  'Heavy Weapon': {
    name: 'Heavy Weapon',
    points: 2,
    description:
      'When Shooting (including when using the Firefight rule), any 6s count as two hits, rather than one.',
    short: 'When Shooting, any 6s count as two hits.',
    add: ['Heavy Weapon'],
  },
  'High-Powered Blades': {
    name: 'High-Powered Blades',
    points: 1,
    description:
      "During Attacks (whether Attacking or Defending), count the target's armor as being one point lower than usual.",
    short: 'During Attacks, enemy armor -1.',
    add: ['High-Powered Blades'],
    disabledBy: ['Demolitions'],
  },
  'Indirect Fire': {
    name: 'Indirect Fire',
    points: 1,
    description:
      'When using the Spotters rule, this unit may fire at targets that it cannot draw a line of sight to, as long as the unit acting as spotters can do so.',
    short: 'Can use Spotters line of sight.',
    add: ['Indirect Fire'],
  },
  Mobile: {
    name: 'Mobile',
    points: 1,
    description:
      'The use of exo-skeletons, powered armor or mounts increases this unit\'s Maximum Movement by 4". This unit still counts, for all rules purposes, as infantry. This cannot be combined with the Slow xeno rule.',
    adjustStats: {
      movement: 4,
    },
  },
  'Primitive Missiles': {
    name: 'Primitive Missiles',
    points: 1,
    description:
      'This unit is armed with javelins, bows, slings, or perhaps muskets, granting it Shoot 6+ and Shoot Value 6 / 6". However, against any opponents other than Greater or Lesser Xenomorphs, Primitive Infantry, or Militia Rabble, targets count as having one more point of armor. Cannot be combined with Savages.',
    setStats: {
      shoot: 6,
      shootValue: 6,
      shootRange: 6,
    },
    add: ['Primitive Missiles'],
    disabledBy: ['Savages'],
  },
  'Sniper Team': {
    name: 'Sniper Team',
    points: 2,
    description:
      'This unit\'s Shoot Value becomes 5+ / 24", but it cannot use the Skirmish rule. This cannot be combined with Green or Veterans.',
    short: 'This unit cannot use the Skirmish rule.',
    setStats: {
      shootValue: 5,
      shootRange: 24,
    },
    add: ['Sniper Team'],
    disabledBy: ['Green Recons', 'Veteran Recons'],
  },
  'Super Heavy armor': {
    name: 'Super Heavy armor',
    points: 2,
    description:
      "You don't think they're tough enough already? Some Elite Infantry boast carapaces more suited to an armored vehicle. Increase this unit's armor to 5, but reduce its Maximum Movement by 2\". Super-heavily armored infantry also become susceptible to the Anti-Tank and Demolitions rules, as if they were vehicles.",
    setStats: {
      armor: 5,
    },
    adjustStats: {
      movement: -2,
    },
    add: ['Super Heavy armor'],
  },
  Undisciplined: {
    name: 'Undisciplined',
    points: -1,
    description: 'The unit has Courage 5+.',
    setStats: {
      courage: 5,
    },
  },
  'Veteran Crew': {
    name: 'Veteran Crew',
    points: 2,
    description:
      'This unit can move and fire without the usual -1 penalty. This cannot be combined with Green Crew.',
    short: 'Can move and fire without the -1 penalty.',
    add: ['Veteran Crew'],
    disabledBy: ['Green Crew'],
  },
  'Veteran Recons': {
    name: 'Veteran Recons',
    points: 2,
    description:
      'This unit Skirmishes at its normal Shoot Value. This cannot be combined with Green or Sniper Team.',
    short: 'Skirmishes at the normal Shoot Value.',
    add: ['Veteran Recons'],
    disabledBy: ['Green Recons', 'Sniper Team'],
  },
  Walker: {
    name: 'Walker',
    points: 2,
    description:
      'This vehicle walks, by means bipedal, quadrupedal, or creepily crab-like. Its Maximum Movement is reduced by 2", but its Attack Value becomes 4+. Walkers are able to Storm defences if they win an Attack action, while buildings they Attack do not get to Defend.',
    setStats: {
      attackValue: 4,
    },
    adjustStats: {
      movement: -2,
    },
    add: ['Walker'],
  },
};
