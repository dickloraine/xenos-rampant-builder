import { List, ListItem, Tooltip, Typography } from '@material-ui/core';
import React from 'react';
import { CommanderState, TraitData } from '../../../store/types';

const Traits: React.FC<{ commander: CommanderState; traitData: TraitData }> = ({
  commander,
  traitData,
}) => {
  const traits = commander.commanderTraits.filter(
    (trait) => !commander.removedCommanderTraits.includes(trait)
  );

  return (
    <>
      <Typography variant="subtitle1">Traits</Typography>
      <List>
        {traits.map((name) => (
          <Tooltip key={name} title={traitData[name].description}>
            <ListItem key={name}>{name}</ListItem>
          </Tooltip>
        ))}
      </List>
    </>
  );
};

export default Traits;
