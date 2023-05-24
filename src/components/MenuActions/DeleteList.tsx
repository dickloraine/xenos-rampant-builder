import DeleteIcon from '@mui/icons-material/Delete';
import React, { useState } from 'react';
import { useAppDispatch } from '../../hooks/reduxHooks';
import { showFeedback } from '../../store/appStateSlice';
import { rosterStore } from '../../store/persistantStorage';
import ListDialog from '../ListDialog';
import MenuAction from './MenuAction';

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
    <ListDialog
      action={removeList}
      anchor={
        <MenuAction text={'Delete List'} icon={<DeleteIcon />} showText={showText} />
      }
      onOpen={handleOpen}
      options={savedRosters}
      title="Choose List to delete"
      onClose={onClose}
    />
  );
};

export default React.memo(DeleteList);
