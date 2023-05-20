import { List, ListItem, ListItemText, Tooltip, Typography } from '@mui/material';
import React from 'react';
import { useAppSelector } from '../../../hooks/reduxHooks';
import { CommanderState, TraitData } from '../../../store/types';

const Traits: React.FC<{ commander: CommanderState; traitData: TraitData }> = ({
  commander,
  traitData,
}) => {
  const traits = commander.commanderTraits.filter(
    (trait) => !commander.removedCommanderTraits.includes(trait)
  );
  const inlineRules = useAppSelector((state) => state.ui.inlineRules);

  return (
    <>
      <Typography variant="subtitle1">Traits</Typography>
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
    </>
  );
};

export default Traits;
