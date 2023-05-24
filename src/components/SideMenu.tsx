import { ColorLens } from '@mui/icons-material';
import MenuIcon from '@mui/icons-material/Menu';
import {
  Divider,
  Drawer,
  IconButton,
  List,
  ListItemButton,
  Tooltip,
  Typography,
} from '@mui/material';
import React, { useCallback } from 'react';
import { useAppDispatch } from '../hooks/reduxHooks';
import { setCustomizeMode } from '../store/appStateSlice';
import About from './MenuActions/About';
import Backup from './MenuActions/Backup';
import DarkMode from './MenuActions/DarkMode';
import DeleteList from './MenuActions/DeleteList';
import ExportList from './MenuActions/ExportList';
import ImportList from './MenuActions/ImportList';
import InlineRules from './MenuActions/InlineRules';
import LoadList from './MenuActions/LoadList';
import Restore from './MenuActions/Restore';
import SaveList from './MenuActions/SaveList';

const SideMenu = () => {
  const [open, setOpen] = React.useState(false);
  const dispatch = useAppDispatch();

  const showCustomizeMenu = () => {
    dispatch(setCustomizeMode(true));
    setOpen(false);
  };

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const toggleDrawer = (open: boolean) => (event: any) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setOpen(open);
  };

  const handleClose = useCallback(() => setOpen(false), []);

  return (
    <>
      <MenuIcon onClick={toggleDrawer(true)} />
      <Drawer open={open} onClose={toggleDrawer(false)}>
        <List>
          <ListItemButton key={'Save'}>
            <SaveList onClose={handleClose} showText={true} />
          </ListItemButton>
          <ListItemButton key={'Load'}>
            <LoadList onClose={handleClose} showText={true} />
          </ListItemButton>
          <ListItemButton key={'Delete'}>
            <DeleteList onClose={handleClose} showText={true} />
          </ListItemButton>
          <Divider />
          <ListItemButton key={'Export'}>
            <ExportList onClose={handleClose} showText={true} />
          </ListItemButton>
          <ListItemButton key={'Import'}>
            <ImportList onClose={handleClose} showText={true} />
          </ListItemButton>
          <Divider />
          <ListItemButton key={'Backup'}>
            <Backup onClose={handleClose} showText={true} />
          </ListItemButton>
          <ListItemButton key={'Restore'}>
            <Restore onClose={handleClose} showText={true} />
          </ListItemButton>
          <Divider />
          <ListItemButton key={'Customize'}>
            <Tooltip title="Customize">
              <IconButton color="inherit" onClick={showCustomizeMenu} size="large">
                <ColorLens />
              </IconButton>
            </Tooltip>
            <Typography onClick={showCustomizeMenu}>Customize</Typography>
          </ListItemButton>
          <Divider />
          <ListItemButton key={'InlineRules'}>
            <InlineRules showText={true} />
          </ListItemButton>
          <ListItemButton key={'DarkMode'}>
            <DarkMode showText={true} />
          </ListItemButton>
          <ListItemButton key={'About'}>
            <About onClose={handleClose} />
          </ListItemButton>
        </List>
      </Drawer>
    </>
  );
};

export default React.memo(SideMenu);
