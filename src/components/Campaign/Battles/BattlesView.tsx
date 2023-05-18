import { DeleteForever } from '@mui/icons-material';
import {
  Box,
  IconButton,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
  useMediaQuery,
} from '@mui/material';
import { lightGreen, red } from '@mui/material/colors';
import { styled, useTheme } from '@mui/material/styles';
import React from 'react';
import { useAppDispatch, useAppSelector } from '../../../hooks/reduxHooks';
import { getBattles, removeBattle } from '../../../store/rosterSlice';
import EditBattle from './EditBattle';

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
    ? { backgroundColor: 'secondary.light' }
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
        backgroundColor: 'grey[100]',
        color: 'common.black',
      };

const selectionMenu = {
  backgroundColor: 'secondary.main',
  color: 'secondary.contrastText',
  paddingLeft: '20px',
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  gap: '20px',
};

export type BattleSelection = {
  commanderIndex: number;
  battleIndex: number;
};

const BattlesView = () => {
  const dispatch = useAppDispatch();
  const [battles, battleSelections] = useAppSelector((state) => getBattles(state));
  const [selected, setSelected] = React.useState<number>(-1);
  const theme = useTheme();
  const isPhone = useMediaQuery(theme.breakpoints.down('sm'));

  if (battles.length === 0) return <></>;

  return (
    <TableContainer component={Box} marginTop="20px">
      {selected >= 0 && (
        <Box sx={selectionMenu}>
          <Typography>Actions</Typography>
          <Box flexGrow={1}></Box>
          <IconButton
            onClick={() => {
              dispatch(
                removeBattle({
                  commanderIndex: battleSelections[selected].commanderIndex,
                  battleIndex: battleSelections[selected].battleIndex,
                })
              );
              setSelected(-1);
            }}
            size="large"
          >
            <DeleteForever sx={{ color: 'secondary.contrastText' }} />
          </IconButton>
          <EditBattle
            battleSelection={{
              commanderIndex: battleSelections[selected].commanderIndex,
              battleIndex: battleSelections[selected].battleIndex,
            }}
          />
        </Box>
      )}
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
    </TableContainer>
  );
};

export default BattlesView;
