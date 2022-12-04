import { XenosRules } from 'store/types';

export const xenosRulesData: XenosRules = {
  Commander: {
    name: 'Commander',
    points: 0,
    exclude_units: [],
    description: 'The commander of the army.',
  },
  'Boarding Shields': {
    name: 'Boarding Shields',
    points: 2,
    exclude_units: ['Militia Rabble'],
    description:
      'Troops armed with Boarding Shields improve their Defence Value characteristic by 1 (e.g. from 4+ to 3+), and also gain +1 Armour against Shoot actions and Firefight reactions.',
    adjustStats: {
      defenceValue: -1,
    },
  },
  'Brutal Leader': {
    name: 'Brutal Leader',
    points: 2,
    exclude_units: ['Militia Rabble'],
    description:
      'This unit, plus any other friendly units within 6", may re-roll failed Courage tests (including for Rallying), once per test. This effect only applies if the Brutal Leader’s unit is not Suppressed (therefore this rule cannot be used to Rally the Brutal Leader’s own unit). A unit re-rolling a test because of a Brutal Leader will automatically lose a Strength Point. This Strength Point loss is in addition to any caused by failed Courage tests and does not cause further Courage tests.',
  },
  'Cloaking Device': {
    name: 'Cloaking Device',
    points: 3,
    exclude_units: ['Militia Rabble', 'Recon Infantry'],
    description:
      'The unit may only be targeted by ranged attacks within 12" and gains +1 Armour against Shoot actions and Firefight reactions. Psychic powers and Attacks work as normal against cloaked units.',
  },
  'Combat Medic': {
    name: 'Combat Medic',
    points: 2,
    exclude_units: ['Militia Rabble'],
    description:
      'Should the unit, or a friendly one within 6", lose Strength Points (except as the result of a failed Courage test or the Brutal Leader xeno rule), roll one die. Subtract 1 from the result if the unit with Combat Medic is at half Strength Points or below. On a roll of 4+, reduce the number of Strength Points lost by one. Combat Medic has no effect on units with the Demonic, Mechanoid, or Undead xeno rules (unless the unit with Combat Medic also has the matching xeno rule), and cannot be used when the unit with Combat Medic is Suppressed.',
  },
  Contagious: {
    name: 'Contagious',
    points: 1,
    exclude_units: [],
    description:
      'Demonic or Undead infantry units only. Every time this unit inflicts Strength Point loss on an enemy infantry unit during an Attack (whether Attacking or Defending), the Contagious unit regains one Strength Point that it has lost during the game.',
  },
  Crusader: {
    name: 'Crusader',
    points: 4,
    exclude_units: [
      'Militia Rabble',
      'Recon Infantry',
      'Berserk Infantry',
      'Soft-skin Vehicle',
    ],
    description:
      'Pick a target for the Crusader’s wrath: units with the Demonic, Mechanoid, or Undead xeno rule, or a particular species of alien (including, for aliens, humans), are all applicable choices. Followers of another religion, so long as that would be obvious on the battlefield such as in a war between two cults, is also a possibility. A Crusader unit may re-roll all misses once during Shooting and Attacks, including in Firefights and while Defending, when fighting against a unit of the targeted type. A Crusader may choose to ignore the effects caused by Fearsome units of the targeted type. The 4-point cost only applies when playing against a Detachment with one or more units of the targeted type present.',
  },
  'Crusader 0': {
    name: 'Crusader 0',
    points: 0,
    exclude_units: [
      'Militia Rabble',
      'Recon Infantry',
      'Berserk Infantry',
      'Soft-skin Vehicle',
    ],
    description:
      'Pick a target for the Crusader’s wrath: units with the Demonic, Mechanoid, or Undead xeno rule, or a particular species of alien (including, for aliens, humans), are all applicable choices. Followers of another religion, so long as that would be obvious on the battlefield such as in a war between two cults, is also a possibility. A Crusader unit may re-roll all misses once during Shooting and Attacks, including in Firefights and while Defending, when fighting against a unit of the targeted type. A Crusader may choose to ignore the effects caused by Fearsome units of the targeted type. The 0-point cost only applies when playing against a Detachment with none of the targeted type present.',
  },
  Demonic: {
    name: 'Demonic',
    points: 0,
    exclude_units: [],
    description:
      'Demonic units have the following additional rules: Ignore the effects of Stun Weapons. Ignore the effects of Fearsome units. Count as having the Fearsome xeno rule, at no extra cost. Enemies who target Demonic units with psychic powers gain a +2 modifier to their  activation roll. Any Strength Point loss inflicted on other Demonic units is doubled. A Demonic unit that has lost any of its starting Strength Points counts as having the Unstable xeno rule.',
  },
  'Exploder 1': {
    name: 'Exploder 1',
    points: 1,
    exclude_units: ['Militia Rabble', 'Recon Infantry'],
    description:
      'The unit acts as normal until it explodes. Units with the 1-point version of this xeno rule will explode upon reaching 0 Strength Points, but before any models are removed from the table. Removal from the table by any other means (such as routing) means that the unit does not explode. When the unit explodes, the explosion affects all buildings and units – friend and foe alike – within a 6" radius of the exploding unit. This works as a Shoot action hitting on a 3+ (the number of dice rolled is equal to the Exploder’s Strength Points immediately prior to the action triggering the explosion), but you should roll separately for each unit within the blast zone. Once exploded, the Exploder unit is removed the table and counts as destroyed.',
  },
  'Exploder 2': {
    name: 'Exploder 2',
    points: 2,
    exclude_units: ['Militia Rabble', 'Recon Infantry'],
    description:
      'The unit acts as normal until it explodes. Units with the 2-point version only explode by choice, as an ordered activation successful on a 5+. A failed activation test means that only a partial detonation occurs, destroying the unit but without harming anyone else. Remove the unit from play as a casualty. When the unit explodes, the explosion affects all buildings and units – friend and foe alike – within a 6" radius of the exploding unit. This works as a Shoot action hitting on a 3+ (the number of dice rolled is equal to the Exploder’s Strength Points immediately prior to the action triggering the explosion), but you should roll separately for each unit within the blast zone. Once exploded, the Exploder unit is removed the table and counts as destroyed.',
  },
  'Fanatical Discipline': {
    name: 'Fanatical Discipline',
    points: 2,
    exclude_units: ['Militia Rabble'],
    description:
      'This unit is courageous to the point of foolhardiness. Improve its Courage score by 1, to a maximum of 3+. For example, a unit with Courage 5+ becomes Courage 4+.',
    adjustStats: {
      courage: -1,
    },
  },
  Fearsome: {
    name: 'Fearsome',
    points: 2,
    exclude_units: [],
    description:
      'Courage tests caused as the result of an Attack (but not Shooting) by a Fearsome unit suffer an additional -1 to the total. Fearsome does not apply when the Fearsome unit is the Defender. Demonic, Mechanoid, and Undead units, and those with the Fearsome xeno rule themselves, are not frightened of Fearsome opponents.',
  },
  Fearful: {
    name: 'Fearful',
    points: -1,
    exclude_units: ['Militia Rabble'],
    description:
      'Every Courage and Rally test suffers -1 to the total; if Attacked by a Fearsome unit, Courage tests are taken at -2.',
  },
  Flying: {
    name: 'Flying',
    points: 2,
    exclude_units: ['Militia Rabble'],
    description:
      'A Flying unit may move over friends and enemies during its movement, but at the end of its move must adhere to the 1" proximity rule just like any other unit. Line of sight can be drawn to or from Flying units from anywhere on the tabletop, except where that passes through the roofs of buildings, forest canopies, or other forms of overhead cover; assume Flying units are positioned well above the table. Flying units can always draw line of sight to other Flying units.Flying units ignore all terrain for Moving and Attacking, and they never benefit from cover. Units targeted by a Flying unit will only benefit from cover if it is a building, woods, or some other overhead cover. Flying units cannot be Attacked by units that do not also possess the Flying xeno rule, but can be targeted by Shooting. When Retreating, a Flying unit moves its full Maximum Movement.',
  },
  'Force field 1': {
    name: 'Force field 1',
    points: 1,
    exclude_units: ['Militia Rabble'],
    description:
      'When the unit loses Strength Points to Shooting (but not during Attacks), roll a die for each lost Strength Point. For each 6 rolled, reduce the number of Strength Points lost by one.',
  },
  'Force field 2': {
    name: 'Force field 2',
    points: 2,
    exclude_units: ['Militia Rabble'],
    description:
      'When the unit loses Strength Points to Shooting (but not during Attacks), roll a die for each lost Strength Point. For each 5 or 6 rolled, reduce the number of Strength Points lost by one.',
  },
  'Force field 3': {
    name: 'Force field 3',
    points: 3,
    exclude_units: ['Militia Rabble'],
    description:
      'When the unit loses Strength Points to Shooting or during Attacks, roll a die for each lost Strength Point. For each 5 or 6 rolled, reduce the number of Strength Points lost by one.',
  },
  Hatred: {
    name: 'Hatred',
    points: 1,
    exclude_units: [],
    description:
      'Before deployment, pick a target for your unit’s Hatred. Units with Hatred gain the Wild Charge special rule against enemy units they hate. Units with Hatred that already have the Wild Charge special rule automatically pass their Wild Charge tests against enemy units they hate.',
  },
  'Hive Mind': {
    name: 'Hive Mind',
    points: 1,
    exclude_units: ['Militia Rabble'],
    description:
      'While the Detachment’s Commander is on the table and not Suppressed, all friendly units that have the Hive Mind xeno rule are counted as if they were within 12" of the Commander model. If a unit with the Hive Mind rule is actually within 12" of the Commander model, they also count as being Courage 0+. A Commander unit may not take this xeno rule.',
  },
  Immobile: {
    name: 'Immobile',
    points: -2,
    exclude_units: ['Militia Rabble'],
    description:
      'As Immobile units cannot take Move actions, they cannot board or disembark a transport vehicle. Immobile units cannot move onto the table after the start of Turn 1, unless they also have the Special Insertion xeno rule to enter play.',
  },
  Infiltrators: {
    name: 'Infiltrators',
    points: 1,
    exclude_units: ['Militia Rabble'],
    description:
      'After deployment, but prior to the start of the game, each unit of Infiltrators may make a single Move activation. This Move action does not require an activation test and you may roll a die and increase the number of inches each unit can move by the result. A unit of Infiltrators cannot use its pre-game Move action to embark or disembark from a vehicle. If both players have Infiltrators, the attacker should move all of their Infiltrators first.',
  },
  'Inspirational Leader': {
    name: 'Inspirational Leader',
    points: 2,
    exclude_units: ['Militia Rabble'],
    description:
      'This unit, plus any other friendly units within 6”, may re-roll failed Courage tests (including Rallying), once per test. This effect only applies if the Inspirational Leader’s unit is not Suppressed.',
  },
  Mechanoid: {
    name: 'Mechanoid',
    points: 0,
    exclude_units: [],
    description:
      'Ignore the effects of Stun Weapons. Each unit may have an additional Free Action from the following: Attack, Move or Shoot. However, they suffer a -1 modifier to any ordered activation tests. Mechanoids never take Courage tests, and so never become Suppressed or forced to rout. Mechanoid units at half Strength Points or below lose all their Free Actions; such actions then count as ordered activations. Furthermore, a Mechanoid unit at half Strength Points or below that rolls a double on a failed activation roll suffers a critical system failure and undergoes emergency shutdown; immediately counting as destroyed.',
  },
  Mercenary: {
    name: 'Mercenary',
    points: -1,
    exclude_units: ['Militia Rabble'],
    description: 'See rulebook.',
  },
  'Mono-Molecular Blades': {
    name: 'Mono-Molecular Blades',
    points: 2,
    exclude_units: ['Militia Rabble'],
    description:
      'When fighting during Attacks, whether as Attacker or Defender, any 6s rolled by this unit count as two hits, rather than the usual one.',
  },
  Regeneration: {
    name: 'Regeneration',
    points: 1,
    exclude_units: ['Militia Rabble'],
    description:
      'As an ordered activation, succeeding on a 7+, this unit can restore 1 Strength Point it has previously lost, for any reason, during the game. This cannot take the unit above its initial Strength Point total.',
  },
  'Psychic 1': {
    name: 'Psychic 1',
    points: 1,
    exclude_units: ['Militia Rabble', 'Berserk Infantry', 'Soft-skin Vehicle'],
    description: 'The unit has access to one psychic power.',
  },
  'Psychic 2': {
    name: 'Psychic 2',
    points: 2,
    exclude_units: ['Militia Rabble', 'Berserk Infantry', 'Soft-skin Vehicle'],
    description: 'The unit has access to two psychic powers.',
  },
  'Psychic 3': {
    name: 'Psychic 3',
    points: 3,
    exclude_units: ['Militia Rabble', 'Berserk Infantry', 'Soft-skin Vehicle'],
    description: 'The unit has access to three psychic powers.',
  },
  'Psychic 4': {
    name: 'Psychic 4',
    points: 4,
    exclude_units: ['Militia Rabble', 'Berserk Infantry', 'Soft-skin Vehicle'],
    description:
      'The unit has access to three psychic powers and increases the range of all powers by 6".',
  },
  'Psychic Hazards': {
    name: 'Psychic Hazards',
    points: -1,
    exclude_units: ['Militia Rabble', 'Berserk Infantry', 'Soft-skin Vehicle'],
    description:
      'Psychic units only. A unit with the Psychic Hazards xeno rule will suffer Strength Point loss if it rolls a double on an activation test to Manifest a psychic power. If the activation test is successful, the power is still Manifested, although should the Manifesting unit be Suppressed or destroyed by the loss of Strength Points, any effects of the psychic power will end immediately. The number of Strength Points lost is equal to the number rolled on one of the activation test dice.',
  },
  'Psychic Resistance': {
    name: 'Psychic Hazards',
    points: 1,
    exclude_units: ['Militia Rabble'],
    description:
      'If this unit is successfully targeted by a psychic power, whether friendly or hostile, roll one die. On a result of 4 or more, the psychic power has no effect. The activation roll used to Manifest the power still counts as a success.',
  },
  'Psychic Species 1': {
    name: 'Psychic Species 1',
    points: 1,
    exclude_units: ['Militia Rabble', 'Berserk Infantry', 'Soft-skin Vehicle'],
    description:
      'Psychic units only. Psychic powers of Difficulty 6+ can be Manifested as a Free Action.',
  },
  'Psychic Species 2': {
    name: 'Psychic Species 2',
    points: 2,
    exclude_units: ['Militia Rabble', 'Berserk Infantry', 'Soft-skin Vehicle'],
    description:
      'Psychic units only. Psychic powers of Difficulty 6+ or 7+ can be Manifested as a Free Action.',
  },
  'Psychic Species 3': {
    name: 'Psychic Species 3',
    points: 3,
    exclude_units: ['Militia Rabble', 'Berserk Infantry', 'Soft-skin Vehicle'],
    description:
      'Psychic units only. All Psychic powers can be Manifested as a Free Action.',
  },
  Skimmer: {
    name: 'Skimmer',
    points: 1,
    exclude_units: ['Militia Rabble'],
    description:
      'When it moves, including during Retreats and Attacks, the unit can ignore rough and impassable terrain, gliding straight over it. The unit may not end its move in  impassable terrain.',
  },
  Slow: {
    name: 'Slow',
    points: -1,
    exclude_units: ['Militia Rabble'],
    description:
      'Reduce the units Maximum Movement value by 2". This cannot be combined with the Mobile option available to some units.',
    adjustStats: {
      movement: -2,
    },
  },
  'Special Insertion': {
    name: 'Special Insertion',
    points: 1,
    exclude_units: [],
    description:
      'Special Insertion units begin the game in reserve and are not deployed with the rest of your Detachment. They deploy in one of two ways: 1. A Psychic unit that successfully Manifests the Summoner psychic power can place a single Special Insertion unit anywhere within 12" of themselves, but at least 6" away from any enemy units. 2. A Special Insertion unit can be activated while off the table, but it can only make an ordered Move activation (even if Move is normally a Free Action for it). If successful, place the unit anywhere on the table, so long as it is not within 6” of an enemy unit. If unsuccessful, the unit can still be placed on the table, but if you do, you must roll a die and compare it to the unit’s Courage; if you roll below the unit’s Courage, it suffers the die result in Strength Point damage, which causes an immediate Courage test. You can choose not to deploy a Special Insertion unit on a failed activation test and not have it suffer any Strength Point damage',
  },
  'Stabilised Weaponry': {
    name: 'Stabilised Weaponry',
    points: 2,
    exclude_units: ['Militia Rabble'],
    description:
      'Infantry only. Units with Stabilised Weaponry can Move and Shoot as an ordered activation in the same way as vehicles.',
  },
  'Stun Weapons': {
    name: 'Stun Weapons',
    points: 1,
    exclude_units: [],
    description:
      'his xeno rule applies to both a unit’s Attack and Shoot actions. Hits from Stun Weapons are treated as normal, but do not cause Strength Point loss. Instead, any ‘casualties’ that would have been inflicted count as double for the purposes of Courage tests. Before any dice are rolled for a given Attack or Shoot action, a unit with Stun Weapons may choose to use lethal force if it prefers. Demonic, Mechanoid, and Undead units are immune to the effects of Stun Weapons.',
  },
  'Teleport Jump': {
    name: 'Teleport Jump',
    points: 1,
    exclude_units: ['Militia Rabble'],
    description:
      'When this unit takes a Move action, it can either choose to move normally, or it can teleport. If it chooses to teleport, choose the desired direction and then roll two dice; you may move the unit any number of inches up to the result. You do not have to move the full distance but may ignore all terrain effects (including impassable terrain). If the distance rolled on the two dice is a double, the unit still moves as above, but something has gone horribly wrong during teleportation; the unit loses a number of Strength Points equal to the result of one of the dice.',
  },
  Unarmed: {
    name: 'Unarmed',
    points: -1,
    exclude_units: ['Militia Rabble'],
    description:
      'Whatever the reason, the Unarmed xeno rule changes a unit’s Shoot and Shoot Value characteristics to "-". Only units that normally have a ranged attack can take this xeno rule.',
    setStats: {
      shoot: 0,
      shootValue: 0,
      shootRange: 0,
    },
  },
  Undead: {
    name: 'Undead',
    points: 0,
    exclude_units: [],
    description:
      'Ignore the effects of Fearsome units. Ignore the effects of Stun Weapons. Courage value of 0+. This means that your unit will never become Suppressed, but will still rout on a negative Courage Test result as enough of the unit take crippling injuries that they cease to be combat effective or the force reanimating them dissipates. Any excess hits they take during Attacks are rounded up when working out how many Strength Points are lost. Shooting is resolved normally.',
  },
  Unstable: {
    name: 'Unarmed',
    points: -2,
    exclude_units: ['Militia Rabble'],
    description:
      'If this unit rolls a double on an activation roll, including for ‘out-of-sequence’ activations like Wild Charge or Firefight tests, but excluding Rally tests, the order passes or fails as normal, but the unit loses a number of Strength Points equal to the result of one of the dice.',
  },
};
