import { Container, List, ListItem, Tooltip, Typography } from '@material-ui/core';
import React from 'react';
import { useSelector } from 'react-redux';
import { selectAllRules } from 'store/dataSlice';
import { RootState } from 'store/types';

const SpecialRules: React.FC<{ rules: string[] }> = ({ rules }) => {
  const rulesData = useSelector((state: RootState) => selectAllRules(state));
  if (rules && rules.length) {
    return (
      <Container>
        <Typography variant="h6">Special Rules</Typography>
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
