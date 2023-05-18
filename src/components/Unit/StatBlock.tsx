import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  Typography,
} from '@mui/material';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import React from 'react';
import { UnitStats } from '../../store/types';
import statData from '../../utils/statData';

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
  const isPhone = useMediaQuery(theme.breakpoints.down('sm'));
  const cellProps = {
    stats: stats,
    freeActivations: freeActivations,
    isPhone: isPhone,
  };

  const shootingValue = stats.shoot ? `${stats.shootValue}+/${stats.shootRange}"` : '-';

  return (
    <TableContainer sx={{ mb: 2 }}>
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
