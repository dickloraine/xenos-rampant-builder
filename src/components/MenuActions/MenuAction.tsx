import { Box, IconButton, Tooltip, Typography } from '@mui/material';
import { ReactNode } from 'react';

type MenuProps = {
  text: string;
  icon: JSX.Element;
  action?: () => void;
  showText?: boolean;
  children?: ReactNode;
  enabled?: boolean;
};

const MenuAction = ({
  text,
  icon,
  showText,
  action,
  enabled = true,
  children,
}: MenuProps) => {
  return (
    <>
      <Box display="flex" alignItems="center" onClick={action}>
        <Tooltip title={text}>
          <IconButton
            color={enabled ? 'inherit' : 'default'}
            aria-label={text}
            size="large"
          >
            {icon}
          </IconButton>
        </Tooltip>
        {showText && (
          <Typography color={enabled ? 'inherit' : 'textSecondary'}>{text}</Typography>
        )}
      </Box>
      {children}
    </>
  );
};

export default MenuAction;
