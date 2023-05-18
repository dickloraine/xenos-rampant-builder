import {
  Container,
  List,
  ListItem,
  ListItemText,
  Tooltip,
  Typography,
} from '@mui/material';
import React from 'react';
import { useAppSelector } from '../../hooks/reduxHooks';
import { selectAllRules } from '../../store/dataSlice';

const SpecialRules: React.FC<{ rules: string[] }> = ({ rules }) => {
  const rulesData = useAppSelector((state) => selectAllRules(state));
  const inlineRules = useAppSelector((state) => state.ui.inlineRules);

  if (rules && rules.length) {
    return (
      <Container>
        <Typography variant="h4">Special Rules</Typography>
        <List dense>
          {rules.map((r) => (
            <Tooltip key={r} title={rulesData[r]?.description || ''}>
              <ListItem key={r}>
                <ListItemText
                  primary={r}
                  secondary={(inlineRules && rulesData[r]?.short) || ''}
                  primaryTypographyProps={{ variant: 'body2' }}
                  sx={{ m: 0 }}
                />
              </ListItem>
            </Tooltip>
          ))}
        </List>
      </Container>
    );
  }
  return <></>;
};

export default SpecialRules;
