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
} from '@material-ui/core';
import { lightGreen, red } from '@material-ui/core/colors';
import {
  Theme,
  createStyles,
  makeStyles,
  useTheme,
  withStyles,
} from '@material-ui/core/styles';
import { DeleteForever } from '@material-ui/icons';
import React from 'react';
import { useAppDispatch, useAppSelector } from '../../../hooks/reduxHooks';
import { getBattles, removeBattle } from '../../../store/rosterSlice';
import EditBattle from './EditBattle';

const HeadTableCell = withStyles((theme: Theme) =>
  createStyles({
    head: {
      backgroundColor: theme.palette.primary.main,
      color: theme.palette.primary.contrastText,
    },
  })
)(TableCell);

const useStyles = makeStyles((theme: Theme) => ({
  win: {
    backgroundColor: lightGreen[100],
    color: theme.palette.common.black,
  },
  defeat: {
    backgroundColor: red[100],
    color: theme.palette.common.black,
  },
  draw: {
    backgroundColor: theme.palette.grey[100],
    color: theme.palette.common.black,
  },
  selected: {
    backgroundColor: theme.palette.secondary.light,
  },
  selectionMenu: {
    backgroundColor: theme.palette.secondary.main,
    color: theme.palette.secondary.contrastText,
    paddingLeft: '20px',
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    gap: '20px',
  },
  selectionMenuIcon: {
    color: theme.palette.secondary.contrastText,
  },
}));

export type BattleSelection = {
  commanderIndex: number;
  battleIndex: number;
};

const BattlesView = () => {
  const dispatch = useAppDispatch();
  const classes = useStyles();
  const [battles, battleSelections] = useAppSelector((state) => getBattles(state));
  const [selected, setSelected] = React.useState<number>(-1);
  const theme = useTheme();
  const isPhone = useMediaQuery(theme.breakpoints.down('xs'));

  const getResultClass = (
    selected: boolean,
    enemyVictoryPoints: number,
    victoryPoints: number
  ) =>
    selected
      ? classes.selected
      : victoryPoints > enemyVictoryPoints
      ? classes.win
      : victoryPoints < enemyVictoryPoints
      ? classes.defeat
      : classes.draw;

  if (battles.length === 0) return <></>;

  return (
    <TableContainer component={Box} marginTop="20px">
      {selected >= 0 && (
        <Box className={classes.selectionMenu}>
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
          >
            <DeleteForever className={classes.selectionMenuIcon} />
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
                  <TableCell className={resultClass} component="th" scope="row">
                    {battle.date}
                  </TableCell>
                )}
                {!isPhone && (
                  <TableCell className={resultClass}>{battle.commander}</TableCell>
                )}
                <TableCell className={resultClass}>{battle.enemy}</TableCell>
                {!isPhone && (
                  <TableCell className={resultClass}>
                    {battle.enemyVictoryPoints}
                  </TableCell>
                )}
                <TableCell className={resultClass}>{battle.victoryPoints}</TableCell>
                <TableCell className={resultClass}>
                  {battle.careerPointsGained}
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default BattlesView;
