import {
  InputLabel,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
} from '@material-ui/core';
import { useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import React from 'react';
// import { FormContainer, MultiSelectElement } from 'react-hook-form-mui';
import { SelectElement } from '../../../libs/react-hook-form-mui';
import { UnitStats } from '../../../store/types';
import statData from '../../../utils/statData';

const SelectStat: React.FC<{
  stat: keyof UnitStats;
  isPhone: boolean;
}> = ({ stat, isPhone }) => {
  const data = statData[stat];

  return (
    <>
      <TableCell>{isPhone ? data.shortName : data.name}</TableCell>
      <TableCell>
        <SelectElement name={'stats.' + stat} type="number" options={data.range} />
      </TableCell>
    </>
  );
};

const UnitsFormStats = () => {
  const theme = useTheme();
  const isPhone = useMediaQuery(theme.breakpoints.down('xs'));

  return (
    <>
      <InputLabel id="stats-label" style={{ marginTop: 15 }}>
        Stats
      </InputLabel>
      <TableContainer style={{ marginBottom: 15 }}>
        <Table size="small">
          <TableBody>
            <TableRow>
              <SelectStat stat="attack" isPhone={isPhone} />
              <SelectStat stat="attackValue" isPhone={isPhone} />
            </TableRow>
            <TableRow>
              <SelectStat stat="move" isPhone={isPhone} />
              <SelectStat stat="defenceValue" isPhone={isPhone} />
            </TableRow>
            <TableRow>
              <SelectStat stat="shoot" isPhone={isPhone} />
              <SelectStat stat="shootValue" isPhone={isPhone} />
            </TableRow>
            <TableRow>
              <SelectStat stat="courage" isPhone={isPhone} />
              <SelectStat stat="shootRange" isPhone={isPhone} />
            </TableRow>
            <TableRow>
              <SelectStat stat="armor" isPhone={isPhone} />
              <SelectStat stat="movement" isPhone={isPhone} />
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default UnitsFormStats;
