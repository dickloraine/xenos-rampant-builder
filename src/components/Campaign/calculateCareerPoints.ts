import { CommanderState, TraitData } from '../../store/types';

const calculateCareerPoints = (commander: CommanderState, traitData: TraitData) => {
  let points = commander.battles.reduce(
    (acc, battle) => acc + battle.careerPointsGained,
    commander.initialCareerPoints
  );
  points += commander.careerPointAdjustment;
  points -= commander.commanderTraits.length * 5;
  if (commander.commanderTraits.length > 0) {
    const numCategories = new Set<string>();
    commander.commanderTraits.forEach((name) =>
      numCategories.add(traitData[name].category)
    );
    points += 10 - numCategories.size * 5;
  }
  points -= commander.removedCommanderTraits.length * 10;
  points -= commander.detachmentExpansions * 10;

  return points;
};

export default calculateCareerPoints;
