import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { IconButton } from '@mui/material';
import React from 'react';

const ExpandIcon: React.FC<{
  expanded: boolean;
  onClick: (e: React.MouseEvent<HTMLElement>) => void;
}> = ({ expanded, onClick }) => {
  return (
    <IconButton
      sx={
        expanded
          ? { transform: 'rotate(180deg)' }
          : { transform: 'rotate(0deg)', marginLeft: 'auto' }
      }
      onClick={onClick}
      size="large"
    >
      <ExpandMoreIcon />
    </IconButton>
  );
};

export default React.memo(ExpandIcon);
