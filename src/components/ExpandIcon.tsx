import { IconButton } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import clsx from 'clsx';
import React from 'react';

const useStyles = makeStyles((theme) => ({
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
}));

const ExpandIcon: React.FC<{
  expanded: boolean;
  onClick: (e: React.MouseEvent<HTMLElement>) => void;
}> = ({ expanded, onClick }) => {
  const classes = useStyles();

  return (
    <IconButton
      className={clsx(classes.expand, {
        [classes.expandOpen]: expanded,
      })}
      onClick={onClick}
    >
      <ExpandMoreIcon />
    </IconButton>
  );
};

export default React.memo(ExpandIcon);
