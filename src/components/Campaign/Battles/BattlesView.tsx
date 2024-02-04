import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  useMediaQuery,
} from '@mui/material';
import { grey, lightGreen, red } from '@mui/material/colors';
import { styled, useTheme } from '@mui/material/styles';
import React from 'react';
import { BattleStates } from '../../../store/types';

const HeadTableCell = styled(TableCell)(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  color: theme.palette.primary.contrastText,
}));

const getResultClass = (
  selected: boolean,
  enemyVictoryPoints: number,
  victoryPoints: number
) =>
  selected
    ? { backgroundColor: 'secondary.light', color: 'common.black' }
    : victoryPoints > enemyVictoryPoints
    ? {
        backgroundColor: lightGreen[100],
        color: 'common.black',
      }
    : victoryPoints < enemyVictoryPoints
    ? {
        backgroundColor: red[100],
        color: 'common.black',
      }
    : {
        backgroundColor: grey[300],
        color: 'common.black',
      };

const BattlesView = ({
  selected,
  setSelected,
  battles,
}: {
  selected: number;
  setSelected: React.Dispatch<React.SetStateAction<number>>;
  battles: BattleStates;
}) => {
  const theme = useTheme();
  const isPhone = useMediaQuery(theme.breakpoints.down('sm'));

  if (battles.length === 0) return <></>;

  return (
    <Table aria-label="battles table" size={isPhone ? 'small' : 'medium'}>
      {selected < 0 && (
        <TableHead>
          <TableRow>
            {!isPhone && <HeadTableCell>Date</HeadTableCell>}
            {!isPhone && <HeadTableCell>Commander</HeadTableCell>}
            <HeadTableCell>Enemy</HeadTableCell>
            {!isPhone && <HeadTableCell>Enemy VP</HeadTableCell>}
            <HeadTableCell>VP</HeadTableCell>
            <HeadTableCell>CP</HeadTableCell>
          </TableRow>
        </TableHead>
      )}
      <TableBody>
        {battles.map((battle, index) => {
          const resultClass = getResultClass(
            index === selected,
            battle.enemyVictoryPoints,
            battle.victoryPoints
          );
          return (
            <TableRow
              key={battle.date + battle.enemy + battle.victoryPoints + index}
              onClick={() =>
                selected === index ? setSelected(-1) : setSelected(index)
              }
              selected={index === selected}
            >
              {!isPhone && (
                <TableCell sx={resultClass} component="th" scope="row">
                  {battle.date}
                </TableCell>
              )}
              {!isPhone && <TableCell sx={resultClass}>{battle.commander}</TableCell>}
              <TableCell sx={resultClass}>{battle.enemy}</TableCell>
              {!isPhone && (
                <TableCell sx={resultClass}>{battle.enemyVictoryPoints}</TableCell>
              )}
              <TableCell sx={resultClass}>{battle.victoryPoints}</TableCell>
              <TableCell sx={resultClass}>{battle.careerPointsGained}</TableCell>
            </TableRow>
          );
        })}
      </TableBody>
    </Table>
  );
};

export default BattlesView;
