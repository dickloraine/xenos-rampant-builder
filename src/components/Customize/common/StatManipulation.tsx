import AddCircleIcon from '@mui/icons-material/AddCircle';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import {
  Button,
  IconButton,
  InputLabel,
  List,
  ListItem,
  ListItemSecondaryAction,
  Menu,
  MenuItem,
} from '@mui/material';
import produce from 'immer';
import { UseFormSetValue, UseFormWatch } from 'react-hook-form';
import useAnchor from '../../../hooks/useAnchor';
import { SelectElement } from '../../../libs/react-hook-form-mui';
import { UnitStats } from '../../../store/types';
import statData from '../../../utils/statData';

type StatManipulationProps = {
  title: string;
  type: 'setStats' | 'adjustStats';
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  watch: UseFormWatch<any>;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  setValue: UseFormSetValue<any>;
};

const StatManipulation = ({ title, type, watch, setValue }: StatManipulationProps) => {
  const [anchorStat, handleClickStat, handleCloseStat] = useAnchor();
  const rangeType = type === 'setStats' ? 'range' : 'adjustRange';

  return (
    <>
      <InputLabel id="options-label" sx={{ mt: 2 }}>
        {title}
      </InputLabel>
      <List>
        {Object.keys(watch(type) || {}).map((name) => (
          <ListItem id={name} key={name}>
            <SelectElement
              name={type + '.' + name}
              label={statData[name].name}
              type="number"
              fullWidth
              options={statData[name][rangeType]}
            />
            <ListItemSecondaryAction>
              <IconButton
                size="small"
                aria-label="Delete"
                onClick={() =>
                  setValue(
                    type,
                    // eslint-disable-next-line @typescript-eslint/no-explicit-any
                    produce(watch(type), (draft: any) => {
                      if (draft) delete draft[name as keyof UnitStats];
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
          <Button onClick={handleClickStat} startIcon={<AddCircleIcon />}>
            Add Stat
          </Button>
          <Menu
            id="add-stat-menu"
            anchorEl={anchorStat}
            keepMounted
            open={Boolean(anchorStat)}
            onClose={handleCloseStat}
          >
            {Object.keys(statData)
              .filter((k) => !Object.keys(watch(type) || {}).includes(k))
              .map((name) => (
                <MenuItem
                  onClick={() =>
                    setValue(type, {
                      ...watch(type),
                      [name]: type === 'setStats' ? 4 : 0,
                    })
                  }
                  key={name}
                >
                  {statData[name].name}
                </MenuItem>
              ))}
          </Menu>
        </ListItem>
      </List>
    </>
  );
};

export default StatManipulation;
