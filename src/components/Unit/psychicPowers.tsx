import {
  Box,
  Container,
  FormControl,
  FormLabel,
  Input,
  List,
  ListItem,
  ListItemText,
  Select,
  Tooltip,
  Typography,
} from '@material-ui/core';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import React from 'react';
import { useAppSelector } from '../../hooks/reduxHooks';
import useOpen from '../../hooks/useOpen';
import { Unit } from '../../store/types';

const PsychicPowers: React.FC<{ unit: Unit; onChange: (unit: Unit) => void }> = ({
  unit,
  onChange,
}) => {
  const [open, handleOpen, handleClose] = useOpen();
  const powersData = useAppSelector((state) => state.data.psychicPowers);
  const inlineRules = useAppSelector((state) => state.ui.inlineRules);
  const viewMode = useAppSelector((state) => state.ui.viewMode);
  const editMode = useAppSelector((state) => state.ui.editMode);
  if (
    !unit.xenosRules.some((rule) =>
      ['Psychic 1', 'Psychic 2', 'Psychic 3', 'Psychic 4'].includes(rule)
    )
  )
    return <div></div>;

  const handleChange = (e: React.ChangeEvent<{ value: unknown }>) =>
    onChange({ ...unit, psiPowers: [...(e.target.value as string[])] });

  return (
    <Box marginBottom="-20px">
      {!viewMode && (
        <FormLabel onClick={handleOpen} component="legend">
          Psychic Powers <ArrowDropDownIcon />
        </FormLabel>
      )}
      <Container style={{ marginBottom: 0 }}>
        {viewMode && <Typography variant="h4">Psychic Powers</Typography>}
        {unit.psiPowers && (
          <List dense>
            <Box marginLeft={!inlineRules ? '1rem' : 'inherit'}>
              {unit.psiPowers.map((name, i, arr) => (
                <Tooltip key={name} title={powersData[name]?.effect || ''}>
                  {unit.psiPowers && !editMode && inlineRules ? (
                    <ListItem key={name}>
                      <ListItemText
                        primary={name}
                        secondary={powersData[name]?.short || ''}
                        primaryTypographyProps={{ variant: 'body2' }}
                        style={{ margin: 0 }}
                      />
                    </ListItem>
                  ) : (
                    <Typography variant="inherit" key={name}>
                      {name}
                      {i === arr.length - 1 ? '' : ', '}
                    </Typography>
                  )}
                </Tooltip>
              ))}
            </Box>
          </List>
        )}
      </Container>
      <FormControl style={{ marginTop: 10, width: 0, height: 0 }}>
        <Select
          open={open}
          onClose={handleClose}
          onOpen={handleOpen}
          IconComponent={() => <Box />}
          multiple
          value={unit.psiPowers}
          onChange={handleChange}
          input={<Input />}
          renderValue={() => ' '}
        >
          {Object.keys(powersData).map((name) => (
            <ListItem key={name} value={name} dense style={{ maxWidth: 400 }}>
              <Tooltip title={powersData[name].effect}>
                <ListItemText
                  primary={name}
                  secondary={(inlineRules && powersData[name]?.short) || ''}
                  primaryTypographyProps={{
                    color:
                      unit.psiPowers && unit.psiPowers.indexOf(name) > -1
                        ? 'primary'
                        : 'inherit',
                  }}
                  style={{ margin: 0 }}
                />
              </Tooltip>
            </ListItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
};

export default PsychicPowers;
