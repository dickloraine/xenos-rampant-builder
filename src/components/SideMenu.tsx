import { Divider, Drawer, List, ListItem } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import React, { useCallback } from 'react';
// import { useAppDispatch } from 'hooks/reduxHooks';
// import { setCustomizeMode } from 'store/appStateSlice';
import About from './About';
import Backup from './Backup';
import DarkMode from './DarkMode';
import DeleteList from './DeleteList';
import ExportList from './ExportList';
import ImportList from './ImportList';
import LoadList from './LoadList';
import Restore from './Restore';
import SaveList from './SaveList';

const SideMenu = () => {
  const [open, setOpen] = React.useState(false);
  // const dispatch = useAppDispatch();

  // const showCustomizeMenu = () => {
  //   dispatch(setCustomizeMode(true));
  //   setOpen(false);
  // };

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
          <ListItem button key={'Save'}>
            <SaveList onClose={handleClose} showText={true} />
          </ListItem>
          <ListItem button key={'Load'}>
            <LoadList onClose={handleClose} showText={true} />
          </ListItem>
          <ListItem button key={'Delete'}>
            <DeleteList onClose={handleClose} showText={true} />
          </ListItem>
          <Divider />
          <ListItem button key={'Export'}>
            <ExportList onClose={handleClose} showText={true} />
          </ListItem>
          <ListItem button key={'Import'}>
            <ImportList onClose={handleClose} showText={true} />
          </ListItem>
          <Divider />
          <ListItem button key={'Backup'}>
            <Backup onClose={handleClose} showText={true} />
          </ListItem>
          <ListItem button key={'Restore'}>
            <Restore onClose={handleClose} showText={true} />
          </ListItem>
          <Divider />
          {/* <ListItem button key={'FR'}>
            <Tooltip title="Customize">
              <IconButton color="inherit" onClick={showCustomizeMenu}>
                <ColorLensIcon />
              </IconButton>
            </Tooltip>
            <Typography onClick={showCustomizeMenu}>Customize</Typography>
          </ListItem> */}
          <Divider />
          <ListItem button key={'DarkMode'}>
            <DarkMode showText={true} />
          </ListItem>
          <ListItem button key={'About'}>
            <About onClose={handleClose} />
          </ListItem>
        </List>
      </Drawer>
    </>
  );
};

export default React.memo(SideMenu);
