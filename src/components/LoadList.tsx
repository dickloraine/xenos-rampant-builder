import SaveOutlinedIcon from '@mui/icons-material/SaveOutlined';
import React, { useState } from 'react';
import { useAppDispatch } from '../hooks/reduxHooks';
import { showFeedback, toggleForceInputUpdate } from '../store/appStateSlice';
import { rosterStore } from '../store/persistantStorage';
import { setRoster } from '../store/rosterSlice';
import { CompactRosterState } from '../store/types';
import ListDialogMenu from './ListDialogMenu';
import { unpackRoster } from './Roster';

const LoadList: React.FC<{ onClose?: () => void; showText?: boolean }> = ({
  onClose,
  showText,
}) => {
  const dispatch = useAppDispatch();
  const [savedRosters, setSavedRosters] = useState<string[]>([]);

  const handleOpen = () => rosterStore.keys().then((keys) => setSavedRosters(keys));

  const loadList = async (name: string) => {
    try {
      const compactRoster = await rosterStore.getItem<CompactRosterState>(name);
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const roster = unpackRoster(compactRoster!);
      dispatch(setRoster({ ...roster }));
      dispatch(toggleForceInputUpdate());
      dispatch(showFeedback(`${name} loaded!`, 'success'));
    } catch (err) {
      dispatch(showFeedback(`Could not load ${name}!`, 'error'));
    }
  };

  return (
    <ListDialogMenu
      action={loadList}
      onOpen={handleOpen}
      options={savedRosters}
      title="Choose List to load"
      text="Load List"
      icon={<SaveOutlinedIcon />}
      showText={showText}
      onClose={onClose}
    />
  );
};

export default React.memo(LoadList);
