import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  IconButton,
  InputLabel,
  List,
  ListItem,
  ListItemSecondaryAction,
  ListItemText,
  Menu,
  MenuItem,
  Select,
  TextField,
} from '@material-ui/core';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import produce from 'immer';
import React from 'react';
import { useSelector } from 'react-redux';
import useAnchor from '../../hooks/useAnchor';
import { DataUnit, RootState, UnitOption, UnitStats } from '../../store/types';
import range from '../../utils/range';
import statData from '../../utils/statData';

const OptionsForm: React.FC<{
  open: boolean;
  handleClose: () => void;
  name: string;
  option: UnitOption;
  unit: DataUnit;
  changeState: (value: React.SetStateAction<DataUnit>) => void;
  changeName: (name: string) => void;
  changeOption: (option: UnitOption) => void;
}> = ({
  open,
  handleClose,
  name,
  option,
  unit,
  changeState,
  changeName,
  changeOption,
}) => {
  const specialRules = useSelector((state: RootState) => state.data.rulesData);
  const [anchorSetStat, handleClickSetStat, handleCloseSetStat] = useAnchor();
  const [anchorAdjustStat, handleClickAdjustStat, handleCloseAdjustStat] = useAnchor();

  const onClickSetStat = (name: keyof UnitStats) => () => {
    changeOption({
      ...option,
      setStats: {
        ...option.setStats,
        [name]: 4,
      },
    });
    handleCloseSetStat();
  };

  const onClickAdjustStat = (name: keyof UnitStats) => () => {
    changeOption({
      ...option,
      adjustStats: {
        ...option.adjustStats,
        [name]: 0,
      },
    });
    handleCloseAdjustStat();
  };

  const handleAction = () => {
    changeState({
      ...unit,
      options: { ...unit.options, [name]: option },
    });
    handleClose();
  };

  return (
    <Dialog onClose={handleClose} open={open}>
      <DialogTitle>Option</DialogTitle>
      <DialogContent>
        {/* ---------------------------------- Name --------------------------------- */}
        <TextField
          label="Name"
          type="text"
          margin="normal"
          fullWidth
          value={name}
          onChange={(e) => changeName(e.target.value)}
          error={name === ''}
          helperText="You have to choose a name!"
        />
        {/* --------------------------------- Points -------------------------------- */}
        <TextField
          label="Points"
          margin="normal"
          type="number"
          select
          SelectProps={{
            value: option.points,
            onChange: (e) =>
              changeOption({
                ...option,
                points: e.target.value as number,
              }),
          }}
        >
          {range(-4, 6).map((value) => (
            <MenuItem key={value} value={value}>
              {value}
            </MenuItem>
          ))}
        </TextField>
        {/* -------------------------------- Summary -------------------------------- */}
        <TextField
          label="Description"
          type="text"
          margin="normal"
          fullWidth
          multiline
          value={option.description || ''}
          onChange={(e) =>
            changeOption({
              ...option,
              description: e.target.value,
            })
          }
        />
        {/* ------------------------------ Remove Rules ----------------------------- */}
        <InputLabel id="remove-rules-label" style={{ marginTop: 15 }}>
          Remove Rules
        </InputLabel>
        <Select
          multiple
          id="remove-rules"
          labelId="remove-rules-label"
          value={option.remove || []}
          onChange={(e) =>
            changeOption({ ...option, remove: e.target.value as string[] })
          }
        >
          {unit.rules.map((rule) => (
            <MenuItem key={rule} value={rule}>
              {rule}
            </MenuItem>
          ))}
        </Select>
        {/* ------------------------------- Add Rules ------------------------------- */}
        <InputLabel id="add-rules-label" style={{ marginTop: 15 }}>
          Add Rules
        </InputLabel>
        <Select
          multiple
          id="add-rules"
          labelId="add-rules-label"
          value={option.add || []}
          onChange={(e) => changeOption({ ...option, add: e.target.value as string[] })}
        >
          {Object.keys(specialRules).map((rule) => (
            <MenuItem key={rule} value={rule}>
              {rule}
            </MenuItem>
          ))}
        </Select>
        {/* ------------------------------- Set Stats ------------------------------- */}
        <InputLabel id="options-label" style={{ marginTop: 15 }}>
          Set Stats
        </InputLabel>
        <List>
          {option.setStats &&
            Object.keys(option.setStats).map((name) => (
              <ListItem id={name} key={name}>
                <ListItemText>{statData[name].name}</ListItemText>
                <Select
                  value={option.setStats ? option.setStats[name as keyof UnitStats] : 0}
                  type="number"
                  onChange={(e) =>
                    changeOption({
                      ...option,
                      setStats: {
                        ...option.setStats,
                        [name]: e.target.value as number,
                      },
                    })
                  }
                >
                  {statData[name].range.map((value) => (
                    <MenuItem key={value} value={value}>
                      {value}
                    </MenuItem>
                  ))}
                </Select>
                <ListItemSecondaryAction>
                  <IconButton
                    size="small"
                    aria-label="Delete"
                    onClick={() =>
                      changeOption(
                        produce(option, (draft) => {
                          if (draft.setStats)
                            delete draft.setStats[name as keyof UnitStats];
                        })
                      )
                    }
                  >
                    <DeleteForeverIcon color="action" />
                  </IconButton>
                </ListItemSecondaryAction>
              </ListItem>
            ))}
          <ListItem id="add_opt" key="add_opt">
            <Button onClick={handleClickSetStat} startIcon={<AddCircleIcon />}>
              Add Stat
            </Button>
            <Menu
              id="add-stat-menu"
              anchorEl={anchorSetStat}
              keepMounted
              open={Boolean(anchorSetStat)}
              onClose={handleCloseSetStat}
            >
              {Object.keys(statData)
                .filter((k) => !Object.keys(option.setStats || {}).includes(k))
                .map((name) => (
                  <MenuItem
                    onClick={onClickSetStat(name as keyof UnitStats)}
                    key={name}
                  >
                    {statData[name].name}
                  </MenuItem>
                ))}
            </Menu>
          </ListItem>
        </List>
        {/* ----------------------------- Adjust Stats ------------------------------ */}
        <InputLabel id="adjust-options-label" style={{ marginTop: 15 }}>
          Adjust Stats
        </InputLabel>
        <List>
          {option.adjustStats &&
            Object.keys(option.adjustStats).map((name) => (
              <ListItem id={name} key={name}>
                <ListItemText>{statData[name].name}</ListItemText>
                <Select
                  value={
                    option.adjustStats ? option.adjustStats[name as keyof UnitStats] : 0
                  }
                  type="number"
                  onChange={(e) =>
                    changeOption({
                      ...option,
                      adjustStats: {
                        ...option.adjustStats,
                        [name]:
                          ((option.adjustStats &&
                            (option.adjustStats[name as keyof UnitStats] as number)) ||
                            0) + (e.target.value as number),
                      },
                    })
                  }
                >
                  {statData[name].adjustRange.map((value) => (
                    <MenuItem key={value} value={value}>
                      {value}
                    </MenuItem>
                  ))}
                </Select>
                <ListItemSecondaryAction>
                  <IconButton
                    size="small"
                    aria-label="Delete"
                    onClick={() =>
                      changeOption(
                        produce(option, (draft) => {
                          if (draft.adjustStats)
                            delete draft.adjustStats[name as keyof UnitStats];
                        })
                      )
                    }
                  >
                    <DeleteForeverIcon color="action" />
                  </IconButton>
                </ListItemSecondaryAction>
              </ListItem>
            ))}
          <ListItem id="add_opt_adj" key="add_opt_adj">
            <Button onClick={handleClickAdjustStat} startIcon={<AddCircleIcon />}>
              Add Stat
            </Button>
            <Menu
              id="adjust-stat-menu"
              anchorEl={anchorAdjustStat}
              keepMounted
              open={Boolean(anchorAdjustStat)}
              onClose={handleCloseAdjustStat}
            >
              {Object.keys(statData)
                .filter((k) => !Object.keys(option.adjustStats || {}).includes(k))
                .map((name) => (
                  <MenuItem
                    onClick={onClickAdjustStat(name as keyof UnitStats)}
                    key={name}
                  >
                    {statData[name].name}
                  </MenuItem>
                ))}
            </Menu>
          </ListItem>
        </List>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} color="primary">
          Cancel
        </Button>
        <Button onClick={handleAction} color="primary" disabled={name === ''}>
          Okay
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default OptionsForm;
