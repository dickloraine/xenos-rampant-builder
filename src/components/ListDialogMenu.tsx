import { IconButton, Tooltip, Typography } from '@mui/material';
import React from 'react';
import ListDialog from './ListDialog';

const ListDialogMenu: React.FC<{
  action: (text: string) => void;
  options: [string, JSX.Element | null][] | string[];
  title: string;
  text: string;
  icon: JSX.Element;
  showText?: boolean;
  onClose?: () => void;
  onOpen?: () => void;
}> = ({ action, options, title, text, icon, showText, onClose, onOpen }) => {
  return (
    <ListDialog
      action={action}
      onOpen={onOpen}
      anchor={
        <>
          <Tooltip title={text}>
            <IconButton color="inherit" aria-label={text} size="large">
              {icon}
            </IconButton>
          </Tooltip>
          {showText && <Typography>{text}</Typography>}
        </>
      }
      options={options}
      title={title}
      onClose={onClose}
    />
  );
};

export default ListDialogMenu;
