import React from 'react';

const useAnchor = (): [
  null | HTMLElement,
  (event: React.MouseEvent<HTMLButtonElement>) => void,
  () => void,
] => {
  const [anchor, _setAnchor] = React.useState<null | HTMLElement>(null);

  const setAnchor = (event: React.MouseEvent<HTMLButtonElement>) => {
    _setAnchor(event.currentTarget);
  };

  const removeAnchor = () => {
    _setAnchor(null);
  };

  return [anchor, setAnchor, removeAnchor];
};

export default useAnchor;
