import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  Typography,
} from '@material-ui/core';
import { useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import React from 'react';
import { UnitStats } from 'store/types';
import statData from 'utils/statData';

const StatCells: React.FC<{
  stat: keyof UnitStats;
  stats: UnitStats;
  freeActivations: (keyof UnitStats)[];
  isPhone: boolean;
  overrideValue?: string;
}> = ({ stat, stats, freeActivations, isPhone, overrideValue }) => {
  const data = statData[stat];
  const value = overrideValue || (stats[stat] ? stats[stat] + data.suffix : '-');

  return (
    <>
      <TableCell>{isPhone ? data.shortName : data.name}</TableCell>
      {freeActivations.includes(stat) ? (
        <TableCell>
          <Typography color="secondary" variant="inherit">
            {value}
          </Typography>
        </TableCell>
      ) : (
        <TableCell>{value}</TableCell>
      )}
    </>
  );
};

const StatBlock: React.FC<{
  stats: UnitStats;
  freeActivations: (keyof UnitStats)[];
}> = ({ stats, freeActivations }) => {
  const theme = useTheme();
  const isPhone = useMediaQuery(theme.breakpoints.down('xs'));
  const cellProps = {
    stats: stats,
    freeActivations: freeActivations,
    isPhone: isPhone,
  };

  let shootingValue = stats.shoot ? `${stats.shootValue}+/${stats.shootRange}"` : '-';

  return (
    <TableContainer style={{ marginBottom: 20 }}>
      <Table size="small">
        <TableBody>
          <TableRow>
            <StatCells stat="attack" {...cellProps} />
            <StatCells stat="attackValue" {...cellProps} />
          </TableRow>
          <TableRow>
            <StatCells stat="move" {...cellProps} />
            <StatCells stat="defenceValue" {...cellProps} />
          </TableRow>
          <TableRow>
            <StatCells stat="shoot" {...cellProps} />
            <StatCells stat="shootValue" overrideValue={shootingValue} {...cellProps} />
          </TableRow>
          <TableRow>
            <StatCells stat="courage" {...cellProps} />
            <StatCells stat="movement" {...cellProps} />
          </TableRow>
          <TableRow>
            <StatCells stat="armor" {...cellProps} />
            <StatCells stat="strengthPoints" {...cellProps} />
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default StatBlock;
