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
import { getCurrentCommander } from '../../store/rosterSlice';

const CommanderTraits: React.FC<{ rules: string[] }> = ({ rules }) => {
  const commander = useAppSelector((state) => getCurrentCommander(state));
  const traitData = useAppSelector((state) => state.data.traitData);
  const inlineRules = useAppSelector((state) => state.ui.inlineRules);

  if (rules && rules.includes('Commander') && commander) {
    const traits = commander.commanderTraits.filter(
      (trait) => !commander.removedCommanderTraits.includes(trait)
    );

    return (
      <Container>
        <Typography variant="h4">Traits</Typography>
        <List dense>
          {traits.map((name) => (
            <Tooltip key={name} title={traitData[name].description}>
              <ListItem key={name}>
                <ListItemText
                  primary={name}
                  secondary={
                    inlineRules
                      ? traitData[name]?.short || traitData[name]?.description || ''
                      : ''
                  }
                  primaryTypographyProps={{ variant: 'body2' }}
                  secondaryTypographyProps={{ sx: { whiteSpace: 'normal' } }}
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

export default CommanderTraits;
