import {
  Box,
  Dialog,
  DialogContent,
  DialogTitle,
  List,
  ListItemButton,
  ListItemIcon,
} from '@mui/material';
import React from 'react';
import useOpen from '../hooks/useOpen';

const ListDialog: React.FC<{
  anchor: JSX.Element;
  action: (text: string) => void;
  options: [string, JSX.Element | null][] | string[];
  title: string;
  onClose?: () => void;
  onOpen?: () => void;
}> = ({ anchor, action, options, title, onClose, onOpen }) => {
  const [open, handleOpen, handleClose] = useOpen(false, onOpen, onClose);

  const handleOnClick = (text: string) => {
    action(text);
    handleClose();
  };

  const opts: [string, JSX.Element | null][] =
    typeof (options as string[])[0] === 'string'
      ? (options as string[]).map((o: string) => [o, null])
      : (options as [string, JSX.Element | null][]);

  return (
    <>
      <Box display="flex" alignItems="center" onClick={handleOpen}>
        {anchor}
      </Box>
      <Dialog onClose={handleClose} open={open}>
        <DialogTitle>{title}</DialogTitle>
        <DialogContent>
          <List>
            {opts.map(([text, icon]) => (
              <ListItemButton onClick={() => handleOnClick(text)} key={text}>
                {icon && <ListItemIcon>{icon}</ListItemIcon>}
                {text}
              </ListItemButton>
            ))}
          </List>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default ListDialog;
