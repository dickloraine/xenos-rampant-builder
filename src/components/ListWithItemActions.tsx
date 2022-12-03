import {
  Button,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemSecondaryAction,
  ListItemText,
  SvgIconTypeMap,
} from '@material-ui/core';
import { OverridableComponent } from '@material-ui/core/OverridableComponent';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import EditIcon from '@material-ui/icons/Edit';
import React, { FC } from 'react';

interface ListWithItemActionsProps {
  data: Object;
  actionOneName?: string;
  ActionOneIcon?: OverridableComponent<SvgIconTypeMap<{}, 'svg'>>;
  handleClickActionOne: (name: string) => void;
  actionTwoName?: string;
  ActionTwoIcon?: OverridableComponent<SvgIconTypeMap<{}, 'svg'>>;
  handleClickActionTwo: (name: string) => void;
  actionSpecialName?: string;
  ActionSpecialIcon?: OverridableComponent<SvgIconTypeMap<{}, 'svg'>>;
  handleClickSpecialAction: () => void;
}

export const ListWithItemActions: FC<ListWithItemActionsProps> = ({
  data,
  actionOneName = 'Edit',
  ActionOneIcon = EditIcon,
  handleClickActionOne,
  actionTwoName = 'Delete',
  ActionTwoIcon = DeleteForeverIcon,
  handleClickActionTwo,
  actionSpecialName = 'Add new',
  ActionSpecialIcon = AddCircleIcon,
  handleClickSpecialAction,
}) => {
  return (
    <List>
      {Object.keys(data).map((name) => (
        <ListItem id={name} key={name}>
          <ListItemIcon>
            <IconButton
              aria-label={actionOneName}
              onClick={() => handleClickActionOne(name)}
            >
              <ActionOneIcon color="primary" />
            </IconButton>
          </ListItemIcon>
          <ListItemText>{name}</ListItemText>
          <ListItemSecondaryAction>
            <IconButton
              size="small"
              aria-label={actionTwoName}
              onClick={() => handleClickActionTwo(name)}
            >
              <ActionTwoIcon color="action" />
            </IconButton>
          </ListItemSecondaryAction>
        </ListItem>
      ))}
      <ListItem id="add_fr" key="add_fr">
        <Button
          aria-label={actionSpecialName}
          startIcon={<ActionSpecialIcon color="secondary" />}
          onClick={handleClickSpecialAction}
        >
          {actionSpecialName}
        </Button>
      </ListItem>
    </List>
  );
};
