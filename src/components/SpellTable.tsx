import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Collapse,
  Hidden,
  List,
  ListItem,
  ListItemText,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from '@material-ui/core';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getSpecialRules } from 'store/rosterSlice';
import { RootState } from 'store/types';
import { toggleUIOption } from 'store/uiSlice';

const SpellTable = () => {
  const dispatch = useDispatch();
  const spellData = useSelector((state: RootState) => state.data.spellData);
  const spellsExpanded = useSelector((state: RootState) => state.ui.spellsExpanded);
  const units = useSelector((state: RootState) => state.roster.units);
  const [open, setOpen] = useState([...Array(Object.keys(spellData))].map(() => false));
  const specialRules = getSpecialRules(units);

  const spellcasterInRoster = () => {
    for (const rule of specialRules) {
      if (rule === 'Spellcaster' || rule === 'Wizardlings') return true;
    }
    return false;
  };

  const handleSpellClick = (index: number) => {
    const newOpen = [...open];
    newOpen[index] = !open[index];
    setOpen(newOpen);
  };

  return (
    <>
      {spellcasterInRoster() && (
        <Accordion
          expanded={spellsExpanded}
          onChange={() => dispatch(toggleUIOption('spellsExpanded'))}
          style={{ maxWidth: 1210 }}
        >
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography variant="h5">Spell Table</Typography>
          </AccordionSummary>
          <AccordionDetails style={{ maxWidth: 800 }}>
            <Hidden smDown>
              <TableContainer>
                <Table size="small" style={{ minWidth: 650 }}>
                  <TableHead>
                    <TableRow key="headspelltable">
                      <TableCell style={{ minWidth: 100 }}>Spell name</TableCell>
                      <Hidden smDown>
                        <TableCell align="center">Difficulty</TableCell>
                      </Hidden>
                      <Hidden mdUp>
                        <TableCell align="center">Dif</TableCell>
                      </Hidden>
                      <TableCell>Target</TableCell>
                      <TableCell>Duration</TableCell>
                      <TableCell>Effect</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {Object.values(spellData).map((spell) => (
                      <TableRow key={spell.name}>
                        <TableCell component="th" scope="row">
                          {spell.name}
                        </TableCell>
                        <TableCell align="center">{spell.difficulty}+</TableCell>
                        <TableCell>{spell.target}</TableCell>
                        <TableCell>{spell.duration}</TableCell>
                        <TableCell>{spell.effect}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </Hidden>
            <Hidden mdUp>
              <List>
                {Object.values(spellData).map((spell, index) => (
                  <Box key={index}>
                    <ListItem
                      key={spell.name + 'small'}
                      button
                      onClick={() => handleSpellClick(index)}
                    >
                      <ListItemText primary={spell.name} />
                      <Box width={25}></Box>
                      {open[index] ? <ExpandLessIcon /> : <ExpandMoreIcon />}
                    </ListItem>
                    <Collapse in={open[index]} timeout="auto" unmountOnExit>
                      <List key={spell.name + 'list'} dense style={{ paddingLeft: 20 }}>
                        <ListItem key={spell.name + spell.difficulty}>
                          <ListItemText
                            primary="Difficulty: "
                            secondary={spell.difficulty}
                          />
                        </ListItem>
                        <ListItem key={spell.name + spell.target}>
                          <ListItemText primary="Target: " secondary={spell.target} />
                        </ListItem>
                        <ListItem key={spell.name + spell.duration}>
                          <ListItemText
                            primary="Duration: "
                            secondary={spell.duration}
                          />
                        </ListItem>
                        <ListItem key={spell.name + spell.effect}>
                          <ListItemText primary="Effect: " secondary={spell.effect} />
                        </ListItem>
                      </List>
                    </Collapse>
                  </Box>
                ))}
              </List>
            </Hidden>
          </AccordionDetails>
        </Accordion>
      )}
    </>
  );
};

export default SpellTable;
