import { Container, List, ListItem, Tooltip, Typography } from '@material-ui/core';
import React from 'react';
import { useAppSelector } from '../../hooks/reduxHooks';
import { selectAllRules } from '../../store/dataSlice';

const SpecialRules: React.FC<{ rules: string[] }> = ({ rules }) => {
  const rulesData = useAppSelector((state) => selectAllRules(state));
  if (rules && rules.length) {
    return (
      <Container>
        <Typography variant="h4">Special Rules</Typography>
        <List>
          {rules.map((r) => (
            <Tooltip key={r} title={rulesData[r]?.description || ''}>
              <ListItem key={r}>{r}</ListItem>
            </Tooltip>
          ))}
        </List>
      </Container>
    );
  }
  return <></>;
};

export default SpecialRules;
