import range from './range';

const statData: {
  [stat: string]: { name: string; shortName: string; range: number[]; suffix: string };
} = {
  attack: {
    name: 'Attack',
    shortName: 'A',
    range: range(2, 12),
    suffix: '+',
  },
  attackValue: {
    name: 'Attack Value',
    shortName: 'AV',
    range: range(2, 6),
    suffix: '+',
  },
  move: {
    name: 'Move',
    shortName: 'M',
    range: range(2, 12),
    suffix: '+',
  },
  defenceValue: {
    name: 'Defence Value',
    shortName: 'DV',
    range: range(2, 6),
    suffix: '+',
  },
  shoot: {
    name: 'Shoot',
    shortName: 'S',
    range: [0, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
    suffix: '+',
  },
  shootValue: {
    name: 'Shoot Value',
    shortName: 'SV',
    range: [0, 2, 3, 4, 5, 6],
    suffix: '+',
  },
  courage: {
    name: 'Courage',
    shortName: 'C',
    range: range(2, 12),
    suffix: '+',
  },
  shootRange: {
    name: 'Shooting Range',
    shortName: 'SR',
    range: [0, 6, 12, 18],
    suffix: '',
  },
  armor: {
    name: 'armor',
    shortName: 'Ar',
    range: range(0, 6),
    suffix: '',
  },
  movement: {
    name: 'Movement',
    shortName: 'MR',
    range: [2, 4, 6, 8, 10, 12, 14, 16, 18],
    suffix: '"',
  },
  strengthPoints: {
    name: 'Strength Points',
    shortName: 'SP',
    range: [6, 12],
    suffix: '',
  },
};

export default statData;
