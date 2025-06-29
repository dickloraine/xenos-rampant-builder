import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Collapse,
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
} from '@mui/material';
import { useState } from 'react';
import { useAppDispatch, useAppSelector } from '../hooks/reduxHooks';
import { getPsychicPowers } from '../store/rosterSlice';
import { toggleUIOption } from '../store/uiSlice';

const PsychicPowerTable = () => {
  const dispatch = useAppDispatch();
  const psychicData = useAppSelector(getPsychicPowers);
  const powersExpanded = useAppSelector((state) => state.ui.powersExpanded);
  const printMode = useAppSelector((state) => state.ui.printMode);
  const [open, setOpen] = useState(
    [...Array(Object.keys(psychicData))].map(() => false)
  );

  const psycherInRoster = psychicData && Object.keys(psychicData).length > 0;

  const handlePowerClick = (index: number) => {
    const newOpen = [...open];
    newOpen[index] = !open[index];
    setOpen(newOpen);
  };

  // Force expand in print mode
  const isExpanded = printMode || powersExpanded;

  return (
    <>
      {psycherInRoster && (
        <Accordion
          expanded={isExpanded}
          onChange={() => dispatch(toggleUIOption('powersExpanded'))}
          sx={{ maxWidth: 1210 }}
        >
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography variant="h3">Psychic Power Table</Typography>
          </AccordionSummary>
          <AccordionDetails sx={{ maxWidth: 800 }}>
            <TableContainer sx={{ display: { xs: 'none', md: 'block' } }}>
              <Table size="small" sx={{ minWidth: 650 }}>
                <TableHead>
                  <TableRow key="headpowertable">
                    <TableCell sx={{ minWidth: 120 }}>Power name</TableCell>
                    <TableCell
                      align="center"
                      sx={{ display: { md: 'none', lg: 'block' } }}
                    >
                      Difficulty
                    </TableCell>
                    <TableCell
                      align="center"
                      sx={{ display: { md: 'block', lg: 'none' } }}
                    >
                      Dif
                    </TableCell>
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
            <List sx={{ display: { md: 'none', xs: 'block' } }}>
              {Object.values(psychicData).map((power, index) => (
                <Box key={index}>
                  <ListItem
                    key={power.name + 'small'}
                    onClick={() => handlePowerClick(index)}
                  >
                    <ListItemText primary={power.name} />
                    <Box width={25}></Box>
                    {open[index] ? <ExpandLessIcon /> : <ExpandMoreIcon />}
                  </ListItem>
                  <Collapse in={open[index]} timeout="auto" unmountOnExit>
                    <List key={power.name + 'list'} dense sx={{ pl: 3 }}>
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
                        <ListItemText primary="Duration: " secondary={power.duration} />
                      </ListItem>
                      <ListItem key={power.name + power.effect}>
                        <ListItemText primary="Effect: " secondary={power.effect} />
                      </ListItem>
                    </List>
                  </Collapse>
                </Box>
              ))}
            </List>
          </AccordionDetails>
        </Accordion>
      )}
    </>
  );
};

export default PsychicPowerTable;
