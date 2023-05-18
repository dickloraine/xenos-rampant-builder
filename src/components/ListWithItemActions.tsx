import AddCircleIcon from '@mui/icons-material/AddCircle';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import EditIcon from '@mui/icons-material/Edit';
import {
  Button,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemSecondaryAction,
  ListItemText,
  SvgIconTypeMap,
} from '@mui/material';
import { OverridableComponent } from '@mui/material/OverridableComponent';
import { FC } from 'react';

interface ListWithItemActionsProps {
  data: object;
  actionOneName?: string;
  ActionOneIcon?: OverridableComponent<SvgIconTypeMap<object, 'svg'>>;
  handleClickActionOne: (name: string) => void;
  actionTwoName?: string;
  ActionTwoIcon?: OverridableComponent<SvgIconTypeMap<object, 'svg'>>;
  handleClickActionTwo: (name: string) => void;
  actionSpecialName?: string;
  ActionSpecialIcon?: OverridableComponent<SvgIconTypeMap<object, 'svg'>>;
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
              size="large">
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
