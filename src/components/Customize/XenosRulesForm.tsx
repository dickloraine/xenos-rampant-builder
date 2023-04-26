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
import { useSelector } from 'react-redux';
import useAnchor from '../../hooks/useAnchor';
import { selectUnitNames } from '../../store/dataSlice';
import { RootState, UnitStats, XenosRule } from '../../store/types';
import range from '../../utils/range';
import statData from '../../utils/statData';
import { CustomFormProps } from './CustomizeList';

function XenosRulesForm(props: CustomFormProps<XenosRule>) {
  const [anchorSetStat, handleClickSetStat, handleCloseSetStat] = useAnchor();
  const [anchorAdjustStat, handleClickAdjustStat, handleCloseAdjustStat] = useAnchor();
  const { open, handleClose, initialState, changeState, handleAction, validateName } =
    props;
  const rule = initialState;
  const units = useSelector((state: RootState) => selectUnitNames(state));

  const onClickSetStat = (name: keyof UnitStats) => () => {
    changeState({
      ...rule,
      setStats: {
        ...rule.setStats,
        [name]: 4,
      },
    });
    handleCloseSetStat();
  };

  const onClickAdjustStat = (name: keyof UnitStats) => () => {
    changeState({
      ...rule,
      adjustStats: {
        ...rule.adjustStats,
        [name]: 0,
      },
    });
    handleCloseAdjustStat();
  };

  return (
    <Dialog onClose={handleClose} open={open}>
      <DialogTitle>Xenos Rule</DialogTitle>
      <DialogContent>
        <TextField
          label="Name"
          type="text"
          margin="normal"
          fullWidth
          value={rule.name}
          onChange={(e) => changeState({ ...rule, name: e.target.value })}
          error={!validateName()}
          helperText="You have to choose a unique name!"
        />
        <TextField
          label="Points"
          margin="normal"
          type="number"
          select
          SelectProps={{
            value: rule.points,
            onChange: (e) => changeState({ ...rule, points: e.target.value as number }),
          }}
        >
          {range(-4, 6).map((value) => (
            <MenuItem key={value} value={value}>
              {value}
            </MenuItem>
          ))}
        </TextField>
        <TextField
          label="Description"
          type="text"
          margin="normal"
          fullWidth
          multiline
          value={rule.description}
          onChange={(e) => changeState({ ...rule, description: e.target.value })}
        />
        <TextField
          label="Exclude&nbsp;Units"
          margin="normal"
          select
          SelectProps={{
            multiple: true,
            value: rule.exclude_units,
            onChange: (e) =>
              changeState({ ...rule, exclude_units: e.target.value as string[] }),
          }}
        >
          {units.map((name) => (
            <MenuItem key={name} value={name}>
              {name}
            </MenuItem>
          ))}
        </TextField>
        {/* ------------------------------- Set Stats ------------------------------- */}
        <InputLabel id="rules-label" style={{ marginTop: 15 }}>
          Set Stats
        </InputLabel>
        <List>
          {rule.setStats &&
            Object.keys(rule.setStats).map((name) => (
              <ListItem id={name} key={name}>
                <ListItemText>{statData[name].name}</ListItemText>
                <Select
                  value={rule.setStats ? rule.setStats[name as keyof UnitStats] : 0}
                  type="number"
                  onChange={(e) =>
                    changeState({
                      ...rule,
                      setStats: {
                        ...rule.setStats,
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
                      changeState(
                        produce(rule, (draft) => {
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
          <ListItem id="add_rules" key="add_rules">
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
                .filter((k) => !Object.keys(rule.setStats || {}).includes(k))
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
        <InputLabel id="adjust-rules-label" style={{ marginTop: 15 }}>
          Adjust Stats
        </InputLabel>
        <List>
          {rule.adjustStats &&
            Object.keys(rule.adjustStats).map((name) => (
              <ListItem id={name} key={name}>
                <ListItemText>{statData[name].name}</ListItemText>
                <Select
                  value={
                    rule.adjustStats ? rule.adjustStats[name as keyof UnitStats] : 0
                  }
                  type="number"
                  onChange={(e) =>
                    changeState({
                      ...rule,
                      adjustStats: {
                        ...rule.adjustStats,
                        [name]:
                          ((rule.adjustStats &&
                            (rule.adjustStats[name as keyof UnitStats] as number)) ||
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
                      changeState(
                        produce(rule, (draft) => {
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
          <ListItem id="add_rules_adj" key="add_rules_adj">
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
                .filter((k) => !Object.keys(rule.adjustStats || {}).includes(k))
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
        <Button onClick={handleAction} color="primary" disabled={!validateName()}>
          Okay
        </Button>
      </DialogActions>
    </Dialog>
  );
}

export default XenosRulesForm;
