import {
  InputLabel,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
} from '@mui/material';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
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
        <SelectElement
          size="small"
          name={'stats.' + stat}
          type="number"
          options={data.range}
        />
      </TableCell>
    </>
  );
};

const UnitsFormStats = () => {
  const theme = useTheme();
  const isPhone = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <>
      <InputLabel id="stats-label" sx={{ mt: 2 }}>
        Stats
      </InputLabel>
      <TableContainer>
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
