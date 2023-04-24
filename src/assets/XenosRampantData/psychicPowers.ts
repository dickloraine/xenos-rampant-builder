import { PsychicPowers } from '../../store/types';

export const psychicPowers: PsychicPowers = {
  'Mental Command': {
    name: 'Mental Command',
    difficulty: 6,
    target: 'Friendly unit within 18"',
    duration: "Until start of player's next activation phase, or until used.",
    effect:
      'If the target unit fails its next ordered activation, it may immediately re-roll the test once. The power’s effects end immediately, whether the re-roll is successful or not.',
  },
  'Soothed Mind': {
    name: 'Soothed Mind',
    difficulty: 6,
    target: 'Friendly unit within 18"',
    duration: "Until the start of the player's next activation phase.",
    effect: 'The target unit may re-roll all failed Courage tests once per test.',
  },
  Summoner: {
    name: 'Summoner',
    difficulty: 6,
    target: 'Any friendly unit with Special Insertion and held in reserve.',
    duration: 'Instantaneous',
    effect:
      'Place the target unit onto the table anywhere within 12" of the Manifesting unit, but at least 6” from any enemy units.',
  },
  'Psychic Healing': {
    name: 'Psychic Healing',
    difficulty: 7,
    target: 'Friendly infantry unit within 18"',
    duration: 'Instantaneous',
    effect:
      'Restore 1 lost Strength Point to a friendly infantry unit, as long as it does not have the Mechanoid xeno rule.',
  },
  'Machine Friend': {
    name: 'Machine Friend',
    difficulty: 7,
    target: 'Friendly vehicle or Mechanoid unit within 18".',
    duration: 'Instantaneous',
    effect:
      'Restore 1 lost Strength Point to a friendly vehicle unit or infantry unit with the Mechanoid xeno rule.',
  },
  'Visions of Terror': {
    name: 'Visions of Terror',
    difficulty: 7,
    target: 'Enemy unit within 18" that is not Suppressed.',
    duration: 'Until the unit Rallies.',
    effect:
      'Suppresses the target unit. May not be used on an already Suppressed unit.',
  },
  Paralysis: {
    name: 'Paralysis',
    difficulty: 7,
    target: 'Enemy unit within 18"',
    duration: 'Until the end of the target’s next activation phase.',
    effect:
      'Any movement or combat the target unit is involved in counts as in rough terrain; this does not affect any other units. If the target unit moves into ‘real’ rough terrain, movement is reduced to 1⁄4 of normal speed.',
  },
  Concealment: {
    name: 'Concealment',
    difficulty: 7,
    target: 'Self or friendly unit within 18"',
    duration: 'Until the end of the target’s next activation phase.',
    effect:
      'The target unit can only be targeted by Attacks or Shooting from within 12" of it.',
  },
  'Guiding Eye': {
    name: 'Guiding Eye',
    difficulty: 7,
    target: 'Self or friendly unit within 18"',
    duration: 'Until the start of the player’s next activation phase.',
    effect: 'The target unit may re-roll all failed Shoot or Firefight dice.',
  },
  'Guiding Hand': {
    name: 'Guiding Hand',
    difficulty: 7,
    target: 'Self or friendly unit within 18"',
    duration: 'Until the start of the player’s next activation phase.',
    effect: 'The target unit may re-roll all failed Attack or Defence dice.',
  },
  'Psychic Shield': {
    name: 'Psychic Shield',
    difficulty: 7,
    target: 'Self or friendly unit within 18"',
    duration: 'Until the start of the player’s next activation phase.',
    effect: 'The target unit’s Armour is increased by 1.',
  },
  Transportation: {
    name: 'Transportation',
    difficulty: 7,
    target: 'Self or any unit within 18"',
    duration: 'Instantaneous',
    effect:
      'Roll two dice. The target unit is moved, whether by teleportation, telekinesis, or portals ripped in space-time, up to that many inches in a direction chosen by the Manifesting unit’s player.',
  },
  Annulment: {
    name: 'Annulment',
    difficulty: 8,
    target: 'One unit currently affected by a psychic power within 18".',
    duration: 'Instantaneous',
    effect:
      'Cancel the effect of any psychic powers currently affecting the target unit with a duration other than ‘Instantaneous’.',
  },
};
