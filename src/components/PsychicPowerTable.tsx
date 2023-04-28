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
import { useState } from 'react';
import { useAppDispatch, useAppSelector } from '../hooks/reduxHooks';
import { getPsychicPowers } from '../store/rosterSlice';
import { toggleUIOption } from '../store/uiSlice';

const PsychicPowerTable = () => {
  const dispatch = useAppDispatch();
  const psychicData = useAppSelector((state) => getPsychicPowers(state));
  const powersExpanded = useAppSelector((state) => state.ui.powersExpanded);
  const [open, setOpen] = useState(
    [...Array(Object.keys(psychicData))].map(() => false)
  );

  const psycherInRoster = psychicData && Object.keys(psychicData).length > 0;

  const handlePowerClick = (index: number) => {
    const newOpen = [...open];
    newOpen[index] = !open[index];
    setOpen(newOpen);
  };

  return (
    <>
      {psycherInRoster && (
        <Accordion
          expanded={powersExpanded}
          onChange={() => dispatch(toggleUIOption('powersExpanded'))}
          style={{ maxWidth: 1210, marginBottom: 20 }}
        >
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography variant="h5">Psychic Power Table</Typography>
          </AccordionSummary>
          <AccordionDetails style={{ maxWidth: 800 }}>
            <Hidden smDown>
              <TableContainer>
                <Table size="small" style={{ minWidth: 650 }}>
                  <TableHead>
                    <TableRow key="headpowertable">
                      <TableCell style={{ minWidth: 120 }}>Power name</TableCell>
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
                    {Object.values(psychicData).map((power) => (
                      <TableRow key={power.name}>
                        <TableCell component="th" scope="row">
                          {power.name}
                        </TableCell>
                        <TableCell align="center">{power.difficulty}+</TableCell>
                        <TableCell>{power.target}</TableCell>
                        <TableCell>{power.duration}</TableCell>
                        <TableCell>{power.effect}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </Hidden>
            <Hidden mdUp>
              <List>
                {Object.values(psychicData).map((power, index) => (
                  <Box key={index}>
                    <ListItem
                      key={power.name + 'small'}
                      button
                      onClick={() => handlePowerClick(index)}
                    >
                      <ListItemText primary={power.name} />
                      <Box width={25}></Box>
                      {open[index] ? <ExpandLessIcon /> : <ExpandMoreIcon />}
                    </ListItem>
                    <Collapse in={open[index]} timeout="auto" unmountOnExit>
                      <List key={power.name + 'list'} dense style={{ paddingLeft: 20 }}>
                        <ListItem key={power.name + power.difficulty}>
                          <ListItemText
                            primary="Difficulty: "
                            secondary={power.difficulty}
                          />
                        </ListItem>
                        <ListItem key={power.name + power.target}>
                          <ListItemText primary="Target: " secondary={power.target} />
                        </ListItem>
                        <ListItem key={power.name + power.duration}>
                          <ListItemText
                            primary="Duration: "
                            secondary={power.duration}
                          />
                        </ListItem>
                        <ListItem key={power.name + power.effect}>
                          <ListItemText primary="Effect: " secondary={power.effect} />
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

export default PsychicPowerTable;
