import React from 'react';

const useOpen = (
  isOpen = false,
  onOpen?: () => void,
  onClose?: () => void
): [boolean, () => void, () => void] => {
  const [open, setOpen] = React.useState(isOpen);

  const handleOpen = () => {
    setOpen(true);
    if (onOpen) onOpen();
  };
  const handleClose = () => {
    if (onClose) onClose();
    setOpen(false);
  };

  return [open, handleOpen, handleClose];
};

export default useOpen;
