import DeleteIcon from '@mui/icons-material/Delete';
import React, { useState } from 'react';
import { useAppDispatch } from '../hooks/reduxHooks';
import { showFeedback } from '../store/appStateSlice';
import { rosterStore } from '../store/persistantStorage';
import ListDialogMenu from './ListDialogMenu';

const DeleteList: React.FC<{ onClose?: () => void; showText?: boolean }> = ({
  onClose,
  showText,
}) => {
  const dispatch = useAppDispatch();
  const [savedRosters, setSavedRosters] = useState<string[]>([]);

  const handleOpen = () => rosterStore.keys().then((keys) => setSavedRosters(keys));

  const removeList = async (name: string) => {
    await rosterStore.removeItem(name);
    dispatch(showFeedback('Deleted!', 'success'));
  };

  return (
    <ListDialogMenu
      action={removeList}
      onOpen={handleOpen}
      options={savedRosters}
      title="Choose List to delete"
      text="Delete List"
      icon={<DeleteIcon />}
      showText={showText}
      onClose={onClose}
    />
  );
};

export default React.memo(DeleteList);
